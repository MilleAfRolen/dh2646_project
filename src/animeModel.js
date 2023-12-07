import { useState, useEffect } from "react";
import { BASE_URL } from "@/animeApiConfig";

const PATH = '/anime?q=&sfw';
const URL = `${BASE_URL}${PATH}`;

export default function animeModel() {
    const [animeData, setAnimeData] = useState(null);
    const [animeTitle, setAnimeTitle] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setAnimeData(data['data']);
                setAnimeTitle(data['data'][0]['title']);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return { animeData, animeTitle };
}
