"use client";

import { useState } from "react";
import { BASE_URL, API_KEY } from "../../weatherApiConfig";

export default function Location() {
  const [weather, setWeather] = useState(null);
  function getCurrentLocation() {
    return fetch("http://ip-api.com/json/").then((response) => response.json());
  }

  function getWeather() {
    getCurrentLocation().then((location) => {
      console.log(location);
      const { lat, lon } = location;
      const url = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        });
    });
  }
  return (
    <div>
      <button
        className="border border-solid rounded border-2 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4"
        onClick={getWeather}
      >
        Get Current Location
      </button>
      {weather && (
        <div>
          <h2>Weather Data</h2>
          <pre>{JSON.stringify(weather["weather"], null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
