"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Coffee Shop Website",
      desc: "Complete Responsive Coffee Shop Website Using ReactJS, Tailwind CSS & Framer Motion",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://coffee-shop-next-gamma.vercel.app/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Next.js Modern Restaurant Website",
      desc: "Modern Restaurant Website Template (ReactJS + Tailwind + Framer motion",
      img: "https://ibb.co.com/hLKxC5f",
      link: "https://food-ecommerce-rose.vercel.app/",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://github.com/TANVIR0222",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://github.com/TANVIR0222",
    },
  ];
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-[600vh] relative " ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)]  items-center justify-center flex text-8xl text-black text-center ">
          My Work
            <motion.svg
            className={'ml-16'}
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

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                key={item.id}
              >
                <div className="flex flex-col gap-8  mt-20 text-white ">
                  <h1 className="text-xl font-semibold md:text-3xl  lg:text-5xl  xl:text-4xl ">
                    {item.title}
                  </h1>
                  <div className=" relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt="parject"
                      width={500}
                      height={500}
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] ">
                    {item.desc}
                  </p>
                  <motion.svg
            className={'ml-16'}
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
                  <Link href={item.link} className="flex justify-end ">
                    <button className="text-sm bg-white p-2 md-p-4 md:text-md lg:p-8 lg:text-lg  text-gray-600 font-semibold m-4 rounded  -mt-7">
                      See Demo
                    </button>{" "}
                  </Link>
                 
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" h-screen w-screen gap-16 fle flex-col items-center justify-center text-center">
        <h1 className="mt-32 text-xl font-semibold md:text-4xl  lg:text-8xl  xl:text-6xl text-gray-300">
          Do you have a project
        </h1>
        <h1 className="mt-6 lg:text-4xl md:text-xl xl:text-2xl  text-gray-300">
          Full Stack Developer (MERN)
        </h1>
        <div className="relative  ">
          <motion.svg
            animate={{ rotate: 300 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref=""
                className="text-xl md:w-28 md:h-28 absolute"
              >
                Full Stack Developer (MERN)
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className=" cursor-pointer w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
