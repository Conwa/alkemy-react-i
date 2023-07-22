import backgroundImg from "../assets/Background.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "100%",
        backgroundColor: "#20283e",
        backgroundPosition: "50%",
        backgroundRepeat: "repeat-y",
      }}
      className="w-screen min-h-screen"
      id="background"
    >
      <Navbar />
      <Footer />
    </div>
  );
}
