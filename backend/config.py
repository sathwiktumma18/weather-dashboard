import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from the backend folder's .env file.
BASE_DIR = Path(__file__).resolve().parent
load_dotenv(dotenv_path=BASE_DIR / '.env')

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY", "")
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173")
