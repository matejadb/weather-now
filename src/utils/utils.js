// import { addDays, format } from "date-fns/fp";

export function formatTemperature(temp) {
  return Math.floor(temp);
}

export function formatDate(date) {
  // const splitDate = date?.split("T")[0].split("-");
  // console.log(splitDate);
  // const formattedDate = format(
  //   new Date(splitDate?.[0], splitDate?.[1], splitDate?.[2]),
  //   "EEEE, MMM d, y",
  // );

  const formattedDate = date;

  return formattedDate;
}

export function getWeatherIcon() {}
