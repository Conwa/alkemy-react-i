import { useMediaQuery } from "react-responsive";

import githubIcon from "../assets/github.png";
import LinkedInIcon from "../assets/linkedin.png";

export default function Footer() {
  const mediumLayout = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div
      className="flex justify-between md w-full items-center  px-4 md:px-10 lg:px-52 py-3"
      style={{
        backgroundColor: "#121829b5",
      }}
    >
      <div id="contact-links" className="flex flex-row gap-4">
        <a href="/" aria-current="page">
          <div className="logo">
            <img
              src={githubIcon}
              alt="github-logo"
              className="h-6 w-auto"
            ></img>
          </div>
        </a>
        <a href="/" aria-current="page">
          <div className="logo">
            <img
              src={LinkedInIcon}
              alt="linkedin-logo"
              className="h-6 w-auto"
            ></img>
          </div>
        </a>
      </div>
      {mediumLayout ? (
        <p className="links-small">&copy; Lorenzo Conrado Del Carlo, 2023</p>
      ) : (
        <p className="links-extra_small">
          &copy; Lorenzo Conrado Del Carlo, 2023
        </p>
      )}
    </div>
  );
}
