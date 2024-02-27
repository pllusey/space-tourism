import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <Link to="/">
        <img src="/assets/shared/logo.svg" alt="Image of Space Tourism Logo" className="ml-[3vw] z-[5] p-4 cursor-pointer transition duration-700 hover:rotate-[360deg] hover:scale-[1.2]"/>
      </Link>
      <span className="absolute left-[10vw] h-[0.0625rem] w-[35vw] bg-white opacity-30 z-10"></span>
      <ul className="w-[58vw] h-[12.5vh] flex gap-1 justify-evenly font-barlow pl-[5vw] backdrop-blur-xl bg-white bg-opacity-[.05]">
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
