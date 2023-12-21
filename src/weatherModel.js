"use client";
import { getWeather } from "./weatherSource";
import { useState, createContext, useContext } from "react";

export const WeatherModelContext = createContext(null);

export function WeatherModelProvider({ children }) {
  const weatherModel = WeatherModel();
  return (
    <WeatherModelContext.Provider value={weatherModel}>
      {children}
    </WeatherModelContext.Provider>
  );
}

export const useWeatherModel = () => useContext(WeatherModelContext);

export default function WeatherModel() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [currentID, setCurrentID] = useState(-1);

  const fetchCurrentWeather = async () => {
    try {
      const data = await getWeather();
      setCurrentWeather(data["weather"][0]["main"]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const fetchWeatherData = async () => {
    try {
      const data = await getWeather();
      setWeatherData(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  function setWeatherId(id) {
    if (currentID === id || !Number.isInteger(id)) return;
    setCurrentID(id);
  }

  return {
    currentWeather,
    weatherData,
    currentID,
    setWeatherId,
    fetchWeatherData,
    fetchCurrentWeather,
  };
}
