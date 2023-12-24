"use client";
import { useEffect } from "react";
import WatchListView from "@/app/(views)/watchListView";

export default function WatchList({ firebaseModel, currentUser, animeModel }) {
  const handleRemoveWatchlist = async (anime, uid) => {
    if (await firebaseModel.checkIfAnimeInWatchlist(anime, uid)) {
      await firebaseModel.removeFromWatchlist(anime, uid);
    }
  };

  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const result = await firebaseModel.getWatchlist(currentUser.uid);
        animeModel.setWatchListData(result);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser !== null) {
      fetchWatchList();
    }
  }, [currentUser, firebaseModel]);

  return (
    <WatchListView
      watchlist={animeModel.watchList}
      handleRemoveWatchlist={handleRemoveWatchlist}
      currentUser={currentUser}
    />
  );
}
