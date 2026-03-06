import { useEffect, useRef, useState } from "react";
import iconCog from "/images/icon-units.svg";
import iconArrowDown from "/images/icon-dropdown.svg";
import MenuItem from "./MenuItem";
import MenuGroup from "./MenuGroup";
import { useSelector } from "react-redux";

function DropdownUnits() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const nextMetricSystem = useSelector(
    (state) => state.weather.nextMetricSystem,
  );

  const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  const windSpeedUnit = useSelector((state) => state.weather.windSpeedUnit);
  const precipitationUnit = useSelector(
    (state) => state.weather.precipitationUnit,
  );

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    function callback(e) {
      if (!ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", callback);

    return () => document.removeEventListener("click", callback);
  }, []);

  const temperatureUnits = ["Celsius (°C)", "Fahrenheit (°F)"];
  const windSpeedUnits = ["km/h", "mph"];
  const precipitationUnits = ["Millimeters (mm)", "Inches (in)"];

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="focus:ring-neutral-0 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-neutral-800 px-4 py-3 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-700 focus:ring-3 focus:ring-offset-5 focus:ring-offset-neutral-900 focus:outline-none"
        >
          <img src={iconCog} alt="Icon of a cogwheel." />
          <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
            Units
          </span>
          <img src={iconArrowDown} alt="Icon of an arrow pointing down." />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-100 mt-2 flex w-53.5 origin-top-right flex-col gap-1 divide-y divide-neutral-600 rounded-xl border border-neutral-600 bg-neutral-800 px-2 py-1.5"
          role="menu"
        >
          <MenuItem label={`Switch to ${nextMetricSystem}`} />

          <MenuGroup groupLabel="Temperature">
            {temperatureUnits.map((unit) => (
              <MenuItem
                key={unit}
                label={unit}
                unit={temperatureUnit}
                // onSetUnit={dispatch(updateTemperatureUnit)}
                type={"temperature"}
              />
            ))}
          </MenuGroup>

          <MenuGroup groupLabel="Wind Speed">
            {windSpeedUnits.map((unit) => (
              <MenuItem
                key={unit}
                label={unit}
                unit={windSpeedUnit}
                // onSetUnit={dispatch(updateWindSpeedUnit)}
                type={"windSpeed"}
              />
            ))}
          </MenuGroup>

          <MenuGroup groupLabel="Precipitation">
            {precipitationUnits.map((unit) => (
              <MenuItem
                key={unit}
                label={unit}
                unit={precipitationUnit}
                // onSetUnit={dispatch(updatePrecipitationUnit)}
                type={"precipitation"}
              />
            ))}
          </MenuGroup>
        </div>
      )}
    </div>
  );
}

export default DropdownUnits;
