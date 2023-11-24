"use client";

import { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  return (
    <div>
      <button onClick={getLocation}>Fetch Location</button>
      {location && (
        <h1>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </h1>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
