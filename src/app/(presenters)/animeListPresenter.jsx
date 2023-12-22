"use client";
import { useEffect } from "react";
import AnimeListView from "../(views)/animeListView";
import WatchListView from "../(views)/watchListView";
import { saveToWatchlist } from "@/firebaseModel";

const weatherToGenreMap = {
  Thunderstorm: 14,
  Drizzle: 8,
  Rain: 22,
  Snow: 10,
  Clear: 4,
  Clouds: 1,
};

export default function Anime({
  model,
  weatherModel,
  firebaseModel,
  currentUser,
}) {
  function handleWatchlist(anime, uid) {
    firebaseModel.saveToWatchlist(anime, uid);
  }

  async function isInDatabase(anime, uid) {
    const result = await firebaseModel.isInWatchlist(anime, uid);
    console.log(result);
    return result;
  }
  useEffect(() => {
    const fetchWeather = async () => {
      await weatherModel.fetchCurrentWeather();
      const genre = weatherToGenreMap[weatherModel.currentWeather];
      const PATH = `/anime?order_by=popularity&type=tv&genres=${genre}&limit=24`;
      model.setAnimeListData(PATH);
    };

    fetchWeather();
  }, [weatherModel]);
  return (
    <div>
      <AnimeListView
        animeData={model.animeList}
        handleWatchlist={handleWatchlist}
        currentUser={currentUser}
        isInDatabase={isInDatabase}
      />
    </div>
  );
}
