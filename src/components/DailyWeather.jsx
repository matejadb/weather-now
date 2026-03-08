import { useSelector } from "react-redux";
import { getDailyWeatherObjectArr } from "../utils/helpers";
import DailyForecastCard from "./DailyForecastCard";

function DailyWeather() {
  const { daily } = useSelector((state) => state.weatherData);

  if (!daily) return null;

  const {
    temperature_2m_max: tempMax,
    temperature_2m_min: tempMin,
    weather_code: weatherCode,
    time,
  } = daily;

  const dailyWeather = getDailyWeatherObjectArr(
    tempMax,
    tempMin,
    time,
    weatherCode,
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-neutral-0 text-left font-sans text-xl leading-[1.2] font-semibold">
        Daily forecast
      </h1>

      {/* FORECASTS */}
      <div className="grid grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {dailyWeather?.map((daily) => (
          <DailyForecastCard dailyInformation={daily} key={daily.time} />
        ))}
      </div>
    </div>
  );
}

export default DailyWeather;
