async function getAnimeData(path) {
  const BASE_URL = process.env.NEXT_PUBLIC_ANIME_URL;
  try {
    const res = await fetch(BASE_URL + path);
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export { getAnimeData };
