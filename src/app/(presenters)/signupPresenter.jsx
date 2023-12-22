import SignUpView from "../(views)/signUpView";

export default function SignUp(props) {
  function handleSignUpACB(email, password) {
    props.model.handlePassword(password);
    props.model.handleNewAccount(email);
  }

  return <SignUpView handleSigningUp={handleSignUpACB} />;
}
