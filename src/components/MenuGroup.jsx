function MenuGroup({ children, groupLabel }) {
  return (
    <div className="mb-2 flex flex-col gap-2" role="none">
      <span className="px-2 font-sans text-sm leading-[1.2] font-medium text-neutral-300">
        {groupLabel}
      </span>
      <div>{children}</div>
    </div>
  );
}

export default MenuGroup;
