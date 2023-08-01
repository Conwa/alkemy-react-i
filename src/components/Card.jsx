export default function Card({ movie }) {
  return (
    <div className=" h-96  w-56 rounded-xl flex flex-col cursor-default bg-gray-900 bg-opacity-80">
      <div className="w-auto h-5/6 relative card-hover-effect overflow-hidden">
        <img
          className="h-full w-full object-scale-contain rounded-xl p-2 "
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <div
          className="absolute top-4 left-4 backdrop-blur-sm px-1 py-2 rounded-lg"
          style={{ backgroundColor: "#000000a6" }}
        >
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15327 2.33999L10.3266 4.68666C10.4866 5.01333 10.9133 5.32666 11.2733 5.38666L13.3999 5.73999C14.7599 5.96666 15.0799 6.95333 14.0999 7.92666L12.4466 9.57999C12.1666 9.85999 12.0133 10.4 12.0999 10.7867L12.5733 12.8333C12.9466 14.4533 12.0866 15.08 10.6533 14.2333L8.65994 13.0533C8.29994 12.84 7.70661 12.84 7.33994 13.0533L5.34661 14.2333C3.91994 15.08 3.05327 14.4467 3.42661 12.8333L3.89994 10.7867C3.98661 10.4 3.83327 9.85999 3.55327 9.57999L1.89994 7.92666C0.926606 6.95333 1.23994 5.96666 2.59994 5.73999L4.72661 5.38666C5.07994 5.32666 5.50661 5.01333 5.66661 4.68666L6.83994 2.33999C7.47994 1.06666 8.51994 1.06666 9.15327 2.33999Z"
                stroke="#FFAD49"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className=" text-amber-400 body-regular">
              {movie.vote_average}
            </h1>
          </div>
        </div>
      </div>

      <h1 className=" h-1/6 w-full p-2 links-regular text-gray-50 flex items-center">
        {movie.title}
      </h1>
    </div>
  );
}
