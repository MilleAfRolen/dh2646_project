'use client'
import firebaseModel from "@/firebaseModel";
import Navbarr from "@/app/(presenters)/navbarPresenter";

export default function signingOut() {
    const fb = firebaseModel();
    return <Navbarr model={fb} />;
}