"use client";
import BackgroundView from "../(views)/backgroundView";

export default function Background({ currentWeather }) {
  return (
    <div>
      <BackgroundView weather={currentWeather} />
    </div>
  );
}
