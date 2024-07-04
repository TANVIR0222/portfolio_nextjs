"use client";
import Brain from "@/components/braim";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInview = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInview = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      {/* Container */}
      <div
        className="text-black h-full overflow-scroll lg:flex"
        ref={containerRef}
      >
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 lg:pr-0 xl:1/2 ">
          {/* Biography container */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center ">
              <h1 className="uppercase font-bold text-2xl ">Biography</h1>
              <p className="text-lg">
                I am always passionate to learn new things as it makes me feel
                challenged. I enjoy working in a team environment. Because, I
                believe different team members can provide different viewpoints,
                and the synergy between team members can produce creative and
                productive results
              </p>
            </div>
            <div className="mt-32">
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
            </div>

          {/* skills Title */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInview ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="uppercase font-bold text-2xl "
            >
              skills
            </motion.h1>
            {/* skils sections */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInview ? { x: 0 } : {}}
              // transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                HTML
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                CSS
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                JavaScript
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Tailwind css
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                React.js
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Next.js
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                MongoDB
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Express.js
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Node.js
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                java
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Kotlin
              </div>
              <div className="rounded text-sm p-2 text-white hover:text-black bg-black hover:bg-white cursor-pointer ">
                Android Devolopment
              </div>
            </motion.div>
            <div className="mt-32">
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
          </div>
          {/* EX container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-500px" }}
              animate={isExperienceRefInview ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="uppercase font-bold text-2xl "
            >
              Experience
            </motion.h1>
            {/* Experiency list  */}
            <motion.div
            initial={{ x: "-500px" }}
            animate={isExperienceRefInview ? { x: 0 } : {}}
             className="">
              {/* Experiency list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3  ">
                  {/* Job title */}
                  <div className=" bg-white p-3 rounded-b-lg rounded-s-lg font-semibold w-fit ">
                    {" "}
                    Full-stack Developer(MERN){" "}
                  </div>
                  {/* Job dis */}
                  <div className="p-3 text-sm italic ">
                    {" "}
                    Next.js Developer
                   {" "}
                  </div>
                  {/* Job Date */}
                  <div className=" text-red-400 text-sm font-semibold ">
                    {" "}
                    2024 - Present
                  </div>
                  {/* Job com name  */}
                  <div className="p-1 rounded bg-white font-semibold w-fit ">
                    {" "}
                    Fresher
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* line circle */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2  "></div>
                  </div>
                </div>
                {/* rignt */}
                <div className="w-1/3"></div>
              </div>
              {/* Experiency list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3  "></div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* line circle */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2  "></div>
                  </div>
                </div>
                {/* rignt */}
                <div className="w-1/3">
                  {/* Job title */}
                  <div className=" bg-white p-3 rounded-b-lg rounded-s-lg font-semibold w-fit ">
                    {" "}
                    Uttara University{" "}
                  </div>
                  {/* Job dis */}
                  <div className="p-3 text-sm italic ">
                    {" "}
                    Computer science and engineering (CSE){" "}
                  </div>
                  {/* Job Date */}
                  <div className=" text-red-400 text-sm font-semibold ">
                    {" "}
                    2024 - Present
                  </div>
                  {/* Job com name  */}
                  <div className="p-1 rounded bg-white font-semibold w-fit ">
                    {" "}
                    Education
                  </div>
                </div>
              </div>
              {/* Experiency list item */}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3  ">
                  {/* Job title */}
                  <div className=" bg-white p-3 rounded-b-lg rounded-s-lg font-semibold w-fit ">
                    {" "}
                    Internship{" "}
                  </div>
                  {/* Job dis */}
                  <div className="p-3 text-sm italic ">
                    {" "}
                    Full-stack Development(MERN) {" "}
                  </div>
                  {/* Job Date */}
                  <div className=" text-red-400 text-sm font-semibold ">
                    {" "}
                    17/08/2023 - 13/12/2023
                  </div>
                  {/* Job com name  */}
                  <div className="p-1 rounded bg-white font-semibold w-fit ">
                    {" "}
                    Creative IT Institute
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* line circle */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2  "></div>
                  </div>
                </div>
                {/* rignt */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
            {/* <RiScrollToBottomLine className="text-5xl z-30 mt-32"></RiScrollToBottomLine> */}
          </div>
        </div>

        {/* svg  container */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0  ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
