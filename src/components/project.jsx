import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Driver Distraction & Drowsiness Detection",
      category: "Machine Learning",
      description:
        "A real-time system designed to detect driver drowsiness and distraction using camera input and image processing techniques.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
      type: "Academic Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "Real-Time Chat Application",
      category: "Full Stack",
      description:
        "A real-time chat application with instant messaging, user management, one-to-one and group chat functionality.",
      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "WebSocket",
        "JWT",
      ],
      type: "Academic Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "CGPA Prediction Model",
      category: "Machine Learning",
      description:
        "A machine learning model designed to estimate students' academic performance using factors such as attendance, internal marks and study hours.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Regression",
      ],
      type: "Academic Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "JobHunt",
      category: "Frontend",
      description:
        "A modern job hunting frontend interface designed to provide users with an intuitive experience for exploring job opportunities.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      type: "Personal Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "ERP",
      category: "Web Application",
      description:
        "An ERP-based application focused on managing and organizing application data through a structured user interface.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
      ],
      type: "Personal Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "Basic Calculator",
      category: "Frontend",
      description:
        "A simple calculator application that performs basic arithmetic operations through an interactive user interface.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      type: "Personal Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },

    {
      title: "Rock Paper Scissors",
      category: "JavaScript Game",
      description:
        "A simple interactive Rock Paper Scissors game built to practice JavaScript logic, user interaction and game functionality.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      type: "Personal Project",
      github: "https://github.com/himanshukumarcs27-prog",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of the projects I have worked on using
            different technologies and development approaches.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Top */}
              <div className="h-44 bg-gradient-to-br from-blue-600/20 to-slate-900 flex items-center justify-center">

                <div className="text-center">

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">

                    <span className="text-2xl font-bold text-blue-500">
                      {project.title.charAt(0)}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mt-3">
                    {project.category}
                  </p>

                </div>

              </div>


              {/* Project Content */}
              <div className="p-6">

                {/* Type */}
                <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-blue-500 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-6">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs bg-slate-900 border border-slate-700 text-gray-300 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* Buttons */}
                <div className="flex items-center gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    GitHub →
                  </a>

                  <Link
                    to="/contact"
                    className="text-sm text-blue-500 hover:text-blue-400 transition"
                  >
                    View Details →
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= VIEW ALL ================= */}

        <div className="text-center mt-14">

          <a
            href="https://github.com/himanshukumarcs27-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-slate-700 hover:border-blue-500 hover:text-blue-500 px-7 py-3 rounded-lg transition duration-300"
          >
            View More on GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;