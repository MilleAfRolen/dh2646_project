"use client";
import SignUp from "@/app/(presenters)/signupPresenter";
import { FirebaseModelContext } from "@/firebaseModel";
import { useContext } from "react";

export default function SignUpPage() {
  const firebaseModel = useContext(FirebaseModelContext);
  return <SignUp model={firebaseModel} />;
}
