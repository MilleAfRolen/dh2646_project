import Image from "next/image";
import Link from "next/link";

export default function AnimeDetailsView({
  id,
  image,
  title,
  englishTitle,
  type,
  source,
  episodes,
  status,
  description,
  genres,
}) {
  function renderAll() {
    return (
      <div className="w-full my-5 ml-5">
        <h1 className="text-2xl pb-2">Synopsis</h1>
        <hr className="border-black pb-2" />
        <div className="border-2">
          <p>{description}</p>
        </div>
      </div>
    );
  }

  function renderAnimeImage() {
    return (
      <div className="h-full">
        <Link href={`https://myanimelist.net/anime/${id}`}>
          <Image
            className="h-full w-full object-cover rounded-2xl border border-black my-5 
            transition duration-500 ease-in-out transform hover:scale-105"
            src={image}
            height={0}
            width={0}
            sizes="100vw"
            priority={true}
            alt={title}
          />
        </Link>
        <div className="border-solid border-black rounded-2xl border-2 py-5 px-5 my-4">
          <p>
            <strong>Type: </strong> {type}
          </p>
          <p>
            <strong>Source: </strong> {source}
          </p>
          <p>
            <strong>Episodes: </strong> {episodes}
          </p>
          <p>
            <strong>Status: </strong> {status}
          </p>
          <p>
            <strong>Genres: </strong> {genres}
          </p>
        </div>
      </div>
    );
  }

  //aired. premiered, producors, studio, genre, theme, duration

  return (
    <div className="bg-[#e5e5e5] pt-18 px-8 h-screen fixed">
      <div className="flex justify-between items-center w-full pt-4">
        <Link
          href={`https://myanimelist.net/anime/${id}`}
          className="hover:underline"
        >
          <h1 className="text-4xl font-medium">{title}</h1>
          <h2 className="text-2xl text-neutral-700">{englishTitle}</h2>
        </Link>
        <Link href={"/animelist"}>
          <button className="button border border-black">back</button>
        </Link>
      </div>
      <div className="flex flex-row">
        {renderAnimeImage()}
        {renderAll()}
      </div>
    </div>
  );
}
