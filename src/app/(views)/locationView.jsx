import Link from "next/link";

export default function LocationView({ weather, description, temp, humidity }) {
  return (
    <div className="text-center mt-72 h-screen">
      <div className="font-mono font-extrabold">
        {weather && (
          <div className="text-7xl">
              <p>{Math.round(temp)}°C</p>
          </div>
        )}
      </div>
      <div className="mt-8 mb-4">
        {weather && (
          <div className="border-4 rounded-md border-black bg-white p-2 text-sm">
            <h3> <strong>More Weather Information</strong> </h3>
            <p> <strong>Weather:</strong>  {weather}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Humidity:</strong> {humidity}%</p>
          </div>
        )}
      </div>
      <Link href="/animelist">
        <button className="hover:bg-white border-solid hover:border-black border-2 border-white bg-black hover:text-black text-white font-bold py-2 px-4 mx-2 rounded">
          Generate Content Based On Current Weather!
        </button>
      </Link>
    </div>
  );
}
