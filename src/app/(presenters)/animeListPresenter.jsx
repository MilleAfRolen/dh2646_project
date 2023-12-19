"use client";
import { useEffect } from "react";
import AnimeListView from "../(views)/animeListView";

export default function Anime({ model }) {
  const PATH = "/anime?q=&sfw&limit=24";
  useEffect(() => {
    model.setAnimeListData(PATH);
  }, []);

  return <AnimeListView animeData={model.animeList} />;
}
