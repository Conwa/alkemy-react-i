import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

import moviesService from "../services/movies";

export default function Home() {
  const [moviesList, setMoviesList] = useState();
  useEffect(() => {
    moviesService.getList().then((movies) => setMoviesList([...movies]));
  }, []);

  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <div className="flex flex-row h-fit w-full">
        {moviesList ? (
          moviesList.map((movie, index) => {
            return <h1 key={index}>{movie.title}</h1>;
          })
        ) : (
          <h1>sds</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}
