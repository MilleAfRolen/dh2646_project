"use client";

import AnimeDetails from "@/app/(presenters)/animeDetailsPresenter";

export default function AnimeDetails() {
  const anime = animeModel();
  return (
    <div>
      <AnimeDetails animeData={anime.animeData}/>
    </div>
  );
}
