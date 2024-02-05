import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute flex justify-between items-center w-screen top-[5vh] h-40">
      <Link
        to="/"
        className="scale-[1.1] transition hover:scale-[1.3] hover:rotate-180 ease duration-500 relative ml-[5vw]"
      >
        <img src="/assets/shared/logo.svg" alt="" />
      </Link>
      <span className="relative left-[4vw] w-[40vw] h-[0.0625rem] bg-white bg-opacity-15 z-10"></span>
      <div className="w-7/12 h-[10vh] relative backdrop-blur-lg bg-white bg-opacity-[0.04] backdrop">
        <ul className="h-full pr-48 pl-36 flex justify-between">
          <li className="h-full">
            <NavLink
              to="/"
              className="h-full transition transform duration-500 flex justify-around items-center w-fit relative font-barlow  font-light tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:rounded-t-lg before:duration-500
              focus:before:opacity-100 focus:before:duration-500
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-lg after:scale-y-0 after:duration-500 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
              <span className="font-bold px-1">00</span>HOME
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="/destination"
              className="h-full transition transform duration-500 w-fit flex justify-center items-center relative font-barlow  font-light tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:rounded-t-lg before:duration-500
              focus:before:opacity-100 focus:before:duration-500
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-lg after:scale-y-0 after:duration-500 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
              <span className="font-bold px-1">01</span>DESTINATION
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="/crew"
              className="h-full transition transform duration-500 w-fit flex justify-center items-center relative font-barlow  font-light tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:rounded-t-lg before:duration-500
              focus:before:opacity-100 focus:before:duration-500
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-lg after:scale-y-0 after:duration-500 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
              <span className="font-bold px-1">02</span>CREW
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="/technology"
              className="h-full transition transform duration-500 w-fit flex justify-center items-center relative font-barlow  font-light tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:rounded-t-lg before:duration-500
              focus:before:opacity-100 focus:before:duration-500
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-lg after:scale-y-0 after:duration-500 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
              <span className="font-bold px-1">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
