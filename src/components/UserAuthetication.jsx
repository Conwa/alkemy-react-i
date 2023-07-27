import { Navigate } from "react-router-dom";

export default function UserAuthetication({ children }) {
  const token = localStorage.getItem("loggedUserToken");
  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
