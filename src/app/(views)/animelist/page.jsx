"use client";

import { useContext } from "react";
import { AnimeModelContext } from "@/animeModel";
import Anime from "@/app/(presenters)/animeListPresenter";

export default function AnimeListPage() {
  const model = useContext(AnimeModelContext);
  return <Anime model={model} />;
}
