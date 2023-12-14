"use client";
import { useState, useEffect } from "react";
import NavbarView from "../(views)/navbarView";

export default function Navbar({ firebaseModel }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseModel.auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [firebaseModel]);

  return <NavbarView firebaseModel={firebaseModel} />;
}
