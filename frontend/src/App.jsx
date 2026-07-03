import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeather } from './services/weatherApi';
import './styles.css';

function App() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Submit the city to the backend and update the UI accordingly.
  const handleSearch = async (event) => {
    event.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <main className="dashboard">
        <section className="hero-card">
          <div>
            <p className="eyebrow">Weather Forecast</p>
            <h1>Modern Weather Dashboard</h1>
            <p className="hero-text">
              Stay informed with real-time weather insights for any city around the world.
            </p>
          </div>
          <SearchBar city={city} setCity={setCity} onSearch={handleSearch} loading={loading} />
        </section>

        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}

        {!loading && weather && (
          <section className="results-grid">
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
