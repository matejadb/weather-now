// import searchIcon from "../../public/images/icon-search.svg";

function Search() {
  return (
    <form className="flex flex-col gap-3 md:flex-row md:gap-4 lg:mx-auto lg:w-165">
      <div className="relative flex-1">
        {/* <img className="absolute inline-block" src={searchIcon} /> */}
        <input
          className="inline-block w-full rounded-xl bg-neutral-800 px-6 py-4 text-left font-sans text-xl leading-[1.2] font-medium text-neutral-200"
          type="text"
          placeholder="Search for a place..."
        />
      </div>
      <button className="text-neutral-0 rounded-xl bg-blue-500 px-6 py-4 font-sans text-xl leading-[1.2] font-medium">
        Search
      </button>
    </form>
  );
}

export default Search;
