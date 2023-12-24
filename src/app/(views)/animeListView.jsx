import Link from "next/link";
import Image from "next/image";
import { Button } from "../../materialTailwind";

export default function AnimeListView({
  animeData,
  saveToWatchlist,
  currentUser,
  watchlist,
  genre,
}) {
  const AnimeButton = (anime) => {
    if (currentUser) {
      return (
        <div className="flex items-center justify-center pb-2">
          <Button
            className="bg-[#e5e5e5] text-green-500"
            onClick={() => saveToWatchlist(anime["anime"], currentUser.uid)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={
                watchlist
                  ? anime["anime"]["mal_id"] in watchlist
                    ? "currentColor"
                    : "none"
                  : "none"
              }
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:fill-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </Button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-[#e5e5e5] h-screen w-full fixed -z-50"></div>
      <div className="pt-2 pb-16 px-20 z-10">
        <h1 className="text-center text-5xl font-bold pt-24">
          Generated {genre} Anime Based on Current Weather!
        </h1>
        <div className="grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-8">
          {animeData.map((anime) => {
            return (
              <div key={anime["mal_id"]}>
                <AnimeButton anime={anime} />
                <Link href={`/animedetails/${anime["mal_id"]}`}>
                  <Image
                    className="h-96 w-full object-cover rounded-3xl border border-black shadow-gray-800 shadow-2xl
                  transition duration-500 ease-in-out transform hover:scale-105"
                    src={anime["images"]["jpg"]["large_image_url"]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    priority={true}
                    alt={anime["title"]}
                  />
                  <p className="text-2xs font-bold pt-4 text-center hover:underline">
                    {anime.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
