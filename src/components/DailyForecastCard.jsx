import { formatTemperature, getWeatherIcon } from "../utils/utils";

function DailyForecastCard({ dailyInformation }) {
  const isLoading = !dailyInformation;

  const { tempMax, tempMin, time, weatherCode } = dailyInformation || {};
  const label = new Date(time).toDateString().split(" ")[0];

  if (isLoading)
    return (
      <div className="text-neutral-0 flex h-41.25 flex-col items-center gap-4 rounded-xl border border-neutral-600 bg-neutral-800 px-2.5 py-4">
        {/* <span className="font-sans text-[18px] leading-[1.2] font-medium"></span>
        <img className="size-15" src={getWeatherIcon(weatherCode)} alt="icon" />

        <div className="flex w-full items-center justify-between">
          <span className="font-sans text-[16px] leading-[1.2] font-medium"></span>
          <span className="font-sans text-[16px] leading-[1.2] text-neutral-200"></span>
        </div> */}
      </div>
    );

  return (
    <div className="text-neutral-0 flex flex-col items-center gap-4 rounded-xl border border-neutral-600 bg-neutral-800 px-2.5 py-4">
      <span className="font-sans text-[18px] leading-[1.2] font-medium">
        {label}
      </span>
      <img className="size-15" src={getWeatherIcon(weatherCode)} alt="icon" />

      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-[16px] leading-[1.2] font-medium">
          {formatTemperature(tempMax)}°
        </span>
        <span className="font-sans text-[16px] leading-[1.2] text-neutral-200">
          {formatTemperature(tempMin)}°
        </span>
      </div>
    </div>
  );
}

export default DailyForecastCard;
