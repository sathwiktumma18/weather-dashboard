from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

from config import CORS_ORIGINS
from weather import fetch_weather

# Create the FastAPI application instance.
app = FastAPI(title="Weather Dashboard API", version="1.0.0")

# Allow the local Vite frontend to communicate with the API during development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in CORS_ORIGINS.split(",") if origin.strip()],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def health_check() -> dict:
    """Return a simple health status for local development."""
    return {"status": "ok", "message": "Weather API is running"}


@app.get("/weather")
def get_weather(city: str = Query(..., min_length=1)) -> dict:
    """Return weather information for a requested city."""
    if not city.strip():
        raise HTTPException(status_code=400, detail="City name is required.")

    try:
        return fetch_weather(city.strip())
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except requests.RequestException as exc:
        raise HTTPException(status_code=502, detail="Unable to reach the weather service.") from exc
