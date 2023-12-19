import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.js";
import { useState} from "react";

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);

export default function firebaseModel() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function setTheEmail(newEmail) {
      setEmail(newEmail);
    }

    function setThePassword(newPass) {
      setPassword(newPass);
    }

    const handleSignUp = async () => {
      try {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log({ result });

      } catch (error) {
        console.log("Sign-up error: ", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const handleSignIn = async () => {
      try {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log({ result });

      } catch (error) {
        console.log("Sign-in error: ", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

  return { auth, setTheEmail, setThePassword, handleSignUp, handleSignIn, loading, error };
}