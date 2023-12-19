import SignInView from "../(views)/signInView";

export default function SignIn(props) {

    function handleSignInACB(x) {
        props.model.handleSignIn(x);
     }
 
     function handleUsernameChangeACB(x) {
         props.model.setTheEmail(x);
     }
 
     function handlePasswordChangeACB(x) {
         props.model.setThePassword(x);
     } 

    return (
        <div>
            <SignInView
                handleSigningIn={handleSignInACB}
                onInputUsernameChange={handleUsernameChangeACB}
                onInputPasswordChange={handlePasswordChangeACB}
            />
        </div>
    );
}