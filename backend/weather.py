import os
from datetime import datetime
from typing import Any, Dict

import requests

from config import OPENWEATHER_API_KEY


def _to_human_time(timestamp: int) -> str:
    """Convert a Unix timestamp into a readable clock time."""
    return datetime.fromtimestamp(timestamp).strftime("%H:%M")


def fetch_weather(city: str) -> Dict[str, Any]:
    """Fetch weather data from OpenWeatherMap and return a clean payload."""
    if not OPENWEATHER_API_KEY or OPENWEATHER_API_KEY.startswith("your_"):
        raise ValueError("OpenWeatherMap API key is missing. Add it to the .env file.")

    url = (
        "https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={OPENWEATHER_API_KEY}&units=metric"
    )

    response = requests.get(url, timeout=10)
    response.raise_for_status()
    payload = response.json()

    if payload.get("cod") != 200:
        raise ValueError(payload.get("message", "Weather data is unavailable for that city."))

    weather = payload["weather"][0]
    main = payload["main"]
    wind = payload.get("wind", {})
    sys = payload.get("sys", {})

    return {
        "city": payload.get("name", city),
        "country": sys.get("country", ""),
        "temperature": round(main.get("temp", 0), 1),
        "feels_like": round(main.get("feels_like", 0), 1),
        "humidity": main.get("humidity", 0),
        "pressure": main.get("pressure", 0),
        "wind_speed": round(wind.get("speed", 0), 1),
        "description": weather.get("description", "Clear"),
        "icon": weather.get("icon", "01d"),
        "sunrise": _to_human_time(sys.get("sunrise", 0)),
        "sunset": _to_human_time(sys.get("sunset", 0)),
    }
