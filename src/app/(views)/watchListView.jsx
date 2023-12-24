"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, Badge } from "@material-tailwind/react";

export default function WatchListView({
  watchlist,
  handleRemoveWatchlist,
  currentUser,
}) {
  if (!watchlist) {
    return (
      <>
        <div className="bg-[#e5e5e5] h-screen w-full fixed -z-50"></div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-mono font-bold">
            Your Watchlist is Empty! :(
          </h1>
          <h2 className="mt-8 font-mono text-3xl font-bold w-3/5 text-center">
            Add more anime to your watchlist by generating content!
          </h2>
          <Link href="/animelist" className="mt-8">
            <button
              className="hover:bg-white border-solid hover:border-black border-2
            border-blue-600 bg-black hover:text-black text-white font-bold py-2 px-4 mx-2 rounded-md w-52"
            >
              Generate Content
            </button>
          </Link>
        </div>
      </>
    );
  }
  if (!currentUser) {
    return (
      <>
        <div className="bg-[#e5e5e5] h-screen w-full fixed -z-50"></div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-mono font-bold">
            You are not signed in!
          </h1>
          <h2 className="mt-8 font-mono text-3xl font-bold w-3/5 text-center">
            Sign in to view your watchlist!
          </h2>
          <Link href="/signin" className="mt-8">
            <button
              className="hover:bg-white border-solid hover:border-black border-2
            border-blue-600 bg-black hover:text-black text-white font-bold py-2 px-4 mx-2 rounded-md w-52"
            >
              Sign In
            </button>
          </Link>
        </div>
      </>
    );
  }

  const AnimeButton = (anime) => {
    return (
      <div className="flex items-center justify-center pb-2 hover:underline">
        <Button
          className="bg-[#e5e5e5] text-black flex justify-center items-center rounded-lg"
          onClick={() => handleRemoveWatchlist(anime["anime"], currentUser.uid)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <p className="pl-2">Remove from Watchlist</p>
        </Button>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#e5e5e5] h-screen w-full fixed -z-50"></div>
      <div className="py-2 px-20">
        <h1 className="text-center text-6xl font-bold pt-24">Saved Anime!</h1>
        <div className="grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-8">
          {Object.values(watchlist).map((anime) => {
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
