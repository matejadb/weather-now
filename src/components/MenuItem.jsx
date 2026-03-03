function MenuItem({ label }) {
  return (
    <a
      href="#"
      className="text-neutral-0 block rounded-lg border-none px-2 py-2.5 font-sans text-[16px] leading-[1.2] font-medium transition-all duration-300 hover:bg-neutral-700"
    >
      {label}
    </a>
  );
}

export default MenuItem;
