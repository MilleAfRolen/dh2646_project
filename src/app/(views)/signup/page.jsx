"use client";
import SignUp from "@/app/(presenters)/signUpPresenter";
import { FirebaseModelContext } from "@/firebaseModel";
import { AuthContext } from "@/authentication";
import { useContext } from "react";

export default function SignUpPage() {
  const firebaseModel = useContext(FirebaseModelContext);
  const auth = useContext(AuthContext);
  return <SignUp model={firebaseModel} auth={auth} />;
}
