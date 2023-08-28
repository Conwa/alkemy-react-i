export default function SearchInput({ query, handleSearch }) {
  return (
    <div className="relative lg:w-1/3  mt-2 mb-4 caption">
      <form>
        <input
          type="search"
          placeholder="Search Movies or TV Shows"
          value={query}
          className="w-full h-auto border pl-10 py-4 hover:outline-none 
    focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded-lg bg-transparent"
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute py-2 px-3 -ml-1 top-1.5 w-12 h-auto"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#8E95A9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#8E95A9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </form>
    </div>
  );
}
