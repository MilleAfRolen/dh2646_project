import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 fixed w-full z-50">
      <div className="text-white font-bold text-xl">
        <Link href="#">Weather App</Link>
      </div>
      <div className="flex justify-around">
        <Link href="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
            Sign In
          </button>
        </Link>
        <Link href="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
            Sing up
          </button>
        </Link>
      </div>
    </div>
  );
}
