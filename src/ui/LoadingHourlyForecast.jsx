import DropdownDays from "../components/DropdownDays";
import HourlyWeatherCard from "../components/HourlyWeatherCard";

function LoadingHourlyForecast() {
  const hourlyForecast = Array.from({ length: 8 }, (_, index) => index);

  return (
    <aside className="flex h-full max-h-[667.118px] flex-col overflow-hidden rounded-[20px] bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-neutral-0 font-sans text-xl leading-[1.2] font-semibold">
          Hourly forecast
        </h1>
        <DropdownDays />
      </div>

      <div className="mt-4 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {hourlyForecast.map((hour) => (
            <HourlyWeatherCard key={hour} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default LoadingHourlyForecast;
