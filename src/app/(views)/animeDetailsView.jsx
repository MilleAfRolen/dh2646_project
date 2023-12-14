import Image from "next/image"
export default function AnimeDetailsView({ animeData }){
    console.log("BAJS", animeData)

    function renderAll(anime){
        console.log(anime)
        return ( 
        <div>
            <div className="flex-row">
            <div>
                <img src={anime.large_image_url} height="300" />
            </div>
            
            <div>
                <p>{anime.title}</p>
                <p>Type: {anime.type}</p>
                <p>Source: {anime.source}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Status: {anime.status}</p>
                <p>Airing: {anime.airing}</p>
                
            </div>
            </div>
            
            <div>
                <p>{anime.synopsis}</p>
            </div>
        </div>
            
    )}

    function renderAnimeDetails(anime) {
        console.log(anime)
        return (
            <div>
                <Image
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
        <div className="py-2 px-20 z-10 bg-[#e5e5e5]">
            {renderAnimeDetails(animeData)}
        </div>
    );
};