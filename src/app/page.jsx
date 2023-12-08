"use client";
import Location from "./(presenters)/locationPresenter.jsx";
import Background from "./(presenters)/backgroundPresenter.jsx";
import weatherModel from "../weatherModel.js";
import Image from "next/image";
import loading from "/public/backgrounds/loadingSun.svg";

export default function Home() {
  const weather = weatherModel();

  if (!weather.currentWeather) {
    return (
      <div className="flex justify-center items-center bg-gradient-radial from-blue-300 to-blue-400 pt-18 h-screen">
        <Image
          src={loading}
          alt="Loading"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="w-1/4 h-1/4 absolute"
        />
      </div>
    );
  }

  return (
    <div className="h-screen relative pt-18">
      <Background currentWeather={weather.currentWeather} />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-6xl font-bold">Weather App</h1>
        <Location weatherData={weather.weatherData} />
      </div>
    </div>
  );
}
