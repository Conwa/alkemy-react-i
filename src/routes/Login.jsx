import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <LoginForm />

      <Footer />
    </div>
  );
}
