"use client";
import { useState, useEffect } from "react";
import { getAnimeData } from "./animeSource";

const PATH = "/anime?q=&sfw";

export default function AnimeModel() {
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAnimeData(PATH);
        setAnimeData(response["data"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return { animeData };
}
