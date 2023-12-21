'use client'
import firebaseModel from "@/firebaseModel";
import SignUp from "@/app/(presenters)/signUpPresenter";

export default function SigningUp() {
    const fb = firebaseModel();
    return <SignUp model={fb} />;
}