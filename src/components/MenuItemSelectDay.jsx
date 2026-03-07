function MenuItemSelectDay({
  label,
  activeDay,
  onSetSelectedDay,
  onSetIsOpen,
}) {
  function handleSelectDay(e) {
    e.preventDefault();
    onSetSelectedDay(label);
    onSetIsOpen(false);
  }

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

export default MenuItemSelectDay;
