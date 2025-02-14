import React from "react";

const Projects = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white">Web Calendar</h3>
                <p className="text-gray-300 mt-2">Develop a Web-Calendar that provides users with comprehensive daily information, enhancing their day-to-day life
                    with valuable insights and resources..</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white">Medical Terminology Dictionary Management</h3>
                <p className="text-gray-300 mt-2">Design a directory system to efficiently manage and organize medical terminologies within a hospital, ensuring
                    easy access and accurate communication for healthcare professionals.</p>
            </div>
        </div>
    </div>
);

export default Projects;
