"use client";
import AnimeDetailsView from "../(views)/animeDetailsView";
import Image from "next/image";
import loading from "/public/icons/loadingSun.svg";
import { useEffect } from "react";

export default function AnimeDetails({ id, model }) {
  const PATH = `/anime/${id}`;
  useEffect(() => {
    model.setAnimePageData(PATH);
  }, [id]);
  if (!model.animeTitle) {
    return (
      <div className="flex justify-center items-center bg-gradient-radial from-blue-300 to-blue-400 pt-18 h-screen">
        <Image
          src={loading}
          alt="Loading"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="w-1/4 h-1/4 absolute"
        />
      </div>
    );
  }

  return (
    <div className="pt-18">
      <AnimeDetailsView
        image={model.animeImage}
        title={model.animeTitle}
        type={model.animeType}
        source={model.animeSource}
        episodes={model.animeEpisodes}
        status={model.animeStatus}
        description={model.animeDescription}
        genres={model.animeGenres}
      />
    </div>
  );
}
