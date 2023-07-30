import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

import Card from "../components/Card";
import moviesService from "../services/movies";

export default function Home() {
  const [moviesList, setMoviesList] = useState();
  useEffect(() => {
    moviesService.getList().then((movies) => {
      // const sliced = movies.slice(0, 2);
      setMoviesList([...movies]);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="home-layout">
      <Navbar />
      <h1>sds</h1>
      <div className="flex flex-row h-fit w-full px-52 py-3 gap-3 flex-wrap justify-evenly">
        {moviesList ? (
          moviesList.map((movie, index) => {
            return <Card key={index} movie={movie} />;
          })
        ) : (
          <h1>sds</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}
