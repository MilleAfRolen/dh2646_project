"use client";
import WatchList from "@/app/(presenters)/watchListPresenter";
import { FirebaseModelContext } from "@/firebaseModel";
import { AuthContext } from "@/authentication";
import { useContext } from "react";
import { AnimeModelContext } from "@/animeModel";

export default function WatchListPage() {
  const model = useContext(FirebaseModelContext);
  const animeModel = useContext(AnimeModelContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <WatchList
      firebaseModel={model}
      currentUser={currentUser}
      animeModel={animeModel}
    />
  );
}
