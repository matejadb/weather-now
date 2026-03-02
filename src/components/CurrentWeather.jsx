import WeatherDetailsContainer from "./WeatherDetailsContainer";

function CurrentWeather({ weatherData }) {
  return (
    <div className="flex flex-col gap-5">
      {/* WEATHER INFO */}
      <div className="flex flex-col gap-4 rounded-[20px] bg-[url('../../public/images/bg-today-small.svg')] bg-cover bg-center bg-no-repeat px-6 py-10">
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
          <img
            className="size-30"
            src="../../public/images/icon-sunny.webp"
            alt="icon"
          />
          <span className="text-neutral-0 font-sans text-[96px] leading-none font-semibold tracking-tight">
            {weatherData.temperature} &deg;
          </span>
        </div>
      </div>

      {/* WEATHER DETAILS */}
      <div className="flex flex-wrap gap-4">
        <WeatherDetailsContainer
          label="Feels Like"
          value={weatherData.feelsLike}
          unit="°"
        />
        <WeatherDetailsContainer
          label="Humidity"
          value={weatherData.humidity}
          unit="%"
        />
        <WeatherDetailsContainer
          label="Wind"
          value={weatherData.wind}
          unit="km/h"
        />
        <WeatherDetailsContainer
          label="Precipitation"
          value={weatherData.precipitation}
          unit="mm"
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
