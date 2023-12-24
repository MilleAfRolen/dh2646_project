"use client";

import { useAnimeModel } from "@/animeModel";
import { useWeatherModel } from "@/weatherModel";
import { useFirebaseModel } from "@/firebaseModel";
import { useAuth } from "@/authentication";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeListPage() {
  const model = useAnimeModel();
  const weatherModel = useWeatherModel();
  const firebaseModel = useFirebaseModel();
  const { currentUser } = useAuth();
  return (
    <Anime
      model={model}
      weatherModel={weatherModel}
      firebaseModel={firebaseModel}
      currentUser={currentUser}
    />
  );
}
