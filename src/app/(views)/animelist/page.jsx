"use client"

import React from "react";
import animeModel from "@/animeModel";
import Link from "next/link";

export default function AnimeList() {
    const anime = animeModel();

    function generatedResultRender(anime, index) {
        return (
            <Link href='/login'>
                <div key={index} className='flex flex-col justify-center items-start'>
                    <img className='h-64 object-cover rounded-lg shadow-gray-800 shadow hover:shadow-xl'src={anime['images']['jpg']['image_url']} height="100" alt={anime.title} />
                    <p className='text-2xs font-bold'>{anime.title}</p>
                </div>
            </Link>
        );
    }

    return (
        <div>
            <div className="h-full flex flex-wrap flex-col items-start justify-center p-2 z-10">
                <h1 className="text-center text-6xl font-bold pt-18"> Anime List</h1>
                {anime?.animeData ? (
                    <div className="flex grid grid-cols-8 gap-4 items-start">
                        {anime.animeData.map((anime, index) => generatedResultRender(anime, index))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}