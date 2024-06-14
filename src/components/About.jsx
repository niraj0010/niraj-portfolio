import React from 'react'

const About = () => {
  return (
    <div name ="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className ="pb-4">

            <p className ="text-4xl font-bold inline border-b-4 border-teal-500"> About </p>
            
                </div>
                
                <p className="text-xl mt-10"> 
            As a computer science student with a perfect 4.0 GPA, 
            I've actively engaged in hands-on projects, successfully completing each one. 
            These experiences have not only enhanced my theoretical knowledge but 
            also honed my practical skills in programming, problem-solving, and project management, 
            preparing me effectively for future challenges in the field of technology.
            </p>
            <br />
            <p className="text-xl">
            As a Student Web Developer at the Internet Resource Center at SELU, I've focused on building and managing web applications using React and ASP.NET. Furthermore, my experience of working as Mathematics and Computer Science tutor allowed me to apply logical problem-solving skills and hands-on experience to deliver robust solutions. Working with cutting-edge technologies has strengthened my ability to innovate and thrive in dynamic tech environments.
            </p>
        </div>
    
    </div>
  )
}

export default About;