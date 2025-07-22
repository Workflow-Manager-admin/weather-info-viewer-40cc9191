import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherSummary from "./components/WeatherSummary";
import WeatherForecast from "./components/WeatherForecast";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  // App theme (light only, but may be toggled if extended)
  const [theme] = useState("light");

  // Weather states
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  async function fetchWeather(selectedCity) {
    setWeather(null);
    setForecast([]);
    setDetails({});
    setLoading(true);
    setError("");
    setCity(selectedCity);

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

    if (!apiKey) {
      setError("OpenWeatherMap API key not set.");
      setLoading(false);
      return;
    }

    try {
      // Fetch current weather
      const mainRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          selectedCity
        )}&appid=${apiKey}&units=metric`
      );
      if (!mainRes.ok) throw new Error("City not found");

      const mainData = await mainRes.json();

      // Fetch forecast (5-day/3-hour, extract 5 days)
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          selectedCity
        )}&appid=${apiKey}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Forecast data error");

      const forecastData = await forecastRes.json();

      // Parse next 5 days, 1 per day at 12:00
      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      ).slice(0, 5);

      setWeather(mainData);
      setForecast(dailyForecast);

      setDetails({
        humidity: mainData.main.humidity,
        wind: mainData.wind,
        pressure: mainData.main.pressure,
        feels_like: mainData.main.feels_like,
        visibility: mainData.visibility,
        clouds: mainData.clouds,
      });
    } catch (e) {
      setError(
        e?.message === "City not found"
          ? "City not found. Please try again."
          : "Failed to fetch weather data."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`App ${theme}`}>
      <div className="weather-app-container">
        <Header />
        <SearchBar onSearch={fetchWeather} loading={loading} />
        {error && (
          <div className="error-message" data-testid="error-message">
            {error}
          </div>
        )}
        {weather && (
          <WeatherSummary city={city} weather={weather} />
        )}
        {forecast.length > 0 && (
          <WeatherForecast forecast={forecast} />
        )}
        {weather && (
          <WeatherDetails details={details} />
        )}
      </div>
    </div>
  );
}

export default App;
