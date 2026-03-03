function DailyForecastCard({ label, icon, min, max }) {
  return (
    <div className="text-neutral-0 flex flex-col items-center gap-4 rounded-xl border border-neutral-600 bg-neutral-800 px-2.5 py-4">
      <span className="font-sans text-[18px] leading-[1.2] font-medium">
        {label}
      </span>
      <img className="size-15" src={icon} alt="icon" />

      <div className="flex w-full items-center justify-between">
        <span className="font-sans text-[16px] leading-[1.2] font-medium">
          {max}°
        </span>
        <span className="font-sans text-[16px] leading-[1.2] text-neutral-200">
          {min}°
        </span>
      </div>
    </div>
  );
}

export default DailyForecastCard;
