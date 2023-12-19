import React from "react";
import Link from "next/link";

export default function NavbarView() {
  return (
    <div className="flex justify-between items-center bg-[#161b33] p-4 fixed w-full z-50">
      <div className="text-white text-2xl">
        <Link href="/">Whimsi Weather Anime Whiz</Link>
      </div>
      <div className="flex justify-around">
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
      </div>
    </div>
  );
}
