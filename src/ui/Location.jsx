import { useSelector } from "react-redux";
import { formatDate } from "../utils/helpers";

function Location() {
  const { location, current } = useSelector((state) => state.weatherData);

  return (
    <div className="flex flex-col items-center gap-3 md:items-start">
      <h1 className="text-neutral-0 font-sans text-[28px] leading-[1.2] font-bold">
        {location}
      </h1>
      <p className="text-neutral-0 font-sans text-[18px] leading-[1.2] font-medium opacity-80">
        {formatDate(current?.time)}
      </p>
    </div>
  );
}

export default Location;
