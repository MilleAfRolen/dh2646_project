"use client";
import { getWeather } from "./weatherSource";
import { useState, useEffect } from "react";

export default function WeatherModel() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [currentID, setCurrentID] = useState(-1);

  useEffect(() => {
    async function setWeather() {
      const data = await getWeather();
      setWeatherData(data);
      setCurrentWeather(data["weather"][0]["main"]);
    }
    setWeather();
  }, []);

  function setWeatherId(id) {
    if (currentID === id || !Number.isInteger(id)) return;
    setCurrentID(id);
  }

  return { currentWeather, weatherData, currentID, setWeatherId };
}
