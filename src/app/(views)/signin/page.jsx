"use client";
import { useContext } from "react";
import SignIn from "@/app/(presenters)/signInPresenter";
import { FirebaseModelContext } from "@/firebaseModel";
import { AuthContext } from "@/authentication";

export default function SignInPage() {
  const firebaseModel = useContext(FirebaseModelContext);
  const auth = useContext(AuthContext);
  return <SignIn model={firebaseModel} auth={auth} />;
}
