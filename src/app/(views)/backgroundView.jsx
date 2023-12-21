"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clouds from "/public/backgrounds/clouds.svg";
import rainy from "/public/backgrounds/rainy.svg";
import snowIcon from "/public/icons/snowIcon.svg";
import rainyIcon from "/public/icons/rainyIcon.svg";
import manyClouds from "/public/backgrounds/manyClouds.svg";
import cloudyIcon from "/public/icons/cloudyIcon.svg";
import thunderIcon from "/public/icons/thunderIcon.svg";
import fogIcon from "/public/icons/fogIcon.svg";
import sunIcon from "/public/icons/sunIcon.svg";

const backgrounds = {
  Thunderstorm: [manyClouds, thunderIcon],
  Drizzle: [rainy, rainyIcon],
  Rain: [rainy, rainyIcon],
  Snow: [rainy, snowIcon],
  Fog: [manyClouds, fogIcon],
  Clear: [clouds, sunIcon],
  Clouds: [manyClouds, cloudyIcon],
};

export default function BackgroundView({ weather }) {
  if (!weather) {
    return;
  }
  let background = weather;

  if (!backgrounds.hasOwnProperty(weather)) {
    console.log("Weather not found");
    background = "Rain";
  }
  return (
    <div className="h-screen w-full fixed top-0 left-0 -z-50">
      <Image
        src={backgrounds[background][0]}
        alt="Clouds"
        fill={true}
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="icon">
        <Image
          src={backgrounds["Thunderstorm"][1]}
          alt="Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-4/5 h-4/5"
          priority={true}
        />
      </div>
    </div>
  );
}
