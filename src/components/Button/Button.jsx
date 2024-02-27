import { Link } from "react-router-dom";
import "./Button.css";
import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.div
      className="absolute bottom-[20vh] right-[20vw]"
      initial={{ opacity: 0}}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 7,
        duration: 2,
        ease: [0.39, 0.32, 0.53, 0.97],
      }}
    >
      <Link to="/destination">
        <button
          id="btn"
          className="home-button block font-bellefair text-4xl text-rich-black"
        >
          EXPLORE
        </button>
      </Link>
    </motion.div>
  );
}
