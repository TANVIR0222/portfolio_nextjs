"use client";
import { AnimatePresence} from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wati">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-200 "
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/*  */}
        <motion.div
          className="fixed m-auto top-0 left-0 right-0 bottom-0 text-white text-8xl cursor-default w-fit h-fit z-50  "
          initial={{ opacity:1 }}
          animate={{ opacity:0 }}
          exit={{ opacity:0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed  bg-gray-300 rounded-t-[100px] bottom-0 z-30 "
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 1 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
