"use client";

export default function Location() {
  return (
    <div className="text-center">
      {loading ? (
        <p>Loading...</p> // Display loading state while waiting for API response
      ) : (
        <div className="my-8">
          {weather && (
            <div>
              <h3>Main Weather Information</h3>
              <p>Current Temperature: {weather["main"]["temp"]}°C</p>
              <p>Humidity: {weather["main"]["humidity"]}%</p>
              {/* Add more properties from the 'main' object as needed */}
            </div>
          )}
        </div>
      )}
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-2 rounded"
        onClick={() => {}}
      >
        Generate Content
      </button>
    </div>
  );
}
