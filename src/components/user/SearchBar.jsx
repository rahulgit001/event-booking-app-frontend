const SearchBar = () => {
    return (
      <div className="bg-white rounded flex max-w-xl mx-auto p-2">
        <input
          className="flex-1 px-3 outline-none text-black"
          placeholder="Search DJ, Catering..."
        />
        <button className="bg-red-500 text-white px-4 rounded">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  