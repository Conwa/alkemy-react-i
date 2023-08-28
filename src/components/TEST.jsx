import { Link, NavLink } from "react-router-dom";

import BrandLogo from "../assets/brand-logo.svg";

export default function Testersd() {
  const token = localStorage.getItem("loggedUserToken");
  return (
    <nav
      className="flex justify-between relative top-0 left-0 w-full items-center px-6  lg:px-52 py-4"
      style={{
        backgroundColor: "#121829b5",
        backdropFilter: "blur(8px)",
      }}
    >
      <Link to="/">
        <div className="logo">
          <img src={BrandLogo} alt="brand-logo"></img>
        </div>
      </Link>
      <div id="nav-wrapper" className=" flex gap-8">
        <ul className="flex flex-row gap-8 items-center">
          <li className="">
            {" "}
            <NavLink
              to="/dashboard"
              className="flex items-center content-center links-regular"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/movies"
              className="flex items-center content-center links-regular active:text-white"
            >
              Movies
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/tvshows"
              className="flex items-center content-center links-regular active:text-white"
            >
              TV Shows
            </NavLink>
          </li>
        </ul>

        {token ? (
          <button
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            <Link
              to="/"
              className="flex flex-row gap-1 items-center content-center links-regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.4404 14.62L20.0004 12.06L17.4404 9.5"
                  stroke="#767E94"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75977 12.0601H19.9298"
                  stroke="#767E94"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
                  stroke="#767E94"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1>Logout</h1>
            </Link>
          </button>
        ) : (
          <Link
            to="/"
            className="flex flex-row gap-1 items-center content-center links-regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.4404 14.62L20.0004 12.06L17.4404 9.5"
                stroke="#767E94"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75977 12.0601H19.9298"
                stroke="#767E94"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
                stroke="#767E94"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1>Login</h1>
          </Link>
        )}
      </div>
    </nav>
  );
}
