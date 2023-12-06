
const [animeDetails, setAnimeDetails] = useState(null);
const [loading, setLoading] = useState(true);

export default function AnimePresenter(){
    
  
    useEffect(() => {
      const mal_id = 1; //idk
      fetchAnimeDetails(mal_id)
        .then((data) => {
          setAnimeDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []); 
  
    return <AnimeView animeDetails={animeDetails} loading={loading} />;
  };