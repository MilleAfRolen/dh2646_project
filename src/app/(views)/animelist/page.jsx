"use client";

import animeModel from "@/animeModel";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeListPage() {
  const anime = animeModel();
  return <Anime animeData={anime.animeData} />;
}
