import { useDispatch } from "react-redux";

import {
  updatePrecipitationUnit,
  updateTemperatureUnit,
  updateWindSpeedUnit,
} from "../redux/weatherUnitsSlice";

function MenuItemSelectUnit({ label, unit, type }) {
  const dispatch = useDispatch();

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

  return (
    <a
      onClick={handleSelectUnit}
      href="#"
      className={`${unit === label ? "bg-neutral-700" : ""} text-neutral-0 block rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700 disabled:cursor-not-allowed`}
    >
      {label}
    </a>
  );
}

export default MenuItemSelectUnit;
