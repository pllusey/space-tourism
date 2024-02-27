import { motion } from "framer-motion";

export default function Inner({ children }) {
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.73, 0.36, 0.41, 0.87],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 3,
        ease: [0.73, 0.36, 0.41, 0.87],
      },
    },
  };

  const scaleY = {
    initial: {
      scaleY: 0,
      transform: {
        
      }
    },
    enter: {
      scaleY: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      scaleY: 0,
      duration: 5,
    },
  };

  return (
    <motion.div {...animation(opacity)} className="page">
      <motion.div {...animation(scaleY)}>{children}</motion.div>
    </motion.div>
  );
}
