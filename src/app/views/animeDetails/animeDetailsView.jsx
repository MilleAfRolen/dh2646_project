import "/src/dishSource.js";

export default function AnimeDetailsView(anime){

    return(
        <div>
            {renderAll(anime)}
        </div>
    );
        
    function renderAll(anime){
        return <div>
            <img src={anime.large_image_url} height="300" />
            <p>{anime.title}</p>
        </div>
    }
};