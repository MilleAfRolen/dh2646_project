"use client";
import { useEffect } from "react";
import AnimeListView from "../(views)/animeListView";

const weatherToGenreMap = {
  Thunderstorm: 14,
  Drizzle: 8,
  Rain: 22,
  Snow: 10,
  Clear: 4,
  Clouds: 1,
};

export default function Anime({ model, weatherModel }) {
  const genre = weatherToGenreMap[weatherModel.currentWeather];
  const PATH = `/anime?order_by=popularity&genres=${genre}`;
  useEffect(() => {
    model.setAnimeListData(PATH);
  }, []);

  return <AnimeListView animeData={model.animeList} />;
}
