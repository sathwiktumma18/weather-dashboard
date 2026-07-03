import React from 'react';

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="weather-card main-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Current Weather</p>
          <h1>
            {weather.city}, {weather.country}
          </h1>
        </div>
        <img src={iconUrl} alt={weather.description} className="weather-icon" />
      </div>

      <div className="temperature-block">
        <div className="temperature">{weather.temperature}°C</div>
        <p className="description">{weather.description}</p>
      </div>

      <div className="meta-grid">
        <div>
          <span>Feels Like</span>
          <strong>{weather.feels_like}°C</strong>
        </div>
        <div>
          <span>Humidity</span>
          <strong>{weather.humidity}%</strong>
        </div>
        <div>
          <span>Pressure</span>
          <strong>{weather.pressure} hPa</strong>
        </div>
        <div>
          <span>Wind</span>
          <strong>{weather.wind_speed} m/s</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
