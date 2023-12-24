import Link from "next/link";
import Image from "next/image";

{
  /* <div className="icon">
<Image
  src={icon}
  alt="Icon"
  width={0}
  height={0}
  sizes="100vw"
  className="w-4/5 h-4/5"
  priority={true}
/>
</div> */
}

export default function WeatherInfoView({
  weather,
  description,
  temp,
  humidity,
  icon,
  city,
  region,
}) {
  return (
    <div className="flex flex-row items-center justify-center grow">
      <Image
        src={icon}
        alt="Icon"
        width={0}
        height={0}
        sizes="100vw"
        className="w-2/5 h-2/5"
        priority={true}
      />
      <div className="text-center flex flex-col items-center justify-center">
        {weather && (
          <div className="text-7xl font-mono font-extrabold">
            <p>{Math.round(temp)}°C</p>
          </div>
        )}
        <div className="mt-8 mb-4 font-mono">
          <h2>
            {city + ","} {region}
          </h2>
          <h2>
            {weather + " - "} {description}
          </h2>
          {/* {weather && (
            <div className="border-4 rounded-md border-black bg-white p-2 text-sm">
              <h3 className="font-bold">More Weather Information</h3>
              <p>
                <strong>Weather:</strong> {weather}
              </p>
              <p>
                <strong>Description:</strong> {description}
              </p>
              <p>
                <strong>Humidity:</strong> {humidity}%
              </p>
            </div>
          )} */}
        </div>
        <Link href="/animelist">
          <button
            className="hover:bg-white border-solid hover:border-black border-2
           border-white bg-black hover:text-black text-white font-bold py-2 px-4 mx-2 rounded w-52"
          >
            Generate Content Based on Weather!
          </button>
        </Link>
      </div>
    </div>
  );
}
