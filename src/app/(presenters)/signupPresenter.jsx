import SignUpView from "../(views)/signUpView";

export default function SignUp(props) {
    console.log(props);
    
    function handleSubmitACB(x) {
       props.handleForm(x);
    }

    function handleUsernameChange(x) {
        props.setEmail(x);
    }

    function handlePasswordChange(x) {
        props.setPassword(x);
    }

    return (
        <div>
            <SignUpView 
                // model={props}
                handleSubmit={handleSubmitACB}
                onInputUsernameChange={handleUsernameChange}
                onInputPasswordChange={handlePasswordChange}
                
            />
        </div>
    );
}