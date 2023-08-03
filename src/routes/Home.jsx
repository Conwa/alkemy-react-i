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
          ACA VA LO DEL HOME QUE SE REEMPLAZA CON LO DEL OUTLET EN OTRA RUTA
        </h1>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
}
