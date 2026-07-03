# Weather Dashboard

A full-stack weather dashboard built locally with FastAPI and React + Vite.

## Structure

- Backend: FastAPI service that calls OpenWeatherMap.
- Frontend: React + Vite dashboard with a polished weather UI.

## Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
```

Add your OpenWeatherMap API key to the backend .env file.

Run the backend:

```bash
uvicorn app:app --reload
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at http://localhost:5173 and expects the backend at http://127.0.0.1:8000.
