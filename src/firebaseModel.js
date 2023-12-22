"use client";
import { initializeApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { useState, createContext, useEffect } from "react";

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

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);

export const FirebaseModelContext = createContext(null);

export function FirebaseModelProvider({ children }) {
  const firebaseModel = FirebaseModel();

  return (
    <FirebaseModelContext.Provider value={firebaseModel}>
      {children}
    </FirebaseModelContext.Provider>
  );
}

export async function saveToWatchlist(email, watchlist) {
  try {
    await this.db.collection('users').doc(email).set({
      watchlist,
    });
    console.log('Watchlist saved successfully!');
  } catch (error) {
    console.error('Error saving watchlist:', error);
  }
}

export async function getWatchlist(email) {
  try {
    const userDoc = await this.db.collection('users').doc(email).get();
    if (userDoc.exists) {
      return userDoc.data().watchlist || [];
    } else {
      console.log('No watchlist found for this user.');
      return [];
    }
  } catch (error) {
    console.error('Error getting watchlist:', error);
    return [];
  }
}

export const useFirebaseModel = () => useContext(FirebaseModelContext);

export default function FirebaseModel() {
  const [email, setEmail] = useState("");
  const [newAccount, setNewAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleEmail(newEmail) {
    setEmail(newEmail);
  }

  function handlePassword(newPass) {
    setPassword(newPass);
  }

  function handleNewAccount(newEmail) {
    setNewAccount(newEmail);
  }

  useEffect(() => {
    if (email === "") return;
    handleSignIn();
  }, [email]);

  useEffect(() => {
    if (newAccount === "") return;
    handleSignUp();
    setEmail(newAccount);
  }, [newAccount]);

  const handleSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        newAccount,
        password
      );
    } catch (error) {
      console.log("Sign-up error: ", error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setError(false);
      return;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/invalid-credential":
          console.log("Wrong password.");
          setError("Wrong password.");
          break;
        case "auth/user-not-found":
          console.log("User not found.");
          setError("User not found.");
          break;
        default:
          console.log(errorMessage);
          setError("Error.");
      }
      setError(true);
    }
  };

  function handleSignOut() {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((e) => {
        // An error happened.
        console.log(e);
      });
  }
  // const handleSignOut = () => {
  //   signOut(auth);
  // };

  return {
    handleEmail,
    handlePassword,
    handleNewAccount,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    error,
    email,
    password,
  };
}
