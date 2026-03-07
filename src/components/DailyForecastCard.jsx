import { useSelector } from "react-redux";
import { formatTemperature, getWeatherIcon } from "../utils/helpers";

function DailyForecastCard({ dailyInformation }) {
  const isLoading = !dailyInformation;

  const temperatureUnit = useSelector(
    (state) => state.weatherUnits.temperatureUnit,
  );

  const { tempMax, tempMin, time, weatherCode } = dailyInformation || {};
  const label = new Date(time).toDateString().split(" ")[0];

  if (isLoading)
    return (
      <div className="text-neutral-0 flex h-41.25 flex-col items-center gap-4 rounded-xl border border-neutral-600 bg-neutral-800 px-2.5 py-4"></div>
    );

  return (
    <div className="text-neutral-0 flex flex-col items-center gap-4 rounded-xl border border-neutral-600 bg-neutral-800 px-2.5 py-4">
      <span className="font-sans text-[18px] leading-[1.2] font-medium">
        {label}
      </span>
      <img className="size-15" src={getWeatherIcon(weatherCode)} alt="icon" />

      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-[16px] leading-[1.2] font-medium">
          {formatTemperature(tempMax, temperatureUnit)}°
        </span>
        <span className="font-sans text-[16px] leading-[1.2] text-neutral-200">
          {formatTemperature(tempMin, temperatureUnit)}°
        </span>
      </div>
    </div>
  );
}

export default DailyForecastCard;
