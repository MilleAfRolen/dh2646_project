"use client";
import { useState, createContext, useContext } from "react";
import { getAnimeData } from "./animeSource";
import { set } from "firebase/database";

export const AnimeModelContext = createContext(null);

export function AnimeModelProvider({ children }) {
  const animeModel = AnimeModel();

  return (
    <AnimeModelContext.Provider value={animeModel}>
      {children}
    </AnimeModelContext.Provider>
  );
}

export const useAnimeModel = () => useContext(AnimeModelContext);

export default function AnimeModel() {
  const [animeList, setAnimeList] = useState(null);
  const [animeImage, setAnimeImage] = useState(null);
  const [animeTitle, setAnimeTitle] = useState(null);
  const [englishTitle, setEnglishTitle] = useState(null);
  const [animeType, setAnimeType] = useState(null);
  const [animeSource, setAnimeSource] = useState(null);
  const [animeEpisodes, setAnimeEpisodes] = useState(null);
  const [animeStatus, setAnimeStatus] = useState(null);
  const [animeDescription, setAnimeDescription] = useState(null);
  const [animeGenres, setAnimeGenres] = useState(null);
  const [animeRecommendations, setAnimeRecommendations] = useState(null);
  const [watchList, setWatchList] = useState(null);

  const setAnimeRecommendationsData = async (PATH) => {
    try {
      const response = await getAnimeData(PATH);
      const data = response["data"];
      setAnimeRecommendations(data.slice(0, 6));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const setAnimePageData = async (PATH) => {
    try {
      const response = await getAnimeData(PATH);
      const data = response["data"];
      setAnimeImage(data["images"]["jpg"]["large_image_url"]);
      setAnimeTitle(data["title"]);
      setEnglishTitle(data["title_english"]);
      setAnimeType(data["type"]);
      setAnimeSource(data["source"]);
      setAnimeEpisodes(data["episodes"]);
      setAnimeStatus(data["status"]);
      setAnimeDescription(data["synopsis"]);
      setAnimeGenres(data["genres"][0]["name"]);
      if (data["genres"] && data["genres"].length > 0) {
        const genres = data["genres"].map((genre) => genre.name + ", ");
        setAnimeGenres(genres);
      } else {
        setAnimeGenres([]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const setAnimeListData = async (PATH) => {
    try {
      const response = await getAnimeData(PATH);
      setAnimeList(response["data"]);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const setWatchListData = async (animeList) => {
    try {
      setWatchList(animeList);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    animeList,
    animeImage,
    animeTitle,
    englishTitle,
    animeType,
    animeSource,
    animeEpisodes,
    animeStatus,
    animeDescription,
    animeGenres,
    animeRecommendations,
    watchList,
    setAnimeRecommendationsData,
    setAnimeListData,
    setAnimePageData,
    setWatchListData,
  };
}
