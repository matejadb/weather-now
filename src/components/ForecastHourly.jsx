import Dropdown from "./Dropdown";
import HourlyWeatherCard from "./HourlyWeatherCard";

function ForecastHourly() {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-neutral-0 font-sans text-xl leading-[1.2] font-semibold">
          Hourly forecast
        </h1>
        <Dropdown />
      </div>

      <HourlyWeatherCard value="4 PM" temperature="20" />
      <HourlyWeatherCard value="3 PM" temperature="20" />
      <HourlyWeatherCard value="5 PM" temperature="20" />
      <HourlyWeatherCard value="6 PM" temperature="19" />
      <HourlyWeatherCard value="7 PM" temperature="18" />
      <HourlyWeatherCard value="8 PM" temperature="18" />
      <HourlyWeatherCard value="9 PM" temperature="17" />
      <HourlyWeatherCard value="10 PM" temperature="17" />
    </div>
  );
}

export default ForecastHourly;
