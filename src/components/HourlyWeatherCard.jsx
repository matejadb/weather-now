import { useSelector } from "react-redux";

import {
  formatTemperature,
  formatTime,
  getWeatherIcon,
} from "../utils/helpers";

function HourlyWeatherCard({ data }) {
  const isLoading = !data;
  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);

  if (isLoading)
    return (
      <div className="flex h-14.25 items-center justify-between gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3"></div>
    );

  const { time: fullDate, temperature, weatherCode } = data;

  const time = formatTime(fullDate);

  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
      <div className="flex items-center">
        <img className="size-10" src={getWeatherIcon(weatherCode)} alt="icon" />
        <span className="text-neutral-0 font-sans text-xl leading-[1.2] font-medium">
          {time}
        </span>
      </div>

      <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
        {formatTemperature(temperature, temperatureUnit)}°
      </span>
    </div>
  );
}

export default HourlyWeatherCard;
