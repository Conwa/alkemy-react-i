import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function LoginLayout() {
  const token = localStorage.getItem("loggedUserToken");
  console.log(token);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
