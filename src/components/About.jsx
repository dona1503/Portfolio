import React from "react";
import { motion } from "framer-motion";

const About = () => (
    <motion.div
        className="mt-8 p-6 bg-gray-800 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
        <motion.h2
            className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
        >
            About Me
        </motion.h2>
        <motion.p
            className="text-gray-400 mt-3 text-lg text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            I am Dona Dutta, a passionate and detail-oriented Software Developer with a keen eye for problem-solving and innovation. With a strong foundation in Java, C/C++, Python, and web technologies, I thrive on building efficient, scalable, and user-centric solutions.
            <br /><br />
            From designing a Medical Terminology Dictionary to developing a Web-Calendar and crafting algorithmic precision tools, I love tackling challenges that push my skills to the next level. I have solved 230+ coding problems on GeeksforGeeks, honing my analytical and algorithmic expertise.
            <br /><br />
            Beyond coding, I believe in the power of creativity, teamwork, and adaptability to drive impactful projects. Whether it's optimizing systems, exploring AI, or crafting intuitive user experiences, I am always eager to learn, innovate, and grow in this ever-evolving tech landscape.
            <br /><br />
            Let's connect and build something amazing together! 🚀
        </motion.p>
    </motion.div>
);

export default About;
