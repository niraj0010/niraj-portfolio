import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typical from 'react-typical';
import { PiHandsPrayingFill } from 'react-icons/pi'; 

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-20 animate-gradient">
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <Typical
              steps={['Namaste ', 1000, '', 1000]}
              loop={Infinity}
              wrapper="span"
            />
            <span style={{ verticalAlign: 'middle' }}>
              <PiHandsPrayingFill style={{ display: 'inline-block', fontSize: 'inherit', marginLeft: '5px' }} />
            </span>
          </h2>
          <motion.h2
            className="text-4xl sm:text-7xl font-bold text-white"
            initial={{ x: -20 }}
            animate={{ x: [0, 20, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            I'm an aspiring Full Stack Developer.
          </motion.h2>
          <p className="text-gray-500 text-2xl italic py-4 max-w-md">
            I'm a Computer Science student, with a keen interest in Full Stack Development.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 hover:scale-105 hover:bg-cyan-600 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
