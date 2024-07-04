import React from "react";
import Html from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import dotnet from "../assets/Dotnet.jpg";
import Csharp from "../assets/Csh.png";
import Java from "../assets/Java.png";
import Python from "../assets/Python.png";
import Tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import TypeScript from "../assets/Typesript.jpg";
import MySQL from "../assets/Mysql.jpg";
import Firebase from "../assets/Firebase.jpg";
import MongoDB from "../assets/MongoDB.jpg";
import Express from "../assets/Express JS.png";
import Node from "../assets/Node JS.jpg";
const Skills = () => {
  const projectcards = [
    {
      id: 1,
      src: Html,
      Title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      Title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      Title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      Title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: Java,
      Title: "JAVA",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: Python,
      Title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: Csharp,
      Title: "C#",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: dotnet,
      Title: "Asp.Net",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: github,
      Title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: Tailwind,
      Title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: TypeScript,
      Title: "TypeScript",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: MySQL,
      Title: "MySQL",
      style: "shadow-yellow-100",
    },
    {
      id: 13,
      src: Firebase,
      Title: "Firebase",
      style: "shadow-yellow-300",
    },
    {
      id: 14,
      src: MongoDB,
      Title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 15,
      src: Express,
      Title: "Express JS",
      style: "shadow-yellow-300",
    },
    {
      id: 16,
      src: Node,
      Title: "Node JS",
      style: "shadow-green-300",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  border-b-4 border-teal-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-2xl italic">
            These are the technologies that I have worked with :
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {projectcards.map(({ id, src, Title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{Title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
