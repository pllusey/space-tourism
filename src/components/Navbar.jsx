import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center top-16 relative">
      <a
        href="#"
        className="scale-[1.1] transition hover:scale-[1.3] hover:rotate-180 ease duration-500 relative left-24"
      >
        <img src="/src/assets/shared/logo.svg" alt="" />
      </a>
      <span className="relative left-24 w-4/12 h-[0.0625rem] bg-white bg-opacity-15 z-10"></span>
      <div className="w-7/12 h-[15vh] relative backdrop-blur-lg bg-white bg-opacity-[0.04] backdrop">
        <ul className="flex h-full items-center pr-48 pl-36">
          <li className="w-1/4 h-full flex justify-center items-center">
            <NavLink
              to="/"
              className="h-full transition transform duration-700 w-fit flex justify-center items-center relative font-barlow text-white text-xl tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:duration-700
              focus:before:opacity-100 focus:before:duration-700
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-sm after:scale-y-0 after:duration-700 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
             <span className="font-bold px-1">00</span>HOME
            </NavLink>
          </li>
          <li className="w-1/4 h-full flex justify-center items-center">
            <NavLink
              to="/destination"
              className="h-full transition transform duration-700 w-fit flex justify-center items-center relative font-barlow text-white text-xl tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:duration-700
              focus:before:opacity-100 focus:before:duration-700
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-sm after:scale-y-0 after:duration-700 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
             <span className="font-bold px-1">01</span>DESTINATION
            </NavLink>
          </li>
          <li className="w-1/4 h-full flex justify-center items-center">
            <NavLink
              to="/crew"
              className="h-full transition transform duration-700 w-fit flex justify-center items-center relative font-barlow text-white text-xl tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:duration-700
              focus:before:opacity-100 focus:before:duration-700
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-sm after:scale-y-0 after:duration-700 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
            >
             <span className="font-bold px-1">02</span>CREW
            </NavLink>
          </li>
          <li className="w-1/4 h-full flex justify-center items-center">
            <NavLink
              to="/technology"
              className="h-full transition transform duration-700 w-fit flex justify-center items-center relative font-barlow text-white text-xl tracking-widest
              before:bg-white before:absolute before:w-full before:h-1 before:bottom-0 before:opacity-0 before:duration-700
              focus:before:opacity-100 focus:before:duration-700
              after:absolute after:bg-white after:bottom-0 after:w-full after:h-1 after:rounded-t-sm after:scale-y-0 after:duration-700 hover:after:scale-y-100 hover:after:opacity-75 hover:after:ease-out"
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
