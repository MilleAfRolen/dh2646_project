
"use client";
import AnimeDetails from "@/app/(presenters)/animeDetailsPresenter";


export default function animeIdPage({ params }) {
    const id = params.id
    return (
      <AnimeDetails id={id} />
    );
}