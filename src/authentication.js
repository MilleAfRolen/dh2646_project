"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, useFirebaseModel } from "./firebaseModel";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { signIn, signUp, signOut } = useFirebaseModel();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    setLoading(true);
    return () => unsubscribe();
  }, [currentUser]);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email, password) => {
    setLoading(true);
    try {
      await signUp(email, password);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const value = useMemo(
    () => ({
      currentUser,
      loading,
      handleSignIn,
      handleSignUp,
      handleSignOut,
    }),
    [currentUser, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
