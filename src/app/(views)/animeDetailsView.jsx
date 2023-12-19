import Image from "next/image"
export default function AnimeDetailsView({ animeData }){

    function renderAll(anime){
        console.log(anime)
        return ( 
        <div>
            <div>
                <p className="text-4xl font-bold pt-4">{anime.title}</p>    
            </div>
            <div className="border-solid border-black rounded-2xl border-2 py-5 px-5 my-4">
                    <p> <strong>Type:</strong> {anime.type}</p>
                    <p> <strong>Source:</strong> {anime.source}</p>
                    <p> <strong>Episodes:</strong> {anime.episodes}</p>
                    <p> <strong>Status:</strong> {anime.status}</p>
                    <p> <strong>Genres:</strong> </p>
                </div>
            <div className="my-5 border-solid border-black rounded-2xl border-2 py-5 px-5">
                <p>{anime.synopsis}</p>
            </div>
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

    //aired. premiered, producors, studio, genre, theme, duration

    return(
        <div className="py-2 px-20 z-10 bg-[#e5e5e5] flex flex-row w-full">
            <div className="w-1/4">
                {renderAnimeImage(animeData)}
            </div>
            <div className="w-3/4 my-5 mx-5">
                {renderAll(animeData)}
            </div>
        </div>
    );
};