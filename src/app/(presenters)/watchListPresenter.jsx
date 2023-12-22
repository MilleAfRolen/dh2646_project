"use client";
import { useEffect } from "react";
import WatchListView from "../(views)/watchListView";

export default function WatchList({ firebaseModel, currentUser, animeModel }) {
  function handleRemoveWatchlist(anime) {
    firebaseModel.removeFromWatchlist(anime, currentUser.uid);
  }
  useEffect(() => {
    const fetchWatchList = async () => {
      const result = await firebaseModel.getWatchlist(currentUser.uid);
      animeModel.setWatchListData(Object.values(result));
    };
    if (currentUser !== null) {
      fetchWatchList();
    }
  }, [currentUser, firebaseModel.databaseChange, animeModel.watchList]);

  return (
    <WatchListView
      animeData={animeModel.watchList}
      handleRemoveWatchlist={handleRemoveWatchlist}
    />
  );
}
