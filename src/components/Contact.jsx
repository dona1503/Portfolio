import React from "react";

const Contact = () => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-white border-b-4 border-teal-400 pb-2">Contact Me</h2>
        <p className="text-gray-400 mt-3 text-lg">Feel free to reach out for collaborations or any inquiries.</p>
        <p className="text-gray-400 text-lg">Email: donadutta026@gmail.com</p>
        <p className="text-gray-400 text-lg">Phone: +91 983 299 8537</p>

        {/* CV Download Button */}
        <a
            href="C\Users\donad\OneDrive\Desktop\web\Portfolio\public\cv[2].pdf" // Replace with the actual path to your CV file
            download="Dona_Dutta_CV.pdf"
            className="inline-block mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
            Download CV
        </a>
    </div>
);

export default Contact;
