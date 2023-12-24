"use client";
import { useEffect } from "react";
import WeatherInfoView from "../(views)/weatherInfoView";

export default function WeatherInfo({ model }) {
  useEffect(() => {
    model.fetchWeatherData();
    model.fetchCityInfo();
  }, []);

  if (!model.weatherData || !model.cityInfo) {
    return;
  }

  return (
    <WeatherInfoView
      weather={model.weatherData["weather"][0]["main"]}
      description={model.weatherData["weather"][0]["description"]}
      temp={model.weatherData["main"]["temp"]}
      humidity={model.weatherData["main"]["humidity"]}
      city={model.cityInfo[0]}
      region={model.cityInfo[1]}
      icon={model.icon}
    />
  );
}
