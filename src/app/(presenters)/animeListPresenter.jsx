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

const genreIdToGenreMap = {
  1: "Action",
  4: "Comedy",
  8: "Drama",
  10: "Fantasy",
  14: "Horror",
  22: "Romance",
};

export default function Anime({
  model,
  weatherModel,
  firebaseModel,
  currentUser,
}) {
  const handleSaveToWatchlist = async (anime, uid) => {
    if (await firebaseModel.checkIfAnimeInWatchlist(anime, uid)) {
      await firebaseModel.removeFromWatchlist(anime, uid);
      return;
    }
    await firebaseModel.saveToWatchlist(anime, uid);
  };

  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const result = await firebaseModel.getWatchlist(currentUser.uid);
        model.setWatchListData(result);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser !== null) {
      fetchWatchList();
    }
  }, [currentUser, firebaseModel]);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        await weatherModel.fetchCurrentWeather();
        const genre = weatherToGenreMap[weatherModel.currentWeather];
        const PATH = `/anime?order_by=popularity&min_score=4&genres=${genre}&limit=24`;
        await model.setAnimeListData(PATH);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnimeList();
  }, [weatherModel]);

  if (!model.animeList) return;

  return (
    <AnimeListView
      animeData={model.animeList}
      saveToWatchlist={handleSaveToWatchlist}
      currentUser={currentUser}
      watchlist={model.watchList}
      genre={genreIdToGenreMap[weatherToGenreMap[weatherModel.currentWeather]]}
    />
  );
}
