import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function AnimeListView({ animeData }) {
  function generatedResultRender(anime, index) {
    return (
      <div key={index}>
      <Button className="flex items-center gap-3 text-black pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Add to watchlist
      </Button>

        <Link href={`/animeDetails/${anime["mal_id"]}`}>
          <Image
            className="h-96 w-full object-cover rounded-3xl border border-black shadow-gray-800 shadow-2xl
            transition duration-500 ease-in-out transform hover:scale-105"
            src={anime["images"]["jpg"]["large_image_url"]}
            height={0}
            width={0}
            sizes="100vw"
            priority={true}
            alt={anime.title}
          />
          <p className="text-2xs font-bold pt-4 text-center">{anime.title}</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-2 px-20 z-10 bg-[#e5e5e5]">
      <h1 className="text-center text-6xl font-bold pt-18"> Anime List</h1>
      {animeData ? (
        <div className="grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-4">
          {animeData.map((anime, index) => generatedResultRender(anime, index))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
