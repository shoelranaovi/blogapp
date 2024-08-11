function Search({ search, handleSearchChange, handleSearch }) {
  const handlekeypress = () => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="w-full flex">
      <input
        type="search"
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handlekeypress}
        onClick={handleSearch}
        className="w-full bg-gray-200 mr-5 py-2 px-4 h-10 focus:outline-none focus:border"
        placeholder=" Hotel with Roof Top Near ........."
      />
      <button className="bg-blue-400 px-4 py-2 text-white">Search</button>
    </div>
  );
}

export default Search;
