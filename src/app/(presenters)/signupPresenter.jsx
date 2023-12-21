import SignUpView from "../(views)/signUpView";

export default function SignUp(props) {
  function handleSignUpACB() {
    props.model.handleSignUp();
  }

  function handleUsernameChangeACB(x) {
    props.model.setTheEmail(x);
  }

  function handlePasswordChangeACB(x) {
    props.model.setThePassword(x);
  }

  return (
    <SignUpView
      handleSigningUp={handleSignUpACB}
      onInputUsernameChange={handleUsernameChangeACB}
      onInputPasswordChange={handlePasswordChangeACB}
    />
  );
}
