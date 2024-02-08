import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button() {
    return (
    <div className="absolute transition left-[65vw] top-[50vh] group">
      
      <motion.button 
      id="btn" 
      className="fixed font-bellefair text-4xl bg-white text-rich-black w-[30vh] h-[30vh] rounded-full cursor-pointer"
      whileHover={{
        scale: 0.95,
        'box-shadow': ['red', '9px', '9px'],
        transition: ['300ms', 'ease'],
      }}
      whileTap={{scale: 0.9}}>
        <Link to="/destination">EXPLORE</Link>
      </motion.button>  
    </div>
  );
}
