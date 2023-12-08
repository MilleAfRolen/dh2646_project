import Link from "next/link";
import Image from "next/image";

export default function AnimeListView({ animeData }) {
  console.log(animeData);
  function generatedResultRender(anime, index) {
    return (
      <div key={index}>
        <Link href={`/animedetails/${anime["mal_id"]}`}>
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
