import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import watchlistIcon from "/public/icons/watchlist.svg";

export default function AnimeListView({
  animeData,
  handleWatchlist,
  currentUser,
  isInDatabase,
}) {
  console.log(animeData);
  async function generatedResultRender(anime, index) {
    let result = false;
    if (currentUser) {
      result = await isInDatabase(anime, currentUser.uid);
    }
    return (
      <div key={index}>
        {result ? (
          <div className="w-full flex items-center justify-center bg-[#e5e5e5] text-black pb-2">
            Already Added!
          </div>
        ) : (
          currentUser &&
          !result && (
            <Button
              className="w-full flex items-center justify-center gap-3 bg-[#e5e5e5] text-black pb-3"
              onClick={() => {
                handleWatchlist(anime, currentUser.uid);
              }}
            >
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
            </Button>
          )
        )}

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
          <p className="text-2xs font-bold pt-4 text-center">{anime.title}</p>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#e5e5e5] h-screen w-full fixed -z-50"></div>
      <div className="py-2 px-20 z-10">
        <div className=""></div>
        <h1 className="text-center text-6xl font-bold pt-24"> Anime List</h1>
        {animeData ? (
          <div className="grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-8">
            {animeData.map((anime, index) =>
              generatedResultRender(anime, index)
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
