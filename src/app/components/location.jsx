"use client";

import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../weatherApiConfig";

export default function Location() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentLocation().then((location) => {
      const { lat, lon } = location;
      const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
          setLoading(false); // Set loading to false after API response
        });
    });
  }, []);

  function getCurrentLocation() {
    return fetch("http://ip-api.com/json/").then((response) => response.json());
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
