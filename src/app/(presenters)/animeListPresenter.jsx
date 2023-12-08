import AnimeListView from "../(views)/animeListView";

export default function Anime({ animeData }) {
  console.log(animeData);
  return <AnimeListView animeData={animeData} />;
}
