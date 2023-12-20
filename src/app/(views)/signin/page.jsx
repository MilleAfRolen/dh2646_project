'use client'
import firebaseModel from "@/firebaseModel";
import SignIn from "@/app/(presenters)/signInPresenter";

export default function signingIn() {
    const fb = firebaseModel();
    return <SignIn model={fb} />;
}