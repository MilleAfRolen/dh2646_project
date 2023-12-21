"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/authentication.js";
// import { handleSignOut } from "@/firebaseModel";

export default function NavbarView(props) {
  const { currentUser } = useContext(AuthContext);

  const handleSignOutACB = () => {
    props.handleSignOut();
  };

  return (
    <div className="flex justify-between items-center bg-[#161b33] py-4 px-8 fixed w-full z-50">
      <div className="text-white text-2xl">
        <Link href="/">Whimsi Weather Anime Whiz</Link>
      </div>
      <div className="flex justify-around">
        {!currentUser ? (
          <>
            <Link href="/signup">
              <button className="bg-[#b8b8ff] hover:bg-[#9381ff] hover:text-white font-bold py-2 px-4 mx-2 rounded">
                Sign Up
              </button>
            </Link>
            <Link href="/signin">
              <button className="bg-[#b8b8ff] hover:bg-[#9381ff] hover:text-white font-bold py-2 px-4 mx-2 rounded">
                Sign In
              </button>
            </Link>
          </>
        ) : (
          <button
            className="bg-[#b8b8ff] hover:bg-[#9381ff] hover:text-white font-bold py-2 px-4 mx-2 rounded"
            onClick={handleSignOutACB}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}
