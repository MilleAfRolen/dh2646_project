"use client";
import { useState, useEffect } from "react";
import { getAnimeData } from "./animeSource";

const PATH = "/anime?q=&sfw";
// const URL = `${BASE_URL}${PATH}`;

export default function AnimeModel() {
  const [animeData, setAnimeData] = useState(null);
  console.log("wtf");

  useEffect(() => {
    console.log("bruh");
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
