"use client";
import Location from "@/app/(presenters)/locationPresenter";
import Background from "@/app/(presenters)/backgroundPresenter.jsx";
import weatherModel from "@/weatherModel.js";

export default function Home() {
  const weather = weatherModel();

  return (
    <div className="flex flex-col h-screen relative">
      <Background currentWeather={weather.currentWeather} />
      <div className="h-full flex flex-wrap flex-col items-center justify-center p-2 z-10">
        <h1 className="text-center text-6xl font-bold">Weather App</h1>
        <Location weatherData={weather.weatherData} />
      </div>
    </div>
  );
}
