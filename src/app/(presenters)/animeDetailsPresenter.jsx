import AnimeDetailsView from "../(views)/animeDetailsView";

export default function AnimeDetails(animeData) {
  console.log(animeData)
  return <AnimeDetailsView anime={animeData} />;
}
