import DailyForecastCard from "./DailyForecastCard";

function LoadingDailyWeather() {
  const dailyWeather = Array.from({ length: 7 }, (_, index) => index);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-neutral-0 text-left font-sans text-xl leading-[1.2] font-semibold">
        Daily forecast
      </h1>

      {/* FORECASTS */}
      <div className="grid grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {dailyWeather?.map((daily) => (
          <DailyForecastCard key={daily} />
        ))}
      </div>
    </div>
  );
}

export default LoadingDailyWeather;
