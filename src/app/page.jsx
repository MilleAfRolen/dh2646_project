"use client";
import Location from "./(presenters)/locationPresenter.jsx";
import Background from "./(presenters)/backgroundPresenter.jsx";
import { WeatherModelContext } from "../weatherModel.js";
import { useContext } from "react";

export default function Home() {
  const weatherModel = useContext(WeatherModelContext);

  return (
    <div className="h-screen relative pt-18">
      <Background model={weatherModel} />
      <div className="flex flex-col items-center justify-center h-full">
        <Location model={weatherModel} />
      </div>
    </div>
  );
}
