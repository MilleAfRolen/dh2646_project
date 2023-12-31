"use client";
import AnimeDetailsView from "../(views)/animeDetailsView";
import Image from "next/image";
import loading from "/public/icons/loadingSun.svg";
import { useEffect } from "react";

export default function AnimeDetails({ id, model }) {
  const PATH = `/anime/${id}`;
  useEffect(() => {
    model.setAnimePageData(PATH);
    model.setAnimeRecommendationsData(PATH + "/recommendations");
  }, [id, PATH, model]);

  if (!model.animeTitle || !model.animeRecommendations) {
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
    <AnimeDetailsView
      id={id}
      image={model.animeImage}
      title={model.animeTitle}
      englishTitle={model.englishTitle}
      type={model.animeType}
      source={model.animeSource}
      episodes={model.animeEpisodes}
      status={model.animeStatus}
      description={model.animeDescription}
      genres={model.animeGenres}
      recommendations={model.animeRecommendations}
    />
  );
}
