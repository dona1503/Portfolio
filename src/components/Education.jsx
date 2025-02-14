import React from "react";

const Education = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Education</h2>
        <div className="mt-4 text-gray-300">
            <div className="mb-6 hover:bg-gray-700 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold text-teal-400">Bachelor of Technology in Computer Science and Engineering</h3>
                <p>Lovely Professional University</p>
                <p>2022 - 2026</p>
            </div>
            <div className="mb-6 hover:bg-gray-700 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold text-teal-400">CISCE, ISC</h3>
                <p>St. Stephen’s School</p>
                <p>2022</p>
            </div>
        </div>
    </div>
);

export default Education;
