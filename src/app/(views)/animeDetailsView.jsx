"use client"

import React from "react";

export default function AnimeDetailsView({ animeData }){
    console.log(animeData);
    function renderAll(anime){
        return ( 
        <div className="flex-col">
            <div className="flex-row">
            <div>
                <img src={anime.large_image_url} height="300" />
            </div>
            
            <div>
                <p>{anime.title}</p>
                <p>{dish.dishData.instructions}</p>
                <p>Type: {anime.type}</p>
                <p>Source: {anime.source}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Status: {anime.status}</p>
                <p>Airing: {anime.airing}</p>
                
            </div>
            </div>
            
            <div>
                <p>{anime.synopsis}</p>
            </div>
        </div>
            
    )}

    return(
        <div className="py-2 px-20 z-10 bg-[#e5e5e5]">
            {renderAll(anime)}
        </div>
    );
};