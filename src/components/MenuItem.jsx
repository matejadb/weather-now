import { useDispatch } from "react-redux";
import {
  updateNextMetricSystem,
  updatePrecipitationUnit,
  updateTemperatureUnit,
  updateUnitsToImperial,
  updateUnitsToMetric,
  updateWindSpeedUnit,
} from "../weatherSlice";
import { useSelector } from "react-redux";

function MenuItem({
  label,
  onSetSelectedDay,
  onSetIsOpen,
  activeDay,
  unit,
  type,
}) {
  const previousMetricSystem = useSelector(
    (state) => state.weather.nextMetricSystem,
  );
  const dispatch = useDispatch();

  function handleSwitchTo(e) {
    e.preventDefault();

    const nextMetric =
      previousMetricSystem === "Imperial" ? "Metric" : "Imperial";
    dispatch(updateNextMetricSystem(nextMetric));

    if (previousMetricSystem === "Imperial") {
      dispatch(updateUnitsToImperial());
    } else dispatch(updateUnitsToMetric());
  }

  function handleSelectDay(e) {
    e.preventDefault();
    onSetSelectedDay(label);
    onSetIsOpen(false);
  }

  function handleSelectUnit(e) {
    e.preventDefault();
    switch (type) {
      case "temperature":
        dispatch(updateTemperatureUnit(label));
        break;
      case "windSpeed":
        dispatch(updateWindSpeedUnit(label));
        break;
      case "precipitation":
        dispatch(updatePrecipitationUnit(label));
        break;
      default:
        throw new Error("There has been an error.");
    }
  }

  if (onSetSelectedDay)
    return (
      <a
        onClick={handleSelectDay}
        href="#"
        className={`text-neutral-0 block ${
          activeDay === label ? "bg-neutral-700" : ""
        } rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700`}
      >
        {label}
      </a>
    );

  if (type)
    return (
      <a
        onClick={handleSelectUnit}
        href="#"
        className={`${unit === label ? "bg-neutral-700" : ""} text-neutral-0 block rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700 disabled:cursor-not-allowed`}
      >
        {label}
      </a>
    );

  return (
    <a
      onClick={handleSwitchTo}
      href="#"
      className={`text-neutral-0 block rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700`}
    >
      {label}
    </a>
  );
}

export default MenuItem;
