'use client'
import { initializeApp, getApps } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { useState} from "react";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebase_app);

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
        alert(error.message);
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
        alert(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const logout = () => {
      signOut(auth);
    };

  return { setTheEmail, setThePassword, handleSignUp, handleSignIn, logout, loading, error };
}