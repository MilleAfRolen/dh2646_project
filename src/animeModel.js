"use client";
import { useState, createContext, useContext } from "react";
import { getAnimeData } from "./animeSource";

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
  const [animeType, setAnimeType] = useState(null);
  const [animeSource, setAnimeSource] = useState(null);
  const [animeEpisodes, setAnimeEpisodes] = useState(null);
  const [animeStatus, setAnimeStatus] = useState(null);
  const [animeDescription, setAnimeDescription] = useState(null);

  console.log(animeList);
  const setAnimePageData = async (PATH) => {
    try {
      const response = await getAnimeData(PATH);
      const data = response["data"];
      setAnimeImage(data["images"]["jpg"]["large_image_url"]);
      setAnimeTitle(data["title"]);
      setAnimeType(data["type"]);
      setAnimeSource(data["source"]);
      setAnimeEpisodes(data["episodes"]);
      setAnimeStatus(data["status"]);
      setAnimeDescription(data["synopsis"]);
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

  return {
    animeList,
    animeImage,
    animeTitle,
    animeType,
    animeSource,
    animeEpisodes,
    animeStatus,
    animeDescription,
    setAnimeListData,
    setAnimePageData,
  };
}
