import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import DropdownUnits from "./DropdownUnits";
import ForecastHourly from "./ForecastHourly";
import ForecastMain from "../ui/ForecastMain";
import Header from "./Header";
import Main from "../ui/Main";
import Search from "./Search";
import Slogan from "../ui/Slogan";
import WeatherForecast from "../ui/WeatherForecast";
import { useEffect, useState } from "react";
import LoadingCurrentWeather from "./LoadingCurrentWeather";
import LoadingDailyWeather from "./LoadingDailyWeather";

// const weatherDataCurrent = {
//   location: "Berlin, Germany",
//   date: "Tuesday, Aug 5, 2025",
//   temperature: 20,
//   feelsLike: 18,
//   humidity: 46,
//   wind: 14,
//   precipitation: 0,
// };

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherInformation, setWeatherInformation] = useState({});
  const [location, setLocation] = useState({});
  const { name, country } = location || {};
  const { latitude: lat, longitude: lng } = location || {};

  // console.log(weatherInformation);

  const weatherDataCurrent = weatherInformation?.current;
  const weatherDataDaily = weatherInformation?.daily;

  useEffect(() => {
    async function fetchWeatherInformation() {
      try {
        if (!lat && !lng) return;
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature`,
        );
        const data = await res.json();
        setWeatherInformation(data);
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeatherInformation();
  }, [lat, lng]);

  return (
    <div className="flex flex-col gap-12 bg-neutral-900 px-4 pt-4 pb-12 md:px-6 md:pt-6 md:pb-20 lg:gap-16 lg:px-28 lg:pt-12">
      <Header>
        <DropdownUnits />
      </Header>

      <Slogan />

      <Main>
        <Search onSetLocation={setLocation} onSetIsLoading={setIsLoading} />
        <WeatherForecast>
          <ForecastMain>
            {isLoading || !weatherDataCurrent || !weatherDataDaily ? (
              <>
                <LoadingCurrentWeather />
                <LoadingDailyWeather />
              </>
            ) : (
              <>
                <CurrentWeather
                  name={name}
                  country={country}
                  weatherData={weatherDataCurrent}
                />
                <DailyWeather weatherData={weatherDataDaily} />
              </>
            )}
          </ForecastMain>
          <ForecastHourly />
        </WeatherForecast>
      </Main>
    </div>
  );
}

export default App;
