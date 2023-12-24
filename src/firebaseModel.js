"use client";
import { initializeApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { useState, createContext, useContext } from "react";
import { getDatabase, ref, set, get } from "firebase/database";
import { useMemo } from "react";

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

const db = getDatabase(firebase_app);

export const auth = getAuth(firebase_app);

export const FirebaseModelContext = createContext(null);

export function FirebaseModelProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return auth.signOut();
  };

  async function saveToWatchlist(anime, uid) {
    setLoading(true);
    try {
      set(
        ref(db, "users/" + uid + "/watchlist" + "/" + anime["mal_id"]),
        anime
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getWatchlist(uid) {
    setLoading(true);
    try {
      const snapshot = await get(ref(db, "users/" + uid + "/watchlist"));
      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function checkIfAnimeInWatchlist(anime, uid) {
    setLoading(true);
    try {
      const snapshot = await get(
        ref(db, "users/" + uid + "/watchlist" + "/" + anime["mal_id"])
      );
      return snapshot.exists();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function removeFromWatchlist(anime, uid) {
    setLoading(true);
    try {
      set(ref(db, "users/" + uid + "/watchlist" + "/" + anime["mal_id"]), null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const value = useMemo(
    () => ({
      signIn,
      signUp,
      signOut,
      saveToWatchlist,
      getWatchlist,
      removeFromWatchlist,
      checkIfAnimeInWatchlist,
      loading,
    }),
    [loading]
  );

  return (
    <FirebaseModelContext.Provider value={value}>
      {children}
    </FirebaseModelContext.Provider>
  );
}

export const useFirebaseModel = () => useContext(FirebaseModelContext);

export default function FirebaseModel() {}
