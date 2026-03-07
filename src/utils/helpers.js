import iconDrizzle from "/images/icon-drizzle.webp";
import iconFog from "/images/icon-fog.webp";
import iconOvercast from "/images/icon-overcast.webp";
import iconPartlyCloudy from "/images/icon-partly-cloudy.webp";
import iconRain from "/images/icon-rain.webp";
import iconSnow from "/images/icon-snow.webp";
import iconStorm from "/images/icon-storm.webp";
import iconSunny from "/images/icon-sunny.webp";

export function getDailyWeatherObjectArr(tempMax, tempMin, time, weatherCode) {
  const arr = [];

  for (let i = 0; i < time?.length; i++) {
    const newObj = {
      tempMax: tempMax[i],
      tempMin: tempMin[i],
      time: time[i],
      weatherCode: weatherCode[i],
    };

    arr.push(newObj);
  }

  return arr;
}

export function getHourlyWeatherObjectArr(temp, time, weatherCode) {
  if (!time) return {};

  const grouped = {};

  for (let i = 0; i < time?.length; i++) {
    const date = time[i].split("T")[0];
    const fullTime = time[i];

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push({
      time: fullTime,
      temperature: temp[i],
      weatherCode: weatherCode[i],
    });
  }

  return Object.entries(grouped).map(([date, hours]) => ({
    dayLabel: new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date(date)),
    hours,
  }));
}

export function formatTemperature(temp, unit) {
  if (!temp) return "";
  const selected = unit?.split(" ")[0].toLowerCase();

  if (selected === "fahrenheit") return Math.floor(temp * (9 / 5) + 32);

  return Math.floor(temp);
}

export function formatWindSpeed(speed, unit) {
  if (speed === null) return { value: "–", unit: "" };

  if (unit === "mph") return { value: Math.floor(speed / 1.6), unit: "mph" };

  return { value: Math.floor(speed), unit: "km/h" };
}

export function formatPrecipitation(precipitation, unit) {
  if (precipitation === null) return { value: "–", unit: "" };

  const selected = unit.split(" ")[1].split("(")[1].split(")")[0];
  if (selected === "in")
    return { value: Math.floor(precipitation / 25.4), unit: "in" };

  return { value: Math.floor(precipitation), unit: "mm" };
}

export function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatTime(time) {
  const [hours, minutes] = time.split("T")[1].split(":");

  const date = new Date();
  date.setHours(hours, minutes);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",

    hour12: true,
  });

  return formattedTime;
}

export function getWeatherIcon(code) {
  const iconMap = {
    iconSunny: [0, 1],
    iconPartlyCloudy: [2],
    iconOvercast: [3],
    iconFog: [45, 48],
    iconDrizzle: [51, 53, 55, 56, 57],
    iconRain: [61, 63, 65, 67, 80, 81, 82],
    iconSnow: [71, 73, 75, 77, 85, 86],
    iconStorm: [95, 96, 99],
  };

  const icons = {
    iconSunny,
    iconPartlyCloudy,
    iconOvercast,
    iconFog,
    iconDrizzle,
    iconRain,
    iconSnow,
    iconStorm,
  };

  for (const [key, codes] of Object.entries(iconMap)) {
    if (codes.includes(code)) {
      return icons[key];
    }
  }

  return icons.iconSunny;
}
