"use client";
import { motion } from "framer-motion";
const TeastAnimation = () => {
  const variants = {
    varient1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition:{ duration: 4 }
    },
    varient2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        variants={variants}
        animate="varient2"
        
      ></motion.div>
    </div>
  );
};

export default TeastAnimation;
