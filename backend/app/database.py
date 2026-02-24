import os
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


def _resolve_database_url() -> str:
    configured_url = os.getenv("DATABASE_URL", "sqlite:///./portfolio.db")
    if not configured_url.startswith("sqlite"):
        return configured_url

    if ":memory:" in configured_url:
        return configured_url

    if ":///" not in configured_url:
        return configured_url

    raw_path = configured_url.split(":///", 1)[1]
    if not raw_path:
        return configured_url

    db_path = Path(raw_path)
    if not db_path.is_absolute():
        backend_root = Path(__file__).resolve().parent.parent
        db_path = (backend_root / db_path).resolve()

    try:
        db_path.parent.mkdir(parents=True, exist_ok=True)
        return f"sqlite:///{db_path.as_posix()}"
    except OSError:
        fallback_path = (Path(__file__).resolve().parent.parent / "portfolio.db").resolve()
        fallback_path.parent.mkdir(parents=True, exist_ok=True)
        return f"sqlite:///{fallback_path.as_posix()}"


DATABASE_URL = _resolve_database_url()

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
