import DailyForecastCard from "./DailyForecastCard";

function DailyWeather() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-neutral-0 text-left font-sans text-xl leading-[1.2] font-semibold">
        Daily forecast
      </h1>

      {/* FORECASTS */}
      <div className="grid grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        <DailyForecastCard
          label="Tue"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Wed"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Thu"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Fri"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Sat"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Sun"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastCard
          label="Mon"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
      </div>
    </div>
  );
}

export default DailyWeather;
