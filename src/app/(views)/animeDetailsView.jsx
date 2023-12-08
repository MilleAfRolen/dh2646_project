"use client"

import React from "react";
import animeModel from "@/animeModel";

export default function AnimeDetailsView(anime){

    return(
        <div>
            {renderAll(anime)}
        </div>
    );
        
    function renderAll(anime){
        return ( <div key={anime.title}>
            <img src={anime.large_image_url} height="300" />
        </div>
    )}
};