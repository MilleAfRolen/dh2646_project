import Link from "next/link";
import Image from "next/image";

export default function AnimeListView({ animeData }) {
  function watchListRender(anime, index) {
    return (
      <div key={index}>
        <button
          class="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
          title="Save"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 -0.5 25 25"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="text-sm text-blue-400 font-bold pr-1">Watch later</span>
        </button>

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
