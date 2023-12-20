import LocationView from "../(views)/locationView";

export default function Location({ weatherData }) {
  return <LocationView weather={weatherData} />;
}
