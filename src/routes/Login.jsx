import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function Login() {
  const token = localStorage.getItem("loggedUserToken");

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <LoginForm />

      <Footer />
    </div>
  );
}
