import Link from "next/link";

export default function LocationView({ weather, description, temp, humidity }) {
  return (
    <div className="text-center">
      <div className="my-8">
        {weather && (
          <div className="border-2 rounded-md border-black bg-white p-2">
            <h3>Main Weather Information</h3>
            <p>Weather: {weather}</p>
            <p>Description: {description}</p>
            <p>Current Temperature: {temp}°C</p>
            <p>Humidity: {humidity}%</p>
          </div>
        )}
      </div>
      <Link href="/animelist">
        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-2 rounded">
          Generate Content
        </button>
      </Link>
    </div>
  );
}
