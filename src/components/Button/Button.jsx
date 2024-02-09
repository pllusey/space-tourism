import { Link } from "react-router-dom";

export default function Button() {

  return (
    <div className="absolute transition right-1/4 top-[50vh] group">
      <Link to="/destination">
        <button
          id="btn"
          className="fixed block font-bellefair text-4xl bg-white text-rich-black h-72 w-72 rounded-full cursor-pointer hover:scale-[1.1] duration-500 hover:shadow-[0_0_0_75px_rgba(255,255,255,.05)] active:scale-[.95] active:duration-[250ms]"
        >
          EXPLORE
        </button>
      </Link>
    </div>
  );
}
