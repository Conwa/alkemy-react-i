import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";

import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SeachInput";

import APIfetch from "../services/APIfetch";
import useMovieStore from "../store/movieStore";

export default function HomeLayout() {
  const url = useLocation();
  const [query, setQuery] = useState("");
  const [resultList, setList] = useState([]);

  const desktopLayout = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const setMovies = useMovieStore.getState().setMovies;

  useEffect(() => {
    setList("");
    setQuery("");
    setMovies();
  }, [setMovies]);

  useEffect(() => {
    const fetchQuery = setTimeout(() => {
      if (!query || query === "") {
        APIfetch.getAll(
          `https://api.themoviedb.org/3/trending/all/week?language=en-US`
        ).then((elems) => {
          elems = elems.sort((a, b) => {
            return b.popularity - a.popularity;
          });
          setList(elems);
        });
      } else {
        APIfetch.getAll(
          `https://api.themoviedb.org/3/search/multi?query=${query.trim()}&include_adult=false&language=en-US&page=1`
        ).then((elems) => {
          elems = elems.sort((a, b) => {
            return b.popularity - a.popularity;
          });
          setList(elems);
        });
      }
    }, Math.random() * 1800);

    return () => clearTimeout(fetchQuery);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col" id="home-layout">
      <Navbar />

      {url.pathname === "/" ? (
        <div className="flex flex-col h-fit w-full px-4 md:px-10 lg:px-52 py-4 pb-3 pt-8">
          {/*H1, P, and SEARCH INPUT*/}

          <div className="flex flex-col gap-4">
            {desktopLayout ? (
              <>
                {" "}
                <h1 className="headings-h1 text-gray-50">Stream Wizard</h1>
                <p className="body-regular">
                  Feel free to lookout for Movies and TV Shows suggestions!
                </p>
              </>
            ) : (
              <>
                {" "}
                <h1 className="headings-h2 text-gray-50">Stream Wizard</h1>
                <p className=" hidden md:block  body-small">
                  Feel free to lookout for Movies and TV Shows suggestions!
                </p>
              </>
            )}

            {/*INPUT FOR SEARCH MOVIES*/}

            <SearchInput query={query} handleSearch={handleSearch} />
          </div>

          <div className="flex flex-row  gap-3 flex-wrap justify-evenly py-4">
            {resultList.length > 0 ? (
              resultList.map((element, index) => {
                return (
                  <Card
                    key={index}
                    element={element}
                    mediaType={element.media_type}
                  />
                );
              })
            ) : (
              <CardSkeleton />
            )}
          </div>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
