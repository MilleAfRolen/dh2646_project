"use client";
import { useContext } from "react";
import SignIn from "@/app/(presenters)/signinPresenter";
import { FirebaseModelContext } from "@/firebaseModel";

export default function SignInPage() {
  const firebaseModel = useContext(FirebaseModelContext);
  return <SignIn model={firebaseModel} />;
}
