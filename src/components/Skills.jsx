import React from "react";
import { FaLaptopCode, FaBrain } from "react-icons/fa"; // Importing techy icons

const Skills = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Skills</h2>
        <ul className="text-gray-400 mt-3 text-lg list-none space-y-4">
            <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 ease-in-out">
                <FaLaptopCode className="text-teal-500 mr-2 transition-all duration-300 ease-in-out hover:text-teal-400" />
                Java, C/C++, Python, Bash, HTML, CSS, JavaScript, MySQL, Oracle
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 ease-in-out">
                <FaLaptopCode className="text-teal-500 mr-2 transition-all duration-300 ease-in-out hover:text-teal-400" />
                GitHub, npm, Vite, Maven, Docker, Chat-GPT, VMware WorkStation
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 ease-in-out">
                <FaLaptopCode className="text-teal-500 mr-2 transition-all duration-300 ease-in-out hover:text-teal-400" />
                Google Cloud Platform, Linux and Windows
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 ease-in-out">
                <FaBrain className="text-teal-500 mr-2 transition-all duration-300 ease-in-out hover:text-teal-400" />
                UI/UX Design
            </li>
            <li className="flex items-center hover:bg-gray-700 p-2 rounded-lg transition-all duration-300 ease-in-out">
                <FaBrain className="text-teal-500 mr-2 transition-all duration-300 ease-in-out hover:text-teal-400" />
                Creativity, Teamwork, Problem-Solving and Adaptability
            </li>
        </ul>
    </div>
);

export default Skills;
