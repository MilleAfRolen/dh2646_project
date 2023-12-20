import React from "react";
import Link from "next/link";
import { useAuth } from "../../authentication"


export default function Navbar() {
  const { currentUser } = useAuth();

  return (
    <div className="flex justify-between items-center bg-[#161b33] p-4 fixed w-full z-50">
      <div className="text-white font-bold text-xl">
        <Link href="/">Weather App</Link>
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
            onClick={() => handleSignOut()} // Implement a handleSignOut function
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}
