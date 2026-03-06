import Location from "./Location";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import {
  formatDate,
  formatPrecipitation,
  formatTemperature,
  formatWindSpeed,
  getWeatherIcon,
} from "../utils/helpers";
import { useSelector } from "react-redux";

function CurrentWeather({
  weatherData,
  name,
  country,
  // temperatureUnit,
  // windSpeedUnit,
  // precipitationUnit,
}) {
  const location = `${name}, ${country}`;
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const windSpeedUnit = useSelector((state) => state.weather.windSpeedUnit);
  const precipitationUnit = useSelector(
    (state) => state.weather.precipitationUnit,
  );

  const temperature = formatTemperature(
    weatherData?.temperature_2m,
    temperatureUnit,
  );
  const windSpeed = formatWindSpeed(weatherData?.wind_speed_10m, windSpeedUnit);
  const precipitation = formatPrecipitation(
    weatherData?.precipitation,
    precipitationUnit,
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-71.5 flex-col gap-4 rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10 md:flex-row md:items-center md:justify-between md:bg-[url('/images/bg-today-large.svg')] md:py-20">
        <Location location={location} date={formatDate(weatherData?.time)} />

        <Temperature
          icon={getWeatherIcon(weatherData?.weather_code)}
          temperature={temperature}
        />
      </div>

      <WeatherDetails
        feelsLike={formatTemperature(
          weatherData?.apparent_temperature,
          temperatureUnit,
        )}
        humidity={weatherData?.relative_humidity_2m}
        wind={windSpeed}
        precipitation={precipitation}
      />
    </div>
  );
}

export default CurrentWeather;
