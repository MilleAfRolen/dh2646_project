import { useState, useEffect } from "react";

const [animes, setAnimes] = useState(null);
const [loading, setLoading] = useState(true);

async function fetchAnimes(){
    try{
    const res = await fetch('https://api.jikan.moe/v4/anime/');
    const data = await res.json();
    console.log(data);
    setAnimes(data);
    setLoading(false);
    return await res.json();
    } catch(error){
        console.error(error);
    }
}

/*jikan api can have 60 requests per minute and
3 requests per second*/

useEffect(() => {
    fetchAnimes();
}, [])

/*
async function fetchGenres(){
    try{
        const res = await fetch('https://api.jikan.moe/v4/genres/anime');
        return await res.json();
    } catch(error){
        console.error(error);
    }
}*/