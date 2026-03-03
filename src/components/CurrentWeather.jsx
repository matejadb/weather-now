import Location from "./Location";
import Temperature from "./Temperature";
import WeatherDetails from "./WeatherDetails";

function CurrentWeather({ weatherData }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10 md:flex-row md:items-center md:justify-between md:bg-[url('/images/bg-today-large.svg')] md:py-20">
        <Location location={weatherData.location} date={weatherData.date} />

        <Temperature temperature={weatherData.temperature} />
      </div>

      <WeatherDetails
        feelsLike={weatherData.feelsLike}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
        precipitation={weatherData.precipitation}
      />
    </div>
  );
}

export default CurrentWeather;
