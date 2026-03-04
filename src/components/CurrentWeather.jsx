import Location from "./Location";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";
import {
  formatDate,
  formatTemperature,
  formatWindSpeed,
  getWeatherIcon,
} from "../utils/utils";

function CurrentWeather({ weatherData, name, country }) {
  const location = `${name}, ${country}`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10 md:flex-row md:items-center md:justify-between md:bg-[url('/images/bg-today-large.svg')] md:py-20">
        <Location location={location} date={formatDate(weatherData?.time)} />

        <Temperature
          icon={getWeatherIcon(weatherData?.weather_code)}
          temperature={formatTemperature(weatherData?.temperature_2m)}
        />
      </div>

      <WeatherDetails
        feelsLike={formatTemperature(weatherData?.apparent_temperature)}
        humidity={weatherData?.relative_humidity_2m}
        wind={formatWindSpeed(weatherData?.wind_speed_10m)}
        precipitation={weatherData?.precipitation}
      />
    </div>
  );
}

export default CurrentWeather;
