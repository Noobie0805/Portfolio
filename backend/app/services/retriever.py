import re
from collections import Counter


def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-zA-Z0-9_]+", text.lower())


def rank_sections(query: str, sections: list[dict], top_k: int = 3) -> list[dict]:
    query_tokens = tokenize(query)
    if not query_tokens:
        return sections[:top_k]

    query_counter = Counter(query_tokens)
    scored: list[tuple[int, dict]] = []

    for section in sections:
        section_tokens = tokenize(f"{section['section']} {section['content']}")
        section_counter = Counter(section_tokens)
        score = sum(min(freq, section_counter[token]) for token, freq in query_counter.items())
        scored.append((score, section))

    scored.sort(key=lambda pair: pair[0], reverse=True)
    best = [item for score, item in scored if score > 0]
    if best:
        return best[:top_k]
    return [item for _, item in scored[:top_k]]
