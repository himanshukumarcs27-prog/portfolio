import React from "react";

const About = () => {
  const highlights = [
    {
      number: "10+",
      title: "Projects",
      description: "Academic and personal projects",
    },
    {
      number: "5+",
      title: "Technologies",
      description: "Modern development technologies",
    },
    {
      number: "1",
      title: "Research Paper",
      description: "Published research work",
    },
    {
      number: "100%",
      title: "Passion",
      description: "For learning and development",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              I'm a passionate{" "}
              <span className="text-blue-500">
                Developer
              </span>
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-5">
             Computer Science student with a strong foundation in Data Structures, Algorithms,
              and DBMS. Proficient in Java, Python, C, and C++,
               with hands-on experience in software development and machine 
               learning projects. Passionate about solving problems and building practical, user-focused applications.
            </p>
            <p className="text-gray-400 text-lg leading-8">
              I am continuously improving my technical skills through
              projects, research and hands-on development.
            </p>

          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300"
              >

                <h4 className="text-3xl font-bold text-blue-500">
                  {item.number}
                </h4>

                <h5 className="text-xl font-semibold text-white mt-2">
                  {item.title}
                </h5>

                <p className="text-gray-400 mt-2 text-sm leading-6">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;