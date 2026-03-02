function WeatherDetailsContainer({ label, value, unit }) {
  return (
    <div className="flex w-40 grow flex-col gap-6 rounded-xl border border-solid border-neutral-600 bg-neutral-800 p-5">
      <span className="font-sant text-[18px] leading-[1.2] font-medium text-neutral-200">
        {label}
      </span>
      <span className="text-neutral-0 font-sans text-[32px] font-light">
        {value} {unit}
      </span>
    </div>
  );
}

export default WeatherDetailsContainer;
