import SignInView from "../(views)/signInView";
import { useContext } from "react";
import { AuthContext } from "@/authentication";

export default function SignIn(props) {
  function handleSignInACB(email, password) {
    props.model.handleEmail(email);
    props.model.handlePassword(password);
  }

  return (
    <SignInView handleSigningIn={handleSignInACB} error={props.model.error} />
  );
}
