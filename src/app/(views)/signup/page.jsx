"use client";
import SignUp from "@/app/(presenters)/signUpPresenter";

export default function SigningUp() {
  const firebaseModel = useContext(FirebaseModelContext);
  return <SignUp model={firebaseModel} />;
}
