"use client";
import { useEffect } from "react";
import AnimeListView from "../(views)/animeListView";
import WatchListView from "../(views)/watchListView";

const weatherToGenreMap = {
  Thunderstorm: 14,
  Drizzle: 8,
  Rain: 22,
  Snow: 10,
  Clear: 4,
  Clouds: 1,
};


export default function Anime({ model, weatherModel }) {
  useEffect(() => {
    const fetchWeather = async () => {
      await weatherModel.fetchCurrentWeather();
      const genre = weatherToGenreMap[weatherModel.currentWeather];
      const PATH = `/anime?order_by=popularity&type=tv&genres=${genre}&limit=24`;
      model.setAnimeListData(PATH);
    };

    fetchWeather();
  }, [weatherModel]);

  return <div><AnimeListView animeData={model.animeList} /><WatchListView animeData={model.watchList}/></div>
}
