
export default function AnimeDetailsView({ id }){

    const PATH = `anime/${id}`
    const BASE_URL = process.env.NEXT_PUBLIC_ANIME_URL;

    function renderAll(anime){
        console.log(anime)
        return ( 
        <div>
            <div className="flex-row">
            <div>d
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

    return(
        <div className="py-2 px-20 z-10 bg-[#e5e5e5]">
            {renderAll(animeData)}
        </div>
    );
};