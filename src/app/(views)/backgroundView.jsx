"use client";
import Image from "next/image";

export default function BackgroundView({ image }) {
  return (
    <>
      <div className="h-screen w-full fixed top-0 left-0 -z-50">
        <Image
          src={image}
          alt="Clouds"
          fill={true}
          className="w-full h-full object-cover"
          priority={true}
        />
      </div>
    </>
  );
}
