"use client";

import { useState } from "react";
import { BASE_URL, API_KEY } from "../weatherApiConfig";

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
      <button onClick={getWeather}>Get Current Location</button>
      {weather && (
        <div>
          <h2>Weather Data</h2>
          <pre>{JSON.stringify(weather["weather"], null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
