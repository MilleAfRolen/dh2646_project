"use client";

import NavbarView from "../(views)/navbarView";
import { useAuth } from "@/authentication";

export default function Navbar() {
  const { handleSignOut, currentUser, loading } = useAuth();

  const handleSignOutACB = () => {
    handleSignOut();
  };

  return (
    <NavbarView
      currentUser={currentUser}
      loading={loading}
      handleSignOut={handleSignOutACB}
    />
  );
}
