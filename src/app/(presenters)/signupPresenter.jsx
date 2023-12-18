import signUpView from "../(views)/signUpView";

export default function SignUp({ data }) {
    console.log(data);
    return <SignUpView props={data} />;
}