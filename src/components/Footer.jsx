import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-black py-4 text-white border-t border-teal-800 shadow-lg">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/niraj-bhatta-484622251/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-gray-500 hover:text-teal-300 transition duration-200" />
          </a>
          <a href="https://github.com/niraj0010" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-500 hover:text-teal-300 transition duration-200" />
          </a>
          <a href="https://www.instagram.com/_nrzz_11/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-gray-500 hover:text-teal-300 transition duration-200" />
          </a>
          <a href="mailto:neerazbhatta1@gmail.com">
            <HiOutlineMail size={30} className="text-gray-500 hover:text-teal-300 transition duration-200" />
          </a>
        </div>
        <div className="text-gray-500 flex flex-col items-center space-x-2">
          <span className="italic mb-1">"I believe in consistency and discipline."</span>
          <div className="flex items-center space-x-2">
            <span>&copy;</span>
            <span>{year}</span>
            <span>Niraj Bhatta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
