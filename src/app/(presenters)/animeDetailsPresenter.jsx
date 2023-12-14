"use client"
import AnimeDetailsView from "../(views)/animeDetailsView";
import { getAnimeData } from "@/animeSource";
import { useState } from "react"

export default function AnimeDetails({ id }) {
  const [anime, setAnime] = useState(null)
  const PATH = `/anime/${id}`
  async function fetchData(path) {
    const res = await getAnimeData(path)
    setAnime(res["data"])
  }

  fetchData(PATH)

  return (<div className="pt-18">

  {anime ? (
    <div>
      <AnimeDetailsView animeData={anime} />
    </div> )
    : (<p>Loading...</p>)
    
  }
  </div>);
}
