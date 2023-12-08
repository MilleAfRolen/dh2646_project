"use client"

import React from "react";
import animeModel from "@/animeModel";

export default function AnimeList() {
    const anime = animeModel();

    function generatedResultRender(anime, index) {
        return (
            <div key={index} className='flex flex-col justify-center items-center'>
                <img className='h-64 object-cover rounded-lg shadow-gray-800 shadow'src={anime['images']['jpg']['image_url']} height="100" alt={anime.title} />
                <p className='text-2xs font-bold'>{anime.title}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="h-full flex flex-wrap flex-col items-center justify-center p-2 z-10">
                <h1 className="text-center text-6xl font-bold pt-18"> Anime List</h1>
                {anime && anime.animeData ? (
                    <div className="flex grid grid-cols-8 gap-4 items-center">
                        {anime.animeData.map((anime, index) => generatedResultRender(anime, index))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}