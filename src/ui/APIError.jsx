import { useDispatch, useSelector } from "react-redux";
import iconError from "/images/icon-error.svg";
import iconRetry from "/images/icon-retry.svg";
import {
  fetchLocation,
  fetchWeather,
  updateSearchQuery,
} from "../redux/weatherDataSlice";

function APIError() {
  const dispatch = useDispatch();
  const { searchQuery, position } = useSelector((state) => state.weatherData);

  function handleRetry() {
    dispatch(updateSearchQuery(""));
    dispatch(fetchLocation(searchQuery));
    dispatch(fetchWeather(position));
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <img src={iconError} alt="Error icon" className="size-10" />
      <h1 className="text-neutral-0 font-bricolage lg:text-big text-center text-4xl leading-[1.2] font-bold md:text-5xl">
        Something went wrong
      </h1>
      <p className="text-center font-sans text-xl leading-[1.2] font-medium text-neutral-200">
        We couldn't connect to the server (API Error). Please try again in a few
        moments.
      </p>
      <button
        onClick={handleRetry}
        className="flex cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-neutral-800 px-4 py-3 transition-all duration-300 hover:bg-neutral-700"
      >
        <img src={iconRetry} alt="Retry icon" />
        <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
          Retry
        </span>
      </button>
    </div>
  );
}

export default APIError;
