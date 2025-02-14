import React from "react";

const Certifications = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Certifications</h2>
        <div className="mt-4 text-gray-300">
            <div className="mb-6 hover:bg-gray-700 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold text-teal-400">
                    <a
                        href="https://media.geeksforgeeks.org/courses/certificates/8792668ba448feb7707733a313c2e501.pdf" // Replace with the actual certificate link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-500"
                    >
                        Data Structures and Algorithms - Self Paced
                    </a>
                </h3>
                <p>GeeksforGeeks</p>
                <p>2024</p>
            </div>
            <div className="mb-6 hover:bg-gray-700 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold text-teal-400">
                    <a
                        href="https://www.coursera.org/account/accomplishments/verify/F7QPZJS8YG7K" // Replace with the actual certificate link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-500"
                    >
                        Algorithms on Strings
                    </a>
                </h3>
                <p>Coursera</p>
                <p>2024</p>
            </div>
            <div className="mb-6 hover:bg-gray-700 p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold text-teal-400">
                    <a
                        href="https://www.coursera.org/account/accomplishments/verify/4U8AGLARFN6W" // Replace with the actual certificate link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-500"
                    >
                        Introduction to Large Language Models
                    </a>
                </h3>
                <p>Coursera</p>
                <p>2024</p>
            </div>
        </div>
    </div>
);

export default Certifications;
