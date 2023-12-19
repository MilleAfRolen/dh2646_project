import SignUpView from "../(views)/signUpView";

export default function SignUp(props) {
    
    function handleSubmitACB(x) {
       props.model.handleSignUp(x);
    }

    function handleUsernameChange(x) {
        props.model.setTheEmail(x);
    }

    function handlePasswordChange(x) {
        props.model.setThePassword(x);
    }

    return (
        <div>
            <SignUpView 
                handleSubmit={handleSubmitACB}
                onInputUsernameChange={handleUsernameChange}
                onInputPasswordChange={handlePasswordChange}
            />
        </div>
    );
}