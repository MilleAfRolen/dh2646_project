import SignInView from "../(views)/signInView";
import { useRouter } from "next/navigation";

export default function SignIn(props) {
  const router = useRouter();
  async function handleSignInACB(email, password) {
    try {
      await props.auth.handleSignIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error, "hihi");
    }
  }

  return <SignInView handleSigningIn={handleSignInACB} />;
}
