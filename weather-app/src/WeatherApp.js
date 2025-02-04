import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const API_KEY = 'API_KEY_HERE'; // Replace with your Weatherbit API key

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Function to fetch weather data from Weatherbit API
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=Worcester&state=MA&country=US&key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Weatherbit returns the weather data inside the "data" array.
      setWeatherData(data.data[0]);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(err);
    }
  };

  // Display error message if there was an issue fetching data
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display a loading message while data is being fetched
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="weather-app">
      <WeatherCard 
        temperature={weatherData.temp} // Temperature provided by Weatherbit
        condition={weatherData.weather.description} // Weather description
        humidity={weatherData.rh} // Relative humidity
      />
    </div>
  );
}

export default WeatherApp;
