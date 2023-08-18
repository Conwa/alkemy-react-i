import { useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import APIfetch from "../services/APIfetch";

export default function CardDetail() {
  const [element, setElement] = useState("");
  const params = useParams();
  const url = useLocation();
  let elementID = "";
  let urlOption = "";

  console.log(element);

  function useRegex(input) {
    let regex = /\/movies\//i;
    return regex.test(input);
  }

  if (useRegex(url.pathname)) {
    elementID = params.movieID;
    urlOption = "movie";
  }
  if (!useRegex(url.pathname)) {
    urlOption = "tv";
    elementID = params.tvshowID;
  }

  useEffect(() => {
    APIfetch.getByID(
      `https://api.themoviedb.org/3/${urlOption}/${elementID}`
    ).then((res) => {
      setElement(res);
    });
  }, [elementID, urlOption]);

  function renderNamesWithCommas(arrayOfObjects) {
    const names = arrayOfObjects.map((obj) => obj.name);
    return names.join(", ");
  }

  const genresWithComma = element.genres
    ? renderNamesWithCommas(element.genres)
    : null;

  return (
    <div className="flex flex-col h-fit w-full px-52 pb-3 pt-8">
      {/*TOP SECTION WITH IMG AND ABSOLUTE ELEMENT TITLE */}
      <div
        className="relative w-full h-80 xl:h-96 rounded-xl"
        style={{
          background: `linear-gradient(180deg, rgba(54, 44, 146, 0.40) 0%, rgba(18, 98, 151, 0.40) 100%), 
        url(https://image.tmdb.org/t/p/w500/${element.backdrop_path}) center center/cover no-repeat`,
        }}
      >
        <div
          className="absolute rounded-lg w-5/12 -bottom-8 left-10 p-7 bg-slate-800 bg-opacity-60 
          backdrop-blur-xl"
        >
          <div className="flex items-center">
            <h1 className="headings-h4 text-white">
              {element.title ? element.title : element.name}
            </h1>
          </div>
        </div>
      </div>
      {/*MAIN DIV */}
      <div
        className=" w-full flex flex-row mt-16 gap-8"
        style={{ height: "42rem" }}
      >
        {/*ELEMENT IMAGE*/}
        <div
          className="h-full w-1/2 rounded-xl lg:mr-24"
          style={{
            background: `url(https://image.tmdb.org/t/p/w500/${element.poster_path}) 
            center center/cover no-repeat`,
          }}
        ></div>
        {/*ELEMENT DETAILS*/}
        <div className=" h-full w-1/2 flex flex-col justify-between gap-6">
          <div className="w-full">
            {" "}
            <h1 className="headings-h4 text-white">
              {element.tagline
                ? element.tagline
                : element.title
                ? element.title
                : element.name}
            </h1>
          </div>

          <div
            className="w-full body-regular "
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "6",
              whiteSpace: "pre-wrap",
            }}
          >
            {element.overview}
          </div>

          {/*STAR RATING */}
          <div id="star-rating" className="w-fit">
            <div className="flex gap-1 items-center bg-black bg-opacity-60 rounded-lg px-2 py-1">
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
                {element.vote_average}
              </h1>
            </div>
          </div>
          {/*TYPE AND STATUS*/}
          {urlOption === "movie" ? (
            <div className="w-full flex flex-col gap-1">
              <h1 className="body-regular">Type</h1>
              <h1 className="body-large text-gray-100">Movie</h1>
            </div>
          ) : (
            <div className="w-full flex ">
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">Type</h1>
                <h1 className="body-large text-gray-100">TV Show</h1>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">Status</h1>
                <h1 className="body-large text-gray-100">{element.status}</h1>
              </div>
            </div>
          )}
          {/*DATES */}
          {urlOption === "movie" ? (
            <div className="w-full flex flex-col gap-1">
              <h1 className="body-regular">Release Date</h1>
              <h1 className="body-large text-gray-100">
                {element.release_date}
              </h1>
            </div>
          ) : (
            <div className="w-full flex ">
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">First Air date</h1>
                <h1 className="body-large text-gray-100">
                  {element.first_air_date}
                </h1>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">Last Air date</h1>
                <h1 className="body-large text-gray-100">
                  {element.last_air_date}
                </h1>
              </div>
            </div>
          )}

          {/*OTHER PARAMETERS*/}
          {urlOption === "movie" ? (
            <div className="w-full flex flex-col gap-1">
              <h1 className="body-regular">Run time</h1>
              <h1 className="body-large text-gray-100">
                {element.runtime} min
              </h1>
            </div>
          ) : (
            <div className="w-full flex ">
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">Number of Seasons</h1>
                <h1 className="body-large text-gray-100">
                  {element.number_of_seasons}
                </h1>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="body-regular">Number of Episodes</h1>
                <h1 className="body-large text-gray-100">
                  {element.number_of_episodes}
                </h1>
              </div>
            </div>
          )}

          {/*GENRE LIST*/}
          <div className="w-full flex flex-col gap-1">
            <h1 className="body-regular">Genres</h1>
            <h1 className="body-large text-gray-100">{genresWithComma}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
