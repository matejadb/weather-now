import WeatherDetailsCard from "./WeatherDetailsCard";

function WeatherDetails({ feelsLike, humidity, wind, precipitation }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <WeatherDetailsCard label="Feels Like" value={feelsLike} unit="°" />
      <WeatherDetailsCard label="Humidity" value={humidity} unit="%" />
      <WeatherDetailsCard label="Wind" value={wind} unit="km/h" />
      <WeatherDetailsCard
        label="Precipitation"
        value={precipitation}
        unit="mm"
      />
    </div>
  );
}

export default WeatherDetails;
