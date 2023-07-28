import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="h-screen max-h-screen flex flex-col" id="login-form">
      <Navbar />
      <h1>DASHBOARD ROUTE</h1>
      <Footer />
    </div>
  );
}
