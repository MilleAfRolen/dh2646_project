"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function NavbarView({ currentUser, loading, handleSignOut }) {
  if (loading) return;
  const router = useRouter();
  const handleSignOutACB = () => {
    handleSignOut();
    router.push("/");
  };

  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center bg-[#161b33] py-4 px-8 fixed w-full z-50">
      <div className="text-white text-2xl">
        <Link href="/">Whimsi Weather Anime Whiz</Link>
      </div>
      <div className="flex justify-around">
        {!currentUser ? (
          <>
            <Link href="/signup">
              <button className="button">Sign Up</button>
            </Link>
            <Link href="/signin">
              <button className="button">Sign In</button>
            </Link>
          </>
        ) : pathName === "/watchlist" ? (
          <div>
            <Link href="/animelist">
              <button className="button">Animelist</button>
            </Link>
            <button className="button" onClick={handleSignOutACB}>
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link href="/watchlist">
              <button className="button">Watchlist</button>
            </Link>
            <button className="button" onClick={handleSignOutACB}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
