import React from "react";
import { Link } from "react-router-dom";
import Himanshu from "../assets/formal.png"

const Hero = () => {

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Software Developer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center"
    >

      <div className="max-w-7xl mx-auto w-full px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Small Introduction */}
            <p className="text-blue-500 text-lg font-medium mb-4">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Himanshu
              <span className="text-blue-500"> Kumar</span>
            </h1>

            {/* Role */}
            <div className="mt-5">

              <p className="text-2xl md:text-3xl font-semibold text-gray-300">
                {roles[0]}
              </p>

            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
             enjoy developing practical software solutions using Java, Python and modern web technologies,
              while applying strong problem-solving and debugging skills to real-world applications.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* View Projects */}
              <Link
                to="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-medium transition duration-300"
              >
                View Projects
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="border border-slate-700 hover:border-blue-500 text-white px-7 py-3 rounded-lg font-medium transition duration-300"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-6">

              <a
  href="https://github.com/himanshukumarcs27-prog"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition duration-300"
>
  GitHub
</a>

             <a
  href="https://www.linkedin.com/in/himanshukumarsharma/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-blue-500 transition duration-300"
>
  LinkedIn
</a>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="flex justify-center md:justify-end items-start -mt-20">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 blur-2.5xl rounded-full"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-blue-500/30 bg-slate-900 flex items-center justify-center overflow-hidden">

                
             <img 
  src={Himanshu} 
  alt="Himanshu Kumar" 
  className="w-full h-full object-cover object-top animate-float" 
/>
                 
              

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;