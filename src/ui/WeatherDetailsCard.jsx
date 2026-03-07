function WeatherDetailsCard({ label, value, unit }) {
  

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border border-solid border-neutral-600 bg-neutral-800 p-5">
      <span className="font-sant text-[15px] leading-[1.2] font-medium text-neutral-200 sm:text-[18px]">
        {label}
      </span>
      <span className="text-neutral-0 font-sans text-[26px] font-light sm:text-[32px]">
        {value} {value === "–" ? "" : unit}
      </span>
    </div>
  );
}

export default WeatherDetailsCard;
