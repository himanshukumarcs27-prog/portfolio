import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      category: "Programming",
      description: "Object-oriented programming and application development",
    },
    {
      name: "Python",
      category: "Programming",
      description: "Programming, problem solving and machine learning",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      description: "Dynamic and interactive web applications",
    },
    {
      name: "React",
      category: "Frontend",
      description: "Building modern and reusable UI components",
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Server-side JavaScript and backend development",
    },
    {
      name: "C",
      category: "Programming",
      description: "Programming fundamentals and problem solving",
    },
    {
      name: "Machine Learning",
      category: "AI / ML",
      description: "Machine learning concepts and model development",
    },
    {
      name: "DBMS",
      category: "Database",
      description: "Database management and SQL concepts",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Technologies and tools I use to build applications,
            solve problems and develop practical solutions.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon / Initial */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition duration-300">
                <span className="text-blue-500 font-bold text-lg group-hover:text-white">
                  {skill.name.charAt(0)}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold mb-2">
                {skill.name}
              </h3>

              {/* Category */}
              <span className="inline-block text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">
                {skill.category}
              </span>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6">
                {skill.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;