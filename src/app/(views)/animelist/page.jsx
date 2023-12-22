"use client";

import { useContext } from "react";
import { AnimeModelContext } from "@/animeModel";
import { WeatherModelContext } from "@/weatherModel";
import { FirebaseModelContext } from "@/firebaseModel";
import { AuthContext } from "@/authentication";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeListPage() {
  const model = useContext(AnimeModelContext);
  const weatherModel = useContext(WeatherModelContext);
  const firebaseModel = useContext(FirebaseModelContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <Anime
      model={model}
      weatherModel={weatherModel}
      firebaseModel={firebaseModel}
      currentUser={currentUser}
    />
  );
}
