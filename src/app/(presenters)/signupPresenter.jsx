import SignUpView from "../(views)/signUpView";
import { useRouter } from "next/navigation";

export default function SignUp(props) {
  const router = useRouter();
  async function handleSignUpACB(email, password) {
    try {
      await props.auth.handleSignUp(email, password);
      await props.auth.handleSignIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return <SignUpView handleSigningUp={handleSignUpACB} />;
}
