"use client";

import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../weatherApiConfig";

export default function Location() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchWeather() {
    try {
      const location = await getCurrentLocation();
      const { lat, lon } = location;
      const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setLoading(false); // Set loading to false after API response
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Update every minute (60000 milliseconds)
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  async function getCurrentLocation() {
    try {
      const response = await fetch("http://ip-api.com/json/");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="text-center">
      {loading ? (
        <p>Loading...</p> // Display loading state while waiting for API response
      ) : (
        <div className="my-8">
          {weather && (
            <div>
              <h3>Main Weather Information</h3>
              <p>Current Temperature: {weather["main"]["temp"]}°C</p>
              <p>Humidity: {weather["main"]["humidity"]}%</p>
              {/* Add more properties from the 'main' object as needed */}
            </div>
          )}
        </div>
      )}
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => {}}
      >
        Generate Content
      </button>
    </div>
  );
}
