import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <nav className="h-0">
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
