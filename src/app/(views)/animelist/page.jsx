"use client"

import React from "react";
import animeModel from "@/animeModel";

export default function AnimeList() {
    const anime = animeModel();

    function generatedResultRender(anime, index) {
        return (
            <div key={index} className="anime">
                <img className="animeImage" src={anime.image_url} height="100" alt={anime.title} />
                <p className="animeTitle">{anime.title}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="h-full flex flex-wrap flex-col items-center justify-center p-2 z-10">
                <h1 className="text-center text-6xl font-bold pt-18">Anime List</h1>
                {anime && anime.animeData ? (
                    <div className="grid grid-cols-3 gap-4">
                        {anime.animeData.map((anime, index) => generatedResultRender(anime, index))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
