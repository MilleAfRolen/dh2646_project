"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import clouds from "/public/backgrounds/clouds.svg";
import rainy from "/public/backgrounds/rainy.svg";
import snowIcon from "/public/icons/snowIcon.svg";
import rainyIcon from "/public/icons/rainyIcon.svg";
import manyClouds from "/public/backgrounds/manyClouds.svg";

const backgrounds = {
  Thunderstorm: [manyClouds, rainyIcon],
  Drizzle: [rainy, rainyIcon],
  Rain: [rainy, rainyIcon],
  Snow: [rainy, snowIcon],
  //ATMOSPHERE LEFT
  Clear: [rainy, rainyIcon],
  Clouds: [clouds, rainyIcon],
};

export default function BackgroundView({ weather }) {
  if (!weather) {
    return;
  }
  return (
    <div className="h-screen w-full fixed top-0 left-0 -z-50">
      <Image
        src={backgrounds["Thunderstorm"][0]}
        alt="Clouds"
        fill={true}
        className="w-full h-full object-cover"
        priority={true}
      />
      <div className="icon">
        <Image
          src={backgrounds[weather][1]}
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
