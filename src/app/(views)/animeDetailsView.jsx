import Image from "next/image";

export default function AnimeDetailsView({
  image,
  title,
  type,
  source,
  episodes,
  status,
  description,
}) {
  function renderAll() {
    return (
      <div>
        <div>
<<<<<<< HEAD
            <p> <strong>Type:</strong> {anime.type}</p>
            <p> <strong>Source:</strong> {anime.source}</p>
            <p> <strong>Episodes:</strong> {anime.episodes}</p>
            <p> <strong>Status:</strong> {anime.status}</p>
=======
            <div>
                <p className="text-4xl font-bold pt-4">{title}</p>    
            </div>
            <div className="border-solid border-black rounded-2xl border-2 py-5 px-5 my-4">
                    <p> <strong>Type:</strong> {type}</p>
                    <p> <strong>Source:</strong> {source}</p>
                    <p> <strong>Episodes:</strong> {episodes}</p>
                    <p> <strong>Status:</strong> {status}</p>
                    <p> <strong>Genres:</strong> </p>
                </div>
            <div className="my-5 border-solid border-black rounded-2xl border-2 py-5 px-5">
                <p>{description}</p>
            </div>
>>>>>>> ea6f39a87c7604a486b180009550cae1062fc74a
        </div>
            
    )}

<<<<<<< HEAD
    function renderTitle(anime){
        console.log(anime)
        return (
            <div>
                <p className="text-4xl font-bold pt-4">{anime.title}</p>    
            </div>
        )}

    function renderSynopsis(anime){
        console.log(anime)
        return (
            <div>
                <p>{anime.synopsis}</p>
            </div>
        )}

    function renderAnimeImage(anime) {
        console.log(anime)
=======
    function renderAnimeImage() {
>>>>>>> ea6f39a87c7604a486b180009550cae1062fc74a
        return (
            <div>
                <Image className="h-full w-full object-cover rounded-3xl border border-black my-5"
                  src={image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  priority={true}
                  alt={title}
                />
            </div>
        );
    }

    function renderGenres(anime, index){
        console.log(anime)
        return(
            <div key={index}>
                <p> <strong>Genres:</strong>{anime.genres}</p>
            </div>
        );
    }

    function renderGenres(anime){
        console.log(anime)
        return <div>
            {anime.genres.map((genres, index) => (
                  <div key={index}>
                    {genres.id}
                  </div>
                ))}
        </div>

        
    }

<<<<<<< HEAD
    return(
        <div className="py-2 px-20 z-10 bg-[#e5e5e5] flex flex-row w-full h-full">
            <div className="w-2/5">
                {renderAnimeImage(animeData)}
            </div>
            <div className="w-3/5 my-5 mx-5">
                {renderTitle(animeData)}
                <div className="border-solid border-black rounded-2xl border-2 py-5 px-5 my-4 bg-white">
                    {renderAll(animeData)}
                    <p> <strong>Genres:</strong> {renderGenres(animeData)}</p>
                </div>
                <div className="my-5 border-solid border-black rounded-2xl border-2 py-5 px-5 bg-white">
                    {renderSynopsis(animeData)}
                </div>
            </div>
        </div>
    );
};
=======
  return (
    <div className="py-2 px-20 z-10 bg-[#e5e5e5] flex flex-row">
      <div>{renderAnimeImage()}</div>
      <div className="w-full my-5 mx-5">{renderAll()}</div>
    </div>
  );
}
>>>>>>> ea6f39a87c7604a486b180009550cae1062fc74a
