import Image from "next/image"
export default function AnimeDetailsView({ animeData }){

    function renderAll(anime){
        console.log(anime)
        return ( 
        <div>
            <p> <strong>Type:</strong> {anime.type}</p>
            <p> <strong>Source:</strong> {anime.source}</p>
            <p> <strong>Episodes:</strong> {anime.episodes}</p>
            <p> <strong>Status:</strong> {anime.status}</p>
        </div>
            
    )}

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
        return (
            <div>
                <Image className="h-full w-full object-cover rounded-3xl border border-black my-5"
                  src={anime["images"]["jpg"]["large_image_url"]}
                  height={0}
                  width={0}
                  sizes="100vw"
                  priority={true}
                  alt={anime["title"]}
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