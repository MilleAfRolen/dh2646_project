import React from "react";
import Link from "next/link";

export default function NavbarView() {
  return (
    <div className="flex justify-between items-center bg-[#161b33] py-4 px-8 fixed w-full z-50">
      <div className="text-white font-bold text-xl">
        <Link href="/">Weather App</Link>
      </div>
      <div className="flex justify-around">
        <Link href="/signup">
          <button className="button">Sign Up</button>
        </Link>
        <Link href="/signin">
          <button className="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
