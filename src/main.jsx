import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CardDetail from "./components/CardDetail.jsx";
import Layout from "./components/Layout.jsx";
import UserAuthetication from "./components/UserAuthetication.jsx";
import "./main.css";
import Dashboard from "./routes/Dashboard.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Movies from "./routes/Movies.jsx";
import NotFound from "./routes/NotFound.jsx";
import TVShowsLayout from "./routes/TVShows.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <UserAuthetication>
            <Home />
          </UserAuthetication>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <UserAuthetication>
                <Dashboard />
              </UserAuthetication>
            ),
          },
          {
            path: "/movies",
            element: (
              <UserAuthetication>
                <Movies />
              </UserAuthetication>
            ),
          },
          {
            path: "/movies/:movieID",
            element: (
              <UserAuthetication>
                <CardDetail />
              </UserAuthetication>
            ),
          },
          {
            path: "/tvshows",
            element: (
              <UserAuthetication>
                <TVShowsLayout />
              </UserAuthetication>
            ),
          },
          {
            path: "/tvshows/:tvshowID",
            element: (
              <UserAuthetication>
                <CardDetail />
              </UserAuthetication>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
