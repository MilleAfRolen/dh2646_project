const { BASE_URL } = require("./animeApiConfig");


const getAnimeData = async (path) => {
    try {
      const res = await fetch(BASE_URL + path);
      const resData = await res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


