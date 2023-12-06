const AnimeView = ({ animeDetails, loading }) => {
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!animeDetails) {
      return <p>Error loading anime details.</p>;
    }
  
    return (
      <div>
        <h1>Anime Details</h1>
        {}
        {}
      </div>
    );
  };