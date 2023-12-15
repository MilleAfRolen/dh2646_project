import Image from "next/image"
export default function AnimeDetailsView({ animeData }){
    console.log("BAJS", animeData)

    function renderAll(anime){
        console.log(anime)
        return ( 
        <div>
            <div>
                <p className="text-2xs font-bold pt-4">{anime.title}</p>
                <p> <strong>Type:</strong> {anime.type}</p>
                <p> <strong>Source:</strong> {anime.source}</p>
                <p> <strong>Episodes:</strong> {anime.episodes}</p>
                <p> <strong>Status:</strong> {anime.status}</p>
            </div>
            <div className="my-5">
                <p>{anime.synopsis}</p>
            </div>
        </div>
            
    )}

    function renderAnimeImage(anime) {
        console.log(anime)
        return (
            <div>
                <Image className="h-full w-96 object-cover rounded-3xl border border-black my-5"
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

    return(
        <div className="py-2 px-20 z-10 bg-[#e5e5e5] flex flex-row">
            <div>
                {renderAnimeImage(animeData)}
            </div>
            <div className="w-full my-5 mx-5">
                {renderAll(animeData)}
            </div>
        </div>
    );
};