"use client";
import { useContext } from "react";
import AnimeDetails from "@/app/(presenters)/animeDetailsPresenter";
import { AnimeModelContext } from "@/animeModel";

export default function AnimeDetailsPage({ params }) {
  const id = params.id;
  const model = useContext(AnimeModelContext);
  console.log(model);
  return <AnimeDetails id={id} model={model} />;
}
