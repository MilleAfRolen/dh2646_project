"use client";
import BackgroundView from "../(views)/backgroundView";
import loading from "/public/icons/loadingSun.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function Background({ model }) {
  useEffect(() => {
    model.fetchCurrentWeather();
  }, []);

  if (!model.currentWeather || !model.weatherData) {
    return (
      <div className="bg-gradient-radial from-blue-300 to-blue-400 pt-18 h-screen w-full fixed top-0 left-0 -z-50">
        <div className="flex items-center justify-center h-full">
          <Image
            src={loading}
            alt="Loading"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="w-1/4 h-1/4"
          />
        </div>
      </div>
    );
  }

  return <BackgroundView image={model.image} />;
}
