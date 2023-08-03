import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col" id="home-layout">
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
}
