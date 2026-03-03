function Temperature({ temperature }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <img className="size-30" src="/images/icon-sunny.webp" alt="icon" />
      <span className="text-neutral-0 font-sans text-[86px] leading-none font-semibold tracking-tight sm:text-8xl">
        {temperature} &deg;
      </span>
    </div>
  );
}

export default Temperature;
