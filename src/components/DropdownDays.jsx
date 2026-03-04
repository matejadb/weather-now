import { useEffect, useRef, useState } from "react";
import iconArrowDown from "/images/icon-dropdown.svg";
import MenuItem from "./MenuItem";

function DropdownDays({ days, activeDay, onSetSelectedDay }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    function callback(e) {
      if (!ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", callback);

    return () => {
      document.removeEventListener("click", callback);
    };
  }, []);

  if (!days)
    return (
      <div>
        <button
          onClick={toggleDropdown}
          className="focus:ring-neutral-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-neutral-600 px-4 py-3 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-700 focus:ring-3 focus:ring-offset-5 focus:ring-offset-neutral-900 focus:outline-none"
        >
          <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
            –
          </span>
          <img src={iconArrowDown} alt="Icon of an arrow pointing down." />
        </button>
      </div>
    );

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="focus:ring-neutral-0 inline-flex items-center justify-center gap-2.5 rounded-lg bg-neutral-600 px-4 py-3 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-700 focus:ring-3 focus:ring-offset-5 focus:ring-offset-neutral-900 focus:outline-none"
        >
          <span className="text-neutral-0 font-sans text-[16px] leading-[1.2] font-medium">
            {activeDay}
          </span>
          <img src={iconArrowDown} alt="Icon of an arrow pointing down." />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-100 mt-2 flex w-53.5 origin-top-right flex-col gap-1 divide-y divide-neutral-600 rounded-xl border border-neutral-600 bg-neutral-800 px-2 py-1.5"
          role="menu"
        >
          {days.map((day) => (
            <MenuItem
              label={day.dayLabel}
              key={day.dayLabel}
              onSetSelectedDay={onSetSelectedDay}
              onSetIsOpen={setIsOpen}
              activeDay={activeDay}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownDays;
