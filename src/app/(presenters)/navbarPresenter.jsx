"use client";
import { useEffect } from "react";
import { useContext } from "react";
import NavbarView from "../(views)/navbarView";
import { FirebaseModelContext } from "@/firebaseModel";
import { AuthContext } from "@/authentication";

export default function Navbar() {
  const firebaseModel = useContext(FirebaseModelContext);
  const { currentUser } = useContext(AuthContext);

  const handleSignOutACB = () => {
    firebaseModel.handleSignOut();
  };

  return (
    <NavbarView currentUser={currentUser} handleSignOut={handleSignOutACB} />
  );
}
