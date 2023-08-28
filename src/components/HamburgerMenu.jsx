import { Link, NavLink } from "react-router-dom";

export default function HamburgerMenu({ token }) {
  return (
    <>
      <div className="lg:hidden" id="hamburger-wrapper">
        <button
          className="navbar-burger flex items-center"
          onClick={() => {
            const menu = document.querySelector("#hambuger-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="block h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>hamburger menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <nav
        className="flex flex-col absolute hidden top-0 right-0 w-1/2 md:w-1/3  py-6 px-6 bg-white rounded-lg"
        id="hambuger-menu"
        style={{
          backgroundColor: "#121829b5",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className=" flex items-center mb-8">
          <button
            className=""
            id="navbar-close"
            onClick={() => {
              const menu = document.querySelector("#hambuger-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-1">
              {" "}
              <NavLink
                to="/dashboard"
                className="block p-4 links-regular hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="mb-1">
              {" "}
              <NavLink
                to="/movies"
                className="block p-4 links-regular hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                Movies
              </NavLink>
            </li>
            <li className="mb-1">
              {" "}
              <NavLink
                to="/tvshows"
                className="block p-4 links-regular hover:bg-blue-50 hover:text-blue-600 rounded"
              >
                TV Shows
              </NavLink>
            </li>
            {token ? (
              <li className="mb-1">
                <button
                  onClick={() => {
                    localStorage.clear();
                    location.reload();
                  }}
                  className="block p-4 w-full hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  <Link
                    to="/"
                    className="flex flex-row gap-1 items-center content-center links-regular "
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
              </li>
            ) : (
              <li className="mb-1 block p-4 hover:bg-blue-50 hover:text-blue-600 rounded">
                <Link
                  to="/"
                  className="flex gap-1 items-center content-center links-regular "
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
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
