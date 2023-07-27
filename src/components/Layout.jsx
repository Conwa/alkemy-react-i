import { Outlet } from "react-router-dom";
import backgroundImg from "../assets/Background.png";

export default function Layout() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "100%",
        backgroundColor: "#20283e",
        backgroundPosition: "50%",
        backgroundRepeat: "repeat-y",
      }}
      className=""
      id="background"
    >
      <Outlet />
    </div>
  );
}
