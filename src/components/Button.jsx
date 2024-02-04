import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div className="absolute transition left-[65%] top-[54%] group">
      <div className="fixed w-72 h-72 rounded-full bg-white bg-opacity-[.1] group-hover:scale-150 ease-in-out duration-500"></div>
      <button className="fixed font-bellefair text-4xl bg-white text-black w-72 h-72 rounded-full cursor-pointer
      group-hover:scale-95 duration-300">
        <Link to="/destination">EXPLORE</Link>
      </button>
    </div>
  );
}
