import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <Link to="/" className="px-[5vh]">
        <img src="/assets/shared/logo.svg" alt="" />
      </Link>
      <span className="absolute left-[10vw] h-[0.0625rem] w-[35vw] bg-white opacity-30 z-[10]"></span>
      <ul className="w-[58vw] h-[10vh] flex gap-1 justify-evenly font-barlow backdrop-blur-2xl pl-[5vw]">
        <li className="flex items-center nav-link">
          <Link to="/">
            <span className="font-bold">00</span> HOME
          </Link>
        </li>
        <li className="flex items-center nav-link">
          <Link to="/destination">
            <span className="font-bold">01</span> DESTINATION
          </Link>
        </li>
        <li className="flex items-center nav-link">
          <Link to="/crew">
            <span className="font-bold">02</span> CREW
          </Link>
        </li>
        <li className="flex items-center nav-link">
          <Link to="/technology">
            <span className="font-bold">03</span> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
