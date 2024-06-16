import React from 'react';
import seluThrift from '../assets/portfolio/seluThrift.png';
import catFeeder from '../assets/portfolio/catFeeder.jpg';
import dipika from '../assets/portfolio/dipika.JPG';
import eLibrary from '../assets/portfolio/eLibrary.jpg';
import seluNsas from '../assets/portfolio/Nsas.JPG';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: seluThrift,
            description: "A fully functional e-commerce site developed for SELU Thrift Store to enable users to easily buy and sell products .",
            code: "https://github.com/niraj0010/CMPS_285_SELU_ThriftStore",
            demo: "https://github.com/niraj0010/CMPS_285_SELU_ThriftStore",
        },
        {
            id: 2,
            src: catFeeder,
            description: "We developed an automated cat feeder system using IoT technology, utilizing Raspberry Pi.",
            code: "https://github.com/niraj0010/Pao-Pao-Cat-feeder_CMPS375",
            demo: "https://github.com/niraj0010/Pao-Pao-Cat-feeder_CMPS375",
        },
        {
            id: 3,
            src: eLibrary,
            description: "An e-library platform tailored for professors to efficiently manage articles and resources.",
            code: "https://github.com/niraj0010/std-secure-latest",
            demo: "https://e-lib-6ae39.web.app/",
        },
        {
            id: 4,
            src: seluNsas,
            description: "Developed a website for the Nepalese Student Association at Southeastern to showcase Nepalese culture, important informations and related content.",
            code: "https://selu-nsas.vercel.app/home",
            demo: "https://selu-nsas.vercel.app/home",
        },
        {
            id: 5,
            src: dipika,
            description: "Developed Dipika's artistry website to showcase her art and talent.",
            code: "https://artbydipika-dg.web.app/",
            demo: "https://artbydipika-dg.web.app/",
        },
    ];

    const handleButtonClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-16">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-teal-500">
                        Projects
                    </p>
                    <p className="py-6 font-bold">
                        My works:
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 px-12 sm:px-0">
                    {projects.map(({ id, src, description, code, demo }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden transform transition duration-200 hover:scale-105 hover:shadow-teal-800">
                            <img src={src} alt="" className="rounded-t-lg w-full h-48 object-cover" />
                            <div className="text-center mb-4 px-4 pt-2">
                                <p>{description}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => handleButtonClick(demo)}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-purple-600 shadow-md shadow-teal-800"
                                >
                                    Demo
                                </button>
                                <button
                                    onClick={() => handleButtonClick(code)}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-purple-600 shadow-md shadow-teal-800"
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
