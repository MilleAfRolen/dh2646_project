import SignInView from "../(views)/signInView";

export default function SignIn(props) {
  function handleSignInACB(email, password) {
    console.log("PRESENTER", email, password);
    props.model.handleEmail(email);
    props.model.handlePassword(password);
  }

  return <SignInView handleSigningIn={handleSignInACB} />;
}
