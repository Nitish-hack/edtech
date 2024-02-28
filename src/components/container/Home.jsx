import React from "react";
import hero from "../../assets/nexuslearnhero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="sm:section smallsection max-sm:pt-24" id="home">
      <div className="flex max-sm:flex-col-reverse items-center justify-center">
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center">

          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Code to Learn.<br /> Learn to Intern.. <br /> Intern to Excel...
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm  max-sm:text-center">
            Empowering Future Tech Leaders: Gain Hands-On Experience Across Diverse Fields with Our Internships.
          </p>
          <div className="mt-6">
            <Link to={"about"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}  className=" transition-all duration-300"><button className="px-6 py-3 max-sm:mb-2 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
                Get Started
              </button>
            </Link>
            <Link to={"courses"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}  className=" transition-all duration-300">
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div >
        <p className="text-center sm:text-xl max-sm:font-bold mt-10">
          Get hired into {" "}
          <span className="text-Teal">
            big tech companies like "MAANG"
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex  max-sm:mt-2 items-center justify-center flex-wrap  sm:gap-8 sm:p-2 "
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="max-sm:w-1/3 w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
