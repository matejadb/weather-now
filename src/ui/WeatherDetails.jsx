import WeatherDetailsCard from "./WeatherDetailsCard";

function WeatherDetails({ feelsLike, humidity, wind, precipitation }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <WeatherDetailsCard label="Feels Like" value={feelsLike} unit="°" />
      <WeatherDetailsCard label="Humidity" value={humidity} unit="%" />
      <WeatherDetailsCard label="Wind" value={wind.value} unit={wind.unit} />
      <WeatherDetailsCard
        label="Precipitation"
        value={precipitation?.value}
        unit={precipitation?.unit}
      />
    </div>
  );
}

export default WeatherDetails;
