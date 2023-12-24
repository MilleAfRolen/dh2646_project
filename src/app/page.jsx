"use client";
import WeatherInfo from "./(presenters)/weatherInfoPresenter.jsx";
import Background from "./(presenters)/backgroundPresenter.jsx";
import { WeatherModelContext } from "../weatherModel.js";
import { useContext } from "react";

export default function Home() {
  const weatherModel = useContext(WeatherModelContext);

  return (
    <>
      <div>
        <Background model={weatherModel} />
      </div>
      <div className="pt-18 h-screen flex items-center justify-center">
        <WeatherInfo model={weatherModel} />
      </div>
    </>
  );
}
