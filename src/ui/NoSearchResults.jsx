function NoSearchResults({ message }) {
  if (message === "User denied Geolocation") {
    message = "Please enable location or search for your city by hand!";
  } else {
    message = "No search results!";
  }

  return (
    <div className="mx-auto h-full">
      <h1 className="text-neutral-0 text-center font-sans text-[28px] leading-[1.2] font-bold">
        {message}
      </h1>
    </div>
  );
}

export default NoSearchResults;
