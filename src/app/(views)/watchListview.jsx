import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function AnimeListView({ animeData }) {
    function watchListRender(anime, index) {
        return (
            <div key={index}>
                <Button
                    class="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
                    title="Save"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                    <span class="text-sm text-blue-400 font-bold pr-1">Remove from watchlist</span>
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
            <h1 className="text-center text-6xl font-bold pt-18"> Your anime watch list</h1>
            {animeData ? (
                <div className="grid grid-cols-4 gap-x-12 gap-y-6 items-start pt-4">
                    {animeData.map((anime, index) => watchListRender(anime, index))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
