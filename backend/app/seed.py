from sqlalchemy.orm import Session
from .models import ResumeSection


SEED_DATA = [
    {
        "section": "About",
        "content": (
            "Sarvjeet is a MERN developer, Web3 enthusiast, and algorithmic thinker. "
            "He is focused on continuous daily progress and practical software building."
        ),
    },
    {
        "section": "Skills",
        "content": (
            "Languages: C, C++, SQL, JavaScript, Solidity, PHP. "
            "Frameworks: Express, Node.js, React, Hardhat. "
            "Databases/Cloud: MongoDB, PostgreSQL, MySQL, Redis. "
            "Tools: GitHub, VS Code, Postman, Vercel, Render, Upstash, Docker, Hugging Face."
        ),
    },
    {
        "section": "Projects",
        "content": (
            "Portfolio projects include Telemed and NFT Market. "
            "Prototype work includes Attendance System, Cron-based tooling, and Terminal Chat interfaces."
        ),
    },
    {
        "section": "Contact",
        "content": (
            "Email: sarvjeet852003@gmail.com. "
            "GitHub: github.com/Noobie0805. "
            "LinkedIn: linkedin.com/in/sarvjeet-kumar-505999262/."
        ),
    },
]


def seed_resume(db: Session) -> None:
    if db.query(ResumeSection).count() > 0:
        return

    for row in SEED_DATA:
        db.add(ResumeSection(section=row["section"], content=row["content"]))

    db.commit()
