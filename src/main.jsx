import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import UserAuthetication from "./components/UserAuthetication.jsx";
import "./main.css";
import Dashboard from "./routes/Dashboard.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Movies from "./routes/Movies.jsx";
import TVShowsLayout from "./routes/TVShows.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
            path: "/movies",
            element: (
              <UserAuthetication>
                <Movies />
              </UserAuthetication>
            ),
          },
          {
            path: "/dashboard",
            element: (
              <UserAuthetication>
                <Dashboard />
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
