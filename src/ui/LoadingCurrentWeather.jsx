import { SyncLoader } from "react-spinners";

import WeatherDetails from "./WeatherDetails";

function LoadingCurrentWeather() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      <div className="flex h-71.5 flex-col items-center justify-center rounded-[20px] bg-neutral-800 px-6 py-20">
        <SyncLoader color="#ffffff" />
      </div>

      <WeatherDetails
        feelsLike={"–"}
        humidity={"–"}
        wind={{ value: "–", unit: "" }}
        precipitation={{ value: "–", unit: "" }}
      />
    </div>
  );
}

export default LoadingCurrentWeather;
