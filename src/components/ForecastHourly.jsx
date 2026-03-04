// import { useState } from "react";
import { getHourlyWeatherObjectArr } from "../utils/utils";
import DropdownDays from "./DropdownDays";
import HourlyWeatherCard from "./HourlyWeatherCard";

function ForecastHourly({ weatherData }) {
  const {
    temperature_2m: temperature,
    time,
    weather_code: weatherCode,
  } = weatherData || {};

  const days = [];
  const hours = [];

  const obj = getHourlyWeatherObjectArr(temperature, time, weatherCode);

  for (const day in obj) {
    days.push(obj[day].dayLabel);
    hours.push(obj[day].hours);
  }

  return (
    <aside className="flex h-full max-h-[667.118px] flex-col overflow-hidden rounded-[20px] bg-neutral-800 px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-neutral-0 font-sans text-xl leading-[1.2] font-semibold">
          Hourly forecast
        </h1>
        <DropdownDays days={days} />
      </div>

      <div className="mt-4 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <HourlyWeatherCard value="4 PM" temperature="20" />
          <HourlyWeatherCard value="3 PM" temperature="20" />
          <HourlyWeatherCard value="5 PM" temperature="20" />
          <HourlyWeatherCard value="6 PM" temperature="19" />
          <HourlyWeatherCard value="7 PM" temperature="18" />
          <HourlyWeatherCard value="8 PM" temperature="18" />
          <HourlyWeatherCard value="9 PM" temperature="17" />
          <HourlyWeatherCard value="10 PM" temperature="17" />
        </div>
      </div>
    </aside>
  );
}

export default ForecastHourly;
