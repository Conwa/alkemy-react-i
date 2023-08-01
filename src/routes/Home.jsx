import Card from "../components/Card";
import Footer from "../components/Footer";
import ListWrapper from "../components/ListWrapper";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

import moviesService from "../services/movies";

export default function Home() {
  const [moviesList, setMoviesList] = useState();
  const [listVariant, setListVariant] = useState("trending");
  useEffect(() => {
    moviesService
      .getList("https://api.themoviedb.org/3/movie/popular")
      .then((movies) => {
        setMoviesList([...movies]);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="home-layout">
      <Navbar />
      <div className="flex flex-col h-fit w-full px-52 pb-3 pt-8">
        <h1 className="headings-h1 text-gray-50">Movies</h1>
        <p className="body-small py-4">
          {" "}
          A list of the current trending, top rated and upcoming movies for you,
          the user
          <br />
          feel free to click on any of the movies to get it´s details
          <br />
          Have fun!
        </p>
        <ListWrapper setListVariant={setListVariant} />
        <h1>{listVariant}</h1>

        <div className="flex flex-row  gap-3 flex-wrap justify-evenly">
          {moviesList ? (
            moviesList.map((movie, index) => {
              return <Card key={index} movie={movie} />;
            })
          ) : (
            <h1>sds</h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
