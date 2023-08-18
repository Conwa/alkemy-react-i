import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import { Outlet, useLocation } from "react-router-dom";

export default function HomeLayout() {
  const url = useLocation();

  return (
    <div className="min-h-screen flex flex-col" id="home-layout">
      <Navbar />

      {url.pathname === "/" ? (
        <h1>
          ENDPOINT A UTILIZAR: <br />
          https://api.themoviedb.org/3/search/multi?query=law&include_adult=false&language=en-US&page=1
        </h1>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
