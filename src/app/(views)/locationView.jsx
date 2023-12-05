import Link from "next/link";

export default function LocationView({ weather }) {
  return (
    <div className="text-center">
      <div className="my-8">
        {weather && (
          <div className="border-2 rounded-md border-black bg-white p-2">
            <h3>Main Weather Information</h3>
            <p>Weather: {weather["weather"][0]["main"]}</p>
            <p>Description: {weather["weather"][0]["description"]}</p>
            <p>Current Temperature: {weather["main"]["temp"]}°C</p>
            <p>Humidity: {weather["main"]["humidity"]}%</p>
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
