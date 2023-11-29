import Location from "./components/location.jsx";
import Navbar from "./components/navbar.jsx";

// style={background: url('https://loading.io/asset/705455')}
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main>
        <div className="min-h-screen flex flex-col content-center flex-wrap p-2 justify-center">
          <h1 className="text-center text-3xl font-bold">Weather App</h1>
          <Location />
        </div>
      </main>
    </div>
  );
}
