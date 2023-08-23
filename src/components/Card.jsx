import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SkeletonComponent from "./CardSkeleton";

import useMovieStore from "../store/movieStore";

/* eslint-disable react/prop-types */
export default function Card({ element, mediaType }) {
  const url = useLocation();
  const pathname = url.pathname;

  const elementID = element.id.toString();

  const isMoviePresent = useMovieStore((state) =>
    state.isMoviePresent(elementID)
  );

  const toggleMovie = () => {
    if (isMoviePresent) {
      useMovieStore.getState().removeMovieId(elementID);
    } else {
      useMovieStore.getState().addMovieId(elementID);
    }
  };

  const movies = useMovieStore((state) => state.movieIds);
  console.log(movies);

  let mediaPath = "";

  if (mediaType === "movie") {
    mediaPath = "movies";
  }
  if (mediaType === "tv") {
    mediaPath = "tvshows";
  }

  return (
    <div className=" h-96  w-56 rounded-xl flex flex-col cursor-default bg-gray-900 bg-opacity-80">
      <div className="w-auto h-5/6 relative card-hover-effect overflow-hidden">
        <Link to={`${mediaPath || pathname}/${element.id}`}>
          <img
            className="h-full w-full object-scale-contain rounded-xl p-2 "
            src={
              `https://image.tmdb.org/t/p/w500/${element.poster_path}` || (
                <SkeletonComponent duration={3} />
              )
            }
            alt="poster-path"
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
                {element.vote_average.toFixed(1)}
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex h-1/6 w-full p-2 px-3 links-regular text-gray-50 justify-between items-center gap-2">
        <h1 className="grow">{element.title ? element.title : element.name}</h1>
        <div id="favourite button w-1/3">
          {" "}
          <button className="star-button" onClick={toggleMovie}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill={isMoviePresent ? "#FFD700" : "none"}
            >
              <path
                d="M12.7299 2.51001L14.4899 6.03001C14.7299 6.52002 15.3699 6.99001 15.9099 7.08001L19.0999 7.61001C21.1399 7.95001 21.6199 9.43001 20.1499 10.89L17.6699 13.37C17.2499 13.79 17.0199 14.6 17.1499 15.18L17.8599 18.25C18.4199 20.68 17.1299 21.62 14.9799 20.35L11.9899 18.58C11.4499 18.26 10.5599 18.26 10.0099 18.58L7.01991 20.35C4.87991 21.62 3.57991 20.67 4.13991 18.25L4.84991 15.18C4.97991 14.6 4.74991 13.79 4.32991 13.37L1.84991 10.89C0.389909 9.43001 0.859909 7.95001 2.89991 7.61001L6.08991 7.08001C6.61991 6.99001 7.25991 6.52002 7.49991 6.03001L9.25991 2.51001C10.2199 0.600015 11.7799 0.600015 12.7299 2.51001Z"
                stroke={isMoviePresent ? "#FFD700" : "#8E95A9"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="star-svg"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
