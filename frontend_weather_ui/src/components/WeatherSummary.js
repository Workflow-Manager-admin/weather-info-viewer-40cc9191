import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function WeatherSummary({ city, weather }) {
  const { main, weather: weatherArr } = weather;
  const weatherMain = weatherArr[0];

  return (
    <section className="weather-summary">
      <h2>
        {city}{" "}
        <span className="weather-summary-icon" title={weatherMain.description}>
          <img
            src={`https://openweathermap.org/img/wn/${weatherMain.icon}@2x.png`}
            alt={weatherMain.description}
            width={60}
            height={60}
          />
        </span>
      </h2>
      <div className="weather-summary-main">
        <div className="weather-summary-temp">{Math.round(main.temp)}°C</div>
        <div className="weather-summary-desc">{weatherMain.main}</div>
        <div className="weather-summary-detail">
          {weatherMain.description.charAt(0).toUpperCase() +
            weatherMain.description.slice(1)}
        </div>
      </div>
    </section>
  );
}

export default WeatherSummary;
