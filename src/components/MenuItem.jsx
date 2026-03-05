function MenuItem({
  label,
  onSetSelectedDay = null,
  onSetIsOpen,
  activeDay = null,
  unit = null,
  onSetUnit = null,
}) {
  function handleSelectDay(e) {
    e.preventDefault();
    onSetSelectedDay(label);
    onSetIsOpen(false);
  }

  function handleSelectUnit(e) {
    e.preventDefault();
    onSetUnit(label);
    // console.log(unit);
  }

  if (!onSetSelectedDay)
    return (
      <a
        onClick={handleSelectUnit}
        href="#"
        className={`${unit === label ? "bg-neutral-700" : ""} text-neutral-0 block rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700 disabled:cursor-not-allowed`}
      >
        {label}
      </a>
    );

  return (
    <a
      onClick={handleSelectDay}
      href="#"
      className={`text-neutral-0 block ${
        activeDay === label ? "bg-neutral-700" : ""
      } rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700`}
    >
      {label}
    </a>
  );
}

export default MenuItem;
