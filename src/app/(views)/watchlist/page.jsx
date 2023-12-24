"use client";
import WatchList from "@/app/(presenters)/watchListPresenter";
import { useFirebaseModel } from "@/firebaseModel";
import { useAuth } from "@/authentication";
import { useAnimeModel } from "@/animeModel";

export default function WatchlistPage() {
  const model = useFirebaseModel();
  const animeModel = useAnimeModel();
  const { currentUser } = useAuth();

  return (
    <WatchList
      firebaseModel={model}
      currentUser={currentUser}
      animeModel={animeModel}
    />
  );
}
