const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-[#5A6355] opacity-40 group-focus-within:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search in this category..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Live update!
        className="w-full pl-14 pr-6 py-4 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] shadow-sm focus:bg-white focus:ring-4 focus:ring-green-900/5 outline-none transition-all duration-300 text-[#2D332D]"
      />
    </div>
  );
};

export default SearchBar;