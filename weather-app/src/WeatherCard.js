import React from 'react';
import './WeatherCard.css';

function WeatherCard({ temperature, condition, humidity }) {
  return (
    <div className="weather-card">
      <h2>Worcester, MA Weather</h2>
      <p className="temp">
        <strong>Temperature:</strong> {temperature} °F
      </p>
      <p className="desc">
        <strong>Condition:</strong> {condition}
      </p>
      <p className="humidity">
        <strong>Humidity:</strong> {humidity}%
      </p>
    </div>
  );
}

export default WeatherCard;
