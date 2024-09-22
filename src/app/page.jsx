"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className=" h-full gap-5 flex mx-auto items-center justify-center flex-col md:flex-row">
        {/* Image  */}

        <div className="w-full md:w-1/2 mx-auto text-center gap-3 items-center ">
          <img
            src="https://i.ibb.co.com/MS090bn/photo-2024-07-04-10-03-17-removebg-preview.png"
            className="max-w-sm w-40 md:w-96 items-center mx-auto justify-center rounded-lg shadow-xl mt-2 md:mt-5 "
          />

          {/*  */}
          <div className=" sm:hidden flex items-center mt-3 gap-8 mx-auto justify-center  ">
            <Link href="https://github.com/TANVIR0222">
              <img
                src="https://i.ibb.co.com/7j1HZQw/github.png"
                className="w-4"
              />
            </Link>
            {/* linkdi */}
            <Link href="https://www.linkedin.com/in/tanvir-islam-3b7883284/">
              <img
                src="https://i.ibb.co.com/s31HB5p/linkedin.png"
                className="w-4"
              />
            </Link>

            <Link href="https://leetcode.com/u/Tanvir02/">
              <img
                src="https://i.ibb.co.com/1rTg9GT/Leet-Code-Logo-1.png"
                className="w-6"
              />
            </Link>
          </div>
        </div>
        {/* text Container */}
        <div className="w-full md:w-1/2 items-center">
          <h1 className="text-3xl text-center md:text-left  md:text-5xl font-bold sm:mt-1 text-black ">
            Tanvir Islam
          </h1>
          <h1 className=" my-3 text-2xl text-center md:text-3xl md:text-left text-black">
            A MERN Stack Developer
          </h1>
          <p className="text-sm md:text-sm mr-2 text-gray-600 ">
            My strength is building responsive and user-friendly interfaces
            using React.js & Next.js along with crafting server-side
            applications with Node.js. I always explore new technologies to
            enhance my development skills because I m very passionate about
            Software Engineering and the Web Development field. I am very
            dedicated to my work and have a mindset to make the work perfect.
            Excellence in work is my top priority
          </p>
          {/* buttons */}
          <div className="flex gap-4  mx-auto justify-center md:justify-start mt-5 w-full">
            <Link href={"/portfolio"}>
              <button className=" rounded-lg p-2 z-10  bg-black border-solid border-2 border-indigo-600  text-white ">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="rounded-lg p-2 z-10 text-black  bg-white border-solid border-2 border-indigo-600   ">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
