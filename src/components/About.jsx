import React from 'react';
import nirajImage from "../assets/aboutImage.jpg";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full p-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-teal-500">About Me</p>
        </div>
        <div className="w-full flex flex-col items-center md:flex-row">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className=" rounded-lg p-4 shadow-lg w-72 ">
              <img
                src={nirajImage}
                alt="Niraj Bhatta"
                className="rounded-lg w-full h-auto mb-4 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-xl mt-4 md:mt-0">
              As a computer science student with a perfect 4.0 GPA, I've actively engaged in hands-on projects, successfully
              completing each one. These experiences have not only enhanced my theoretical knowledge but also honed my
              practical skills in programming, problem-solving, and project management, preparing me effectively for future
              challenges in the field of technology.
            </p>
            <br />
            <p className="text-xl">
              As a Student Web Developer at the Internet Resource Center at SELU, I specialize in building and managing web
              applications using React and ASP.NET. My role has allowed me to apply my strong theoretical foundation in
              computer science, complemented by hands-on experience, to deliver robust and efficient solutions.
              Additionally, my position as a Mathematics and Computer Science tutor has further honed my logical
              problem-solving skills and ability to communicate complex concepts effectively. These experiences have
              equipped me to innovate and thrive in dynamic tech environments, leveraging cutting-edge technologies to
              address real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
