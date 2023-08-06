import { useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import APIfetch from "../services/APIfetch";

export default function Test() {
  const [element, setElement] = useState("");
  const params = useParams();
  const url = useLocation();
  let elementID = "";
  let urlOption = "";

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

  console.log(element);

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
      <div className="h-fit w-full flex flex-row mt-16 gap-8 ">
        <div
          className="w-full rounded-xl"
          style={{
            height: "29rem",
            background: `url(https://image.tmdb.org/t/p/w500/${element.poster_path}) 
            center center/cover no-repeat`,
          }}
        ></div>

        <div className="h-10 w-full bg-red-950"></div>
      </div>
    </div>
  );
}
