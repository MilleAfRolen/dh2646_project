"use client";
import { useEffect } from "react";
import WatchListView from "@/app/(views)/watchListView";
import loading from "/public/icons/loadingSun.svg";
import Image from "next/image";

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

  if (!currentUser) {
    return (
      <div className="bg-gradient-radial from-blue-300 to-blue-400 pt-18 h-screen w-full fixed top-0 left-0 -z-50">
        <div className="flex items-center justify-center h-full">
          <Image
            src={loading}
            alt="Loading"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="w-1/4 h-1/4"
          />
        </div>
      </div>
    );
  }

  return (
    <WatchListView
      watchlist={animeModel.watchList}
      handleRemoveWatchlist={handleRemoveWatchlist}
      currentUser={currentUser}
    />
  );
}
