import { SyncLoader } from "react-spinners";
import WeatherDetails from "./WeatherDetails";

function Loading() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      <div className="flex flex-col items-center rounded-[20px] bg-neutral-800 px-6 py-20">
        <SyncLoader color="#ffffff" />
      </div>

      <WeatherDetails
        feelsLike={"–"}
        humidity={"–"}
        wind={"–"}
        precipitation={"–"}
      />
    </div>
  );
}

export default Loading;
