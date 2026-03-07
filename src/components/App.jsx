import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchLocation, fetchWeather } from "../slices/weatherDataSlice";

import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import DropdownUnits from "./DropdownUnits";
import ForecastHourly from "./ForecastHourly";
import ForecastMain from "../ui/ForecastMain";
import Header from "../ui/Header";
import Main from "../ui/Main";
import Search from "./Search";
import Slogan from "../ui/Slogan";
import WeatherForecast from "../ui/WeatherForecast";
import LoadingCurrentWeather from "../ui/LoadingCurrentWeather";
import LoadingDailyWeather from "../ui/LoadingDailyWeather";
import LoadingHourlyForecast from "../ui/LoadingHourlyForecast";
import NoSearchResults from "../ui/NoSearchResults";

function App() {
  const dispatch = useDispatch();
  const { position, status, error } = useSelector((state) => state.weatherData);

  // console.log(weatherInformation);

  // useEffect(() => {
  //   async function fetchWeatherInformation() {
  //     try {
  //       if (!lat && !lng) return;
  //       const res = await fetch(
  //         `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature`,
  //       );
  //       const data = await res.json();
  //       setWeatherInformation(data);
  //     } catch (err) {
  //       throw new Error(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchWeatherInformation();
  // }, [lat, lng]);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  useEffect(() => {
    if (!position) return;

    dispatch(fetchWeather(position));
  }, [position, dispatch]);

  return (
    <div className="flex min-h-screen flex-col gap-12 bg-neutral-900 px-4 pt-4 pb-12 md:px-6 md:pt-6 md:pb-20 lg:gap-16 lg:px-28 lg:pt-12">
      <Header>
        <DropdownUnits />
      </Header>

      <Slogan />

      <Main>
        <Search />
        {error && <NoSearchResults />}
        {!error && (
          <WeatherForecast>
            <ForecastMain>
              {status === "loading" ? (
                <>
                  <LoadingCurrentWeather />
                  <LoadingDailyWeather />
                </>
              ) : (
                <>
                  <CurrentWeather />
                  <DailyWeather />
                </>
              )}
            </ForecastMain>
            {status === "loading" ? (
              <LoadingHourlyForecast />
            ) : (
              <ForecastHourly />
            )}
          </WeatherForecast>
        )}
      </Main>
    </div>
  );
}

export default App;
