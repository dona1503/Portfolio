import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certications.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-gray-800 shadow-2xl rounded-3xl p-8">
                <Header />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Achievements />
                <Certifications />
                <Contact />
            </div>
        </div>
    );
}
