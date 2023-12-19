"use client";

import { useContext } from "react";
import { AnimeModelContext } from "@/animeModel";
import { WeatherModelContext } from "@/weatherModel";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeListPage() {
  const model = useContext(AnimeModelContext);
  const weatherModel = useContext(WeatherModelContext);
  return <Anime model={model} weatherModel={weatherModel} />;
}