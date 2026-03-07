// import searchIcon from "../../public/images/icon-search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchQuery } from "../slices/weatherDataSlice";

function Search() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateSearchQuery(input));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 md:flex-row md:gap-4 lg:mx-auto lg:w-165"
    >
      <div className="relative flex-1">
        {/* <img className="absolute inline-block" src={searchIcon} /> */}
        <input
          id="searchCity"
          className="inline-block w-full rounded-xl bg-neutral-800 px-6 py-4 text-left font-sans text-xl leading-[1.2] font-medium text-neutral-200 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-700 focus:ring-3 focus:ring-neutral-200 focus:ring-offset-3 focus:ring-offset-neutral-900 focus:outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a place..."
        />
      </div>
      <button className="text-neutral-0 rounded-xl bg-blue-500 px-6 py-4 font-sans text-xl leading-[1.2] font-medium transition-all duration-300 hover:cursor-pointer hover:bg-blue-700 focus:ring-3 focus:ring-blue-500 focus:ring-offset-3 focus:ring-offset-neutral-900 focus:outline-none">
        Search
      </button>
    </form>
  );
}

export default Search;
