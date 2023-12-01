import Location from "./components/location.jsx";
import Navbar from "./components/navbar.jsx";
import Icon from "./components/icon.jsx";
import { FaSun } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-radial from-blue-400 to-blue-700 z-0">
        <Icon icon={<FaSun size="512" color="#FDB813" />} />
        <div className="h-full flex flex-wrap flex-col items-center justify-center p-2 ">
          <h1 className="text-center text-6xl font-bold">Weather App</h1>
          <Location />
        </div>
      </main>
    </div>
  );
}
