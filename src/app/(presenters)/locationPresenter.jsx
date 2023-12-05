import LocationView from "../(views)/locationView";

export default function Location({ weatherData }) {
  console.log(weatherData);
  return <LocationView weather={weatherData} />;
}
