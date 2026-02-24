from sqlalchemy import Column, Integer, String, Text
from .database import Base


class ResumeSection(Base):
    __tablename__ = "resume_sections"

    id = Column(Integer, primary_key=True, index=True)
    section = Column(String(120), nullable=False, index=True)
    content = Column(Text, nullable=False)
