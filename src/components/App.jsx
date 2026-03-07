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
import APIError from "../ui/APIError";

function App() {
  const dispatch = useDispatch();
  const { position, status, error, searchQuery } = useSelector(
    (state) => state.weatherData,
  );

  useEffect(() => {
    dispatch(fetchLocation(searchQuery));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (!position) return;

    dispatch(fetchWeather(position));
  }, [position, dispatch]);

  console.log(error);

  return (
    <div className="flex min-h-screen flex-col gap-12 bg-neutral-900 px-4 pt-4 pb-12 md:px-6 md:pt-6 md:pb-20 lg:gap-16 lg:px-28 lg:pt-12">
      <Header>
        <DropdownUnits />
      </Header>

      <Slogan />

      <Main>
        {error === "bad request" ? (
          <APIError />
        ) : (
          <>
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
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
