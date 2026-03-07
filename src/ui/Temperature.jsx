function Temperature({ icon, temperature }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <img className="size-30" src={icon} alt="icon" />
      <span className="text-neutral-0 font-sans text-[60px] leading-none font-semibold tracking-tight sm:text-[86px] md:text-8xl">
        {temperature} &deg;
      </span>
    </div>
  );
}

export default Temperature;
