import { useDispatch, useSelector } from "react-redux";

import {
  updateNextMetricSystem,
  updateUnitsToImperial,
  updateUnitsToMetric,
} from "../slices/weatherUnitsSlice";

function MenuItemSwitchAllUnits({ label }) {
  const previousMetricSystem = useSelector(
    (state) => state.weatherUnits.nextMetricSystem,
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

export default MenuItemSwitchAllUnits;
