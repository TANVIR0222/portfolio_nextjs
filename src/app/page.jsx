"use client";
import Image from "next/image";
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
      <div className="h-full gap-10 flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image
            className="object-contain fixed h-96 "
            src="/my_photo.png"
            alt="hero"
            fill
          />
        </div>
        {/* text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold sm:mt-14 text-black text-right ">
            Tanvir Islam
          </h1>
          <h1 className=" my-3 text-2xl md:text-3xl text-left text-black">
            A MERN Stack Developer
          </h1>
          <p className="text-sm md:text-sm py-1 my-2 text-black ">
            My strength is building responsive and user-friendly interfaces
            using React.js & Next.js along with crafting server-side
            applications with Node.js. I always explore new technologies to
            enhance my development skills because I m very passionate about
            Software Engineering and the Web Development field. I am very
            dedicated to my work and have a mindset to make the work perfect.
            Excellence in work is my top priority
          </p>
          {/* buttons */}
          <div className="flex gap-4 mt-5 w-full">
            <Link href={'/portfolio'} >
              <button class=" rounded-lg p-2 z-10  bg-black border-solid border-2 border-indigo-600  text-white ">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button class="rounded-lg p-2 z-10 text-black  bg-white border-solid border-2 border-indigo-600   ">
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
