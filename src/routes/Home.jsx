import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
