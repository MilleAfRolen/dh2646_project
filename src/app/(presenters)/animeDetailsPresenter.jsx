"use client";
import { useState, useEffect } from "react";

const [animeDetails, setAnimeDetails] = useState(null);
const [loading, setLoading] = useState(true);

export default function AnimeDetailsPresenter(mal_id) {
  useEffect(() => {
    fetchAnimeDetails(mal_id)
      .then((data) => {
        setAnimeDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return <AnimeView animeDetails={animeDetails} loading={loading} />;
}
