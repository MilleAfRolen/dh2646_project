import { BASE_URL } from "./animeApiConfig";

async function getAnimeData(path) {
  try {
    const res = await fetch(BASE_URL + path);
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export { getAnimeData };
