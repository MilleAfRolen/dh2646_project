"use client";

import animeModel from "@/animeModel";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeList() {
  const anime = animeModel();
  return <Anime animeData={anime.animeData} />;
}
