import DailyForecastContainer from "./DailyForecastContainer";

function DailyWeather() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-neutral-0 text-left font-sans text-xl leading-[1.2] font-semibold">
        Daily forecast
      </h1>

      {/* FORECASTS */}
      <div className="flex w-full flex-wrap items-center gap-4">
        <DailyForecastContainer
          label="Tue"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
          label="Wed"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
          label="Thu"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
          label="Fri"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
          label="Sat"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
          label="Sun"
          icon="/images/icon-rain.webp"
          min="14"
          max="20"
        />
        <DailyForecastContainer
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
