function Location({ location, date }) {
  // if (!location && !date)
  //   return (
  //     <div className="flex flex-col items-center gap-3">
  //       <h1 className="text-neutral-0 font-sans text-[28px] leading-[1.2] font-bold">
  //         LOADING
  //       </h1>
  //       <p className="text-neutral-0 font-sans text-[18px] leading-[1.2] font-medium opacity-80">
  //         LOADING
  //       </p>
  //     </div>
  //   );

  return (
    <div className="flex flex-col items-center gap-3 md:items-start">
      <h1 className="text-neutral-0 font-sans text-[28px] leading-[1.2] font-bold">
        {location === "" ? "" : location}
      </h1>
      <p className="text-neutral-0 font-sans text-[18px] leading-[1.2] font-medium opacity-80">
        {date === "" ? "" : date}
      </p>
    </div>
  );
}

export default Location;
