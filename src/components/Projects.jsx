import React from "react";

const Projects = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white">InteractiveStoryGame</h3>
                <p className="text-gray-300 mt-2">
                    <ul>
                        <li>Designed and developed a responsive interactive storytelling platform with progressive chapter unlocks.</li>
                        <li>Integrated four performance-based mini-games to drive story progression. Developed Game Mechanics require players to meet specific performance criteria before progressing.</li>
                        <li>Added an interactive ending with user feedback via a comment box.</li>
                        <li>Ensured a Responsive and Engaging UI for smooth user experience across different devices.</li>
                        <li>Tech stack: HTML, CSS, JavaScript</li>
                    </ul>
                </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white">VitalBeat</h3>
                <p className="text-gray-300 mt-2">
                    <ul>
                        <li>Developed a responsive gym website with navigation, about section, and dashboard access. </li>
                        <li>Built an interactive dashboard with health tracking, graphs, a to-do list, and ensured cross-browser support.</li>
                        <li>Tech stack: HTML, CSS, JavaScript</li>
                    </ul>
                </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-white">Tasty bites</h3>
                <p className="text-gray-300 mt-2"> <ul>
                        <li>Developed a responsive restaurant website with a navigation bar, multimedia content, and contact form. </li>
                        <li>Ensured mobile-friendly design with cross-browser compatibility and a user-friendly layout.</li>
                        <li>Tech stack: HTML and CSS</li>
                    </ul>
                    </p>
            </div>
        </div>
    </div>
);

export default Projects;
