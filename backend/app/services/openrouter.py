import os
import httpx

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
SYSTEM_PROMPT = (
    "You are an assistant for a portfolio website. "
    "Answer only using the given resume context. "
    "If information is missing, say: 'I couldn't find that in the resume data.' "
    "Format every answer as short bullet points using '-' with 3 to 6 points, "
    "no numbering, and no extra heading. "
    "Each point should be concise and directly relevant to the question."
)


def _extract_answer(data: dict) -> str:
    return data["choices"][0]["message"]["content"].strip()


async def ask_openrouter(prompt: str) -> str:
    api_key = os.getenv("OPENROUTER_API_KEY", "").strip()
    model = os.getenv("OPENROUTER_MODEL", "google/gemini-2.0-flash-exp:free")

    if not api_key:
        return (
            "OpenRouter key is not configured yet. Add OPENROUTER_API_KEY in backend/.env "
            "to enable AI responses."
        )

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.2,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(OPENROUTER_URL, headers=headers, json=payload)

        if response.status_code == 429:
            return "The AI provider is currently rate-limited. Please retry shortly."

        if response.status_code == 400 and "Developer instruction is not enabled" in response.text:
            fallback_payload = {
                "model": model,
                "messages": [{"role": "user", "content": f"{SYSTEM_PROMPT}\n\n{prompt}"}],
                "temperature": 0.2,
            }
            fallback_response = await client.post(
                OPENROUTER_URL,
                headers=headers,
                json=fallback_payload,
            )
            fallback_response.raise_for_status()
            return _extract_answer(fallback_response.json())

        response.raise_for_status()
        return _extract_answer(response.json())
