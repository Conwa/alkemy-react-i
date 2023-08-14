import backgroundImg from "../assets/Background.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import notFoundGuy from "../assets/not-found-guy.svg";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "100%",
        backgroundColor: "#20283e",
        backgroundPosition: "50%",
        backgroundRepeat: "repeat-y",
      }}
      className=" min-h-screen flex flex-col"
      id="not-found-layout"
    >
      <Navbar />
      <div
        className="grow w-ful flex flex-col items-center py-2"
        id="not-found-main-container"
      >
        <img src={notFoundGuy} alt="not-found-img" className=" h-80 w-96" />
        <div className=" pt-4 flex flex-col gap-6 text-center items-center">
          <h1 className="headings-h2 text-white">Lost your way?</h1>
          <p className="body-regular">
            Oops! This is awkward. You are looking for something that doesn't{" "}
            <br />
            actually exist.
          </p>
          <button
            className=" py-3 px-2 w-fit text-white buttons-default body-regular"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
