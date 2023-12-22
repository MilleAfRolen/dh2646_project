"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseModel";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const handleSignIn = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = userCredential.user;
  //     console.log(user);
  //     setError(false);
  //     return;
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     switch (errorCode) {
  //       case "auth/invalid-credential":
  //         console.log("Wrong password.");
  //         setError("Wrong password.");
  //         break;
  //       case "auth/user-not-found":
  //         console.log("User not found.");
  //         setError("User not found.");
  //         break;
  //       default:
  //         console.log(errorMessage);
  //         setError("Error.");
  //     }
  //     setError(true);
  //   }
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setCurrentUser(user);
      setLoading(false);
    });
    setLoading(true);
    return () => unsubscribe();
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
