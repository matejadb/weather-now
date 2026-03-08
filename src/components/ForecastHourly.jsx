import { useState } from "react";
import { useSelector } from "react-redux";

import { getHourlyWeatherObjectArr } from "../utils/helpers";

import DropdownDays from "./DropdownDays";
import HourlyWeatherCard from "./HourlyWeatherCard";

function ForecastHourly() {
  const { hourly } = useSelector((state) => state.weatherData);
  const [selectedDay, setSelectedDay] = useState(null);

  if (!hourly) return null;

  const {
    temperature_2m: temperature,
    time,
    weather_code: weatherCode,
  } = hourly;

  const groupedDays = getHourlyWeatherObjectArr(temperature, time, weatherCode);

  const activeDay = selectedDay || groupedDays[0]?.dayLabel;

  const activeDayData = Array.from(groupedDays).find(
    (day) => day.dayLabel === activeDay,
  )?.hours;

  return (
    <aside className="flex h-full max-h-[667.118px] flex-col overflow-hidden rounded-[20px] bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-neutral-0 font-sans text-xl leading-[1.2] font-semibold">
          Hourly forecast
        </h1>
        <DropdownDays
          days={groupedDays}
          activeDay={activeDay}
          onSetSelectedDay={setSelectedDay}
        />
      </div>

      <div className="mt-4 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {activeDayData?.map((data) => (
            <HourlyWeatherCard data={data} key={data.time} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ForecastHourly;
