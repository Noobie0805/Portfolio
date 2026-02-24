import os
import re
from dotenv import load_dotenv
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import Base, engine, get_db, SessionLocal
from .models import ResumeSection
from .schemas import ChatRequest, ChatResponse
from .seed import seed_resume
from .services.openrouter import ask_openrouter
from .services.retriever import rank_sections

load_dotenv()

GREETING_WORDS = {
    "hi",
    "hii",
    "hiii",
    "hello",
    "hey",
    "heyy",
    "yo",
    "hola",
    "namaste",
}


def _is_greeting(message: str) -> bool:
    cleaned = re.sub(r"[^a-zA-Z\s]", " ", message.lower()).strip()
    if not cleaned:
        return False
    tokens = [token for token in cleaned.split() if token]
    if len(tokens) > 3:
        return False
    return all(token in GREETING_WORDS for token in tokens)

app = FastAPI(title="AI Portfolio API", version="1.0.0")

allowed_origins = []
for origin in os.getenv(
    "APP_ORIGIN",
    "http://localhost:3000,https://sarvjeet-portfolio.vercel.app",
).split(","):
    normalized_origin = origin.strip().rstrip("/")
    if normalized_origin:
        allowed_origins.append(normalized_origin)

allow_origin_regex = os.getenv("APP_ORIGIN_REGEX", "").strip() or None

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=allow_origin_regex,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup_event() -> None:
    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db:
        seed_resume(db)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.get("/resume")
def get_resume(db: Session = Depends(get_db)) -> list[dict]:
    seed_resume(db)
    rows = db.query(ResumeSection).all()
    return [{"section": row.section, "content": row.content} for row in rows]


@app.post("/chat", response_model=ChatResponse)
async def chat(payload: ChatRequest, db: Session = Depends(get_db)) -> ChatResponse:
    if _is_greeting(payload.message):
        return ChatResponse(
            answer=(
                "Hey! 👋 I can help you with resume questions about Sarvjeet. "
                "Try asking about skills, projects, or contact details."
            ),
            sources=[],
        )

    seed_resume(db)
    rows = db.query(ResumeSection).all()
    if not rows:
        raise HTTPException(status_code=400, detail="Resume data not available")

    sections = [{"section": row.section, "content": row.content} for row in rows]
    selected = rank_sections(payload.message, sections, top_k=3)

    context_blocks = [f"[{item['section']}]\n{item['content']}" for item in selected]
    context_text = "\n\n".join(context_blocks)

    prompt = (
        "Use only the resume context below to answer the question.\n"
        "If the answer is not in the context, reply: 'I couldn't find that in the resume data.'\n\n"
        f"RESUME CONTEXT:\n{context_text}\n\n"
        f"QUESTION: {payload.message}"
    )

    try:
        answer = await ask_openrouter(prompt)
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"AI provider error: {exc}") from exc

    return ChatResponse(answer=answer, sources=[item["section"] for item in selected])
