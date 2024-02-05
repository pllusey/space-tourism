import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="text-white">
        <Navbar />
        <Outlet />
    </div>
  );
}
