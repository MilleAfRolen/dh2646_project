async function userLocation() {
  const res = await fetch("http://ip-api.com/json/", {
    next: { revalidate: 600 },
  });
  const data = await res.json();
  return data;
}

export async function getWeather() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_URL;
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const location = await userLocation();
  const { lat, lon } = location;
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 600 } });
  const data = await res.json();
  return data;
}
