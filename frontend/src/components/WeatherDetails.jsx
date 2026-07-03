import React from 'react';

function WeatherDetails({ weather }) {
  return (
    <div className="weather-card details-card">
      <h2>Weather Details</h2>
      <div className="details-list">
        <div>
          <span>Sunrise</span>
          <strong>{weather.sunrise}</strong>
        </div>
        <div>
          <span>Sunset</span>
          <strong>{weather.sunset}</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
