function HourlyWeatherCard({ value, temperature }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg border border-neutral-600 bg-neutral-700 py-2.5 pr-4 pl-3">
      <div className="flex items-center">
        <img className="size-10" src="/images/icon-overcast.webp" alt="icon" />
        <span className="text-neutral-0 font-sans text-xl leading-[1.2] font-medium">
          {value}
        </span>
      </div>

      <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
        {temperature}°
      </span>
    </div>
  );
}

export default HourlyWeatherCard;
