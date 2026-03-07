import Location from "../ui/Location";
import Temperature from "../ui/Temperature";
import WeatherDetails from "../ui/WeatherDetails";
import {
  formatPrecipitation,
  formatTemperature,
  formatWindSpeed,
  getWeatherIcon,
} from "../utils/helpers";
import { useSelector } from "react-redux";

function CurrentWeather() {
  const { current } = useSelector((state) => state.weatherData);

  const temperatureUnit = useSelector(
    (state) => state.weatherUnits.temperatureUnit,
  );
  const windSpeedUnit = useSelector(
    (state) => state.weatherUnits.windSpeedUnit,
  );
  const precipitationUnit = useSelector(
    (state) => state.weatherUnits.precipitationUnit,
  );

  const windSpeed = formatWindSpeed(current?.wind_speed_10m, windSpeedUnit);

  const precipitation = formatPrecipitation(
    current?.precipitation,
    precipitationUnit,
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-71.5 flex-col gap-4 rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10 md:flex-row md:items-center md:justify-between md:bg-[url('/images/bg-today-large.svg')] md:py-20">
        <Location />

        <Temperature icon={getWeatherIcon(current?.weather_code)} />
      </div>

      <WeatherDetails
        feelsLike={formatTemperature(
          current?.apparent_temperature,
          temperatureUnit,
        )}
        humidity={current?.relative_humidity_2m}
        wind={windSpeed}
        precipitation={precipitation}
      />
    </div>
  );
}

export default CurrentWeather;
