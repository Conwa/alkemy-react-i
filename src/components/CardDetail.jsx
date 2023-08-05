import { useLocation, useParams } from "react-router-dom";

import { useEffect } from "react";
import APIfetch from "../services/APIfetch";

export default function Test() {
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
      console.log(res);
    });
  }, [elementID, urlOption]);

  return <h1>CARD DETAIL ROUTE ID {elementID} </h1>;
}
