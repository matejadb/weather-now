import WeatherDetailsCard from "./WeatherDetailsCard";

function CurrentWeather({ weatherData }) {
  return (
    <div className="flex flex-col gap-5">
      {/* WEATHER INFO */}
      <div className="flex flex-col gap-4 rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10 md:flex-row md:items-center md:justify-between md:bg-[url('/images/bg-today-large.svg')] md:py-20">
        {/* LOCATION INFO */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-neutral-0 font-sans text-[28px] leading-[1.2] font-bold">
            {weatherData.location}
          </h1>
          <p className="text-neutral-0 font-sans text-[18px] leading-[1.2] font-medium opacity-80">
            {weatherData.date}
          </p>
        </div>

        {/* TEMP CONTAINER */}
        <div className="flex items-center justify-center gap-5">
          <img className="size-30" src="/images/icon-sunny.webp" alt="icon" />
          <span className="text-neutral-0 font-sans text-[86px] leading-none font-semibold tracking-tight sm:text-8xl">
            {weatherData.temperature} &deg;
          </span>
        </div>
      </div>

      {/* WEATHER DETAILS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <WeatherDetailsCard
          label="Feels Like"
          value={weatherData.feelsLike}
          unit="°"
        />
        <WeatherDetailsCard
          label="Humidity"
          value={weatherData.humidity}
          unit="%"
        />
        <WeatherDetailsCard label="Wind" value={weatherData.wind} unit="km/h" />
        <WeatherDetailsCard
          label="Precipitation"
          value={weatherData.precipitation}
          unit="mm"
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
