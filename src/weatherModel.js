import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../weatherApiConfig";

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
  const interval = setInterval(fetchWeather, 600000);
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
