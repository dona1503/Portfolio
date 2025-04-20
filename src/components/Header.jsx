import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header = () => (
    <div className="flex flex-col items-center text-center">
        <img
            src="me.jpg"
            alt="Dona Dutta"
            className="w-32 h-32 rounded-full border-4 border-gray-700"
        />
        <h1 className="text-4xl font-extrabold mt-4 text-white">Dona Dutta</h1>
        <p className="text-gray-400 text-lg">Web Developer | Software Engineer | Cloud Enthusiast</p>
        <div className="flex space-x-6 mt-4 text-3xl text-gray-400">
            <a href="https://github.com/dona1503" className="hover:text-teal-400 transition duration-300">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dona-dutta/" className="hover:text-teal-400 transition duration-300">
                <FaLinkedin />
            </a>
            <a href="mailto:donadutta026@gmail.com" className="hover:text-teal-400 transition duration-300">
                <FaEnvelope />
            </a>
        </div>
    </div>
);

export default Header;
