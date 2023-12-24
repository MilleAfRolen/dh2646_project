"use client";
import { getWeather, userLocation } from "./weatherSource";
import { useState, createContext, useContext } from "react";
import clouds from "/public/backgrounds/clouds.svg";
import rainy from "/public/backgrounds/rainy.svg";
import snowIcon from "/public/icons/snowIcon.svg";
import rainyIcon from "/public/icons/rainyIcon.svg";
import manyClouds from "/public/backgrounds/manyClouds.svg";
import cloudyIcon from "/public/icons/cloudyIcon.svg";
import thunderIcon from "/public/icons/thunderIcon.svg";
import fogIcon from "/public/icons/fogIcon.svg";
import sunIcon from "/public/icons/sunIcon.svg";
import { set } from "firebase/database";

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

const backgrounds = {
  Thunderstorm: [manyClouds, thunderIcon],
  Drizzle: [rainy, rainyIcon],
  Rain: [rainy, rainyIcon],
  Snow: [manyClouds, snowIcon],
  Fog: [manyClouds, fogIcon],
  Clear: [clouds, sunIcon],
  Clouds: [manyClouds, cloudyIcon],
};

export default function WeatherModel() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [image, setImage] = useState(null);
  const [icon, setIcon] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);

  const fetchCityInfo = async () => {
    try {
      const data = await userLocation();
      const city = data["city"];
      const region = data["region"];
      setCityInfo([city, region]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const fetchCurrentWeather = async () => {
    try {
      const data = await getWeather();
      const weather = data["weather"][0]["main"];
      setCurrentWeather(weather);
      if (!backgrounds.hasOwnProperty(weather)) {
        setImage(rainy);
        setIcon(rainyIcon);
      } else {
        setImage(backgrounds[weather][0]);
        setIcon(backgrounds[weather][1]);
      }
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

  return {
    currentWeather,
    weatherData,
    image,
    icon,
    cityInfo,
    fetchWeatherData,
    fetchCurrentWeather,
    fetchCityInfo,
  };
}
