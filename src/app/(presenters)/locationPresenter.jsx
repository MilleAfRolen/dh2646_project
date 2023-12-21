"use client";
import { useEffect } from "react";
import LocationView from "../(views)/locationView";

export default function Location({ model }) {
  useEffect(() => {
    model.fetchWeatherData();
  }, []);

  if (!model.weatherData) {
    return;
  }

  return (
    <LocationView
      weather={model.weatherData["weather"][0]["main"]}
      description={model.weatherData["weather"][0]["description"]}
      temp={model.weatherData["main"]["temp"]}
      humidity={model.weatherData["main"]["humidity"]}
    />
  );
}
