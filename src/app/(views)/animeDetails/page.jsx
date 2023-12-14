"use client";

import AnimeDetails from "@/app/(presenters)/animeDetailsPresenter";

export default function AnimeDetailsPage() {
  const anime = animeModel();
  return (
    <div>
      <AnimeDetails animeData={anime.animeData} />
    </div>
  );
}
