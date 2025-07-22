import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function WeatherForecast({ forecast }) {
  // Helper: parse date
  function formatDate(dt_txt) {
    const d = new Date(dt_txt);
    return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }

  return (
    <section className="weather-forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {forecast.map((day, idx) => (
          <div key={day.dt} className="forecast-item">
            <div className="forecast-date">{formatDate(day.dt_txt)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              width={38}
              height={38}
            />
            <div className="forecast-temp">
              {Math.round(day.main.temp)}°C
            </div>
            <div className="forecast-desc">
              {day.weather[0].main}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherForecast;
