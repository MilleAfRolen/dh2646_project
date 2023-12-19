import SignUpView from "../(views)/signUpView";

export default function SignUp(props) {
    
    function handleSignUpACB(x) {
       props.model.handleSignUp(x);
    }

    function handleUsernameChangeACB(x) {
        props.model.setTheEmail(x);
    }

    function handlePasswordChangeACB(x) {
        props.model.setThePassword(x);
    }

    return (
        <div>
            <SignUpView 
                handleSigningUp={handleSignUpACB}
                onInputUsernameChange={handleUsernameChangeACB}
                onInputPasswordChange={handlePasswordChangeACB}
            />
        </div>
    );
}