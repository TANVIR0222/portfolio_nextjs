"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const Navbar = () => {
  // menubar animations
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      rotate: 45,
      opacity: 0,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  // list Variants
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren:0.2
      },
    },
  };
  // listitemVeriants -> menu bar
  const listitemVeriants = {
    close: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  };

  // nave link
  const [open, setOpen] = useState(false);
  const links = [
    { url: "/", titel: "Home" },
    { url: "/about", titel: "About" },
    { url: "/portfolio", titel: "Protfolio" },
    { url: "/contact", titel: "Contact" },
  ];
  return (
    <div className="h-full mx-auto items-center justify-between flex px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex text-black gap-4 w-1/3">
        {links.map((items) => (
          <Navlink links={items} key={items.titel} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <samp className="text-white mr-1 ">Tanvir</samp>
          <samp className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">
            .dev
          </samp>
        </Link>
      </div>
      {/* socal link*/}
      <div className=" hidden md:flex gap-4 w-1/3 ">
        <Link href="https://github.com/TANVIR0222">
          <Image src="/github.png" alt="alt" width={24} height={24} />
        </Link>

        
        <Link href="https://leetcode.com/u/Tanvir02/">
          <Image  src="/leetcode.png" alt="alt" width={90} height={90} />
        </Link>
        <Link href="https://www.linkedin.com/in/tanvir-islam-3b7883284/">
          <Image src="/linkedin.png" alt="alt" width={24} height={24} />
        </Link>
      </div>
      {/* menu item */}
      <div className="md:hidden ">
        {/* <MdOutlineMenu
          className="w-10 text-4xl cursor-pointer z-50 relative text-white"
          
        ></MdOutlineMenu> */}

        <button
          className="w-10 h-8 flex flex-col z-50 justify-between relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute z-40 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl "
          >
            {links.map((items) => (
              <motion.div variants={listitemVeriants} key={items.titel}>
                <Link href={items.url}>{items.titel}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
