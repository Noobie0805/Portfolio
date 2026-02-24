from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(min_length=2, max_length=1000)


class ChatResponse(BaseModel):
    answer: str
    sources: list[str]
