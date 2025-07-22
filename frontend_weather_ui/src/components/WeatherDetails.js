import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function WeatherDetails({ details }) {
  return (
    <section className="weather-details">
      <h3>Weather Details</h3>
      <div className="details-grid">
        <div className="detail-card">
          <span className="detail-title">Humidity</span>
          <span className="detail-value">{details.humidity}%</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Wind</span>
          <span className="detail-value">
            {details.wind.speed} m/s
            {details.wind.gust ? ` (gust: ${details.wind.gust} m/s)` : ""}
          </span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Pressure</span>
          <span className="detail-value">{details.pressure} hPa</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Feels Like</span>
          <span className="detail-value">{Math.round(details.feels_like)}°C</span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Visibility</span>
          <span className="detail-value">
            {details.visibility ? `${details.visibility / 1000} km` : "N/A"}
          </span>
        </div>
        <div className="detail-card">
          <span className="detail-title">Clouds</span>
          <span className="detail-value">
            {details.clouds ? `${details.clouds.all}%` : "N/A"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default WeatherDetails;
