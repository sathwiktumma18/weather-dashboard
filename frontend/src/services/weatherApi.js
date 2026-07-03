const API_BASE_URL = 'http://127.0.0.1:8000';

// Request weather data from the FastAPI backend for the provided city.
export async function fetchWeather(city) {
  const response = await fetch(`${API_BASE_URL}/weather?city=${encodeURIComponent(city)}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Unable to load weather information.');
  }

  return response.json();
}
