import React from "react";

const Resume = () => {
  // Education
  const education = [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institute: "IILM University, Greater Noida",
      year: "2023 - 2027",
    },
    {
      degree: "12th Class",
      institute: "Government Senior Secondary School",
      year: "2021 - 2022",
    },
    {
      degree: "10th Class",
      institute: "Gyan Bharti Senior Secondary School",
      year: "2019 - 2020",
    },
  ];

  // Certifications
  const certifications = [
    {
      title: "Full Stack in Java",
      organization: "EduSkill",
      year: "June 2026",
    },
    {
      title: "Multithreading in Java",
      organization: "Infosys Springboard",
      year: "December 2024",
    },
    {
      title: "Introduction to Java and JDBC",
      organization: "Infosys Springboard",
      year: "November 2024",
    },
    {
      title: "Python Fundamental",
      organization: "Infosys Springboard",
      year: "June 2024",
    },
    {
      title: "Programming in C",
      organization: "Infosys Springboard",
      year: "May 2024",
    },
  ];

  // Achievements
  const achievements = [
    {
      title: "HACK UTSAV",
      description: "Participated in HACK UTSAV.",
      year: "February 2024",
    },
    {
      title: "Smart India Hackathon",
      description: "Participated in SIH.",
      year: "2024",
    },
    {
      title: "IEEE Seminar Coordinator",
      description:
        "Coordinator, IEEE Seminar at IILM University.",
      year: "2024",
    },
    {
      title: "Discipline Committee",
      description:
        "Member of the Discipline Committee during Fresher's Event at IILM University.",
      year: "2024",
    },
  ];

  return (
    <section
      id="resume"
      className="min-h-screen bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            My Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Resume &{" "}
            <span className="text-blue-500">
              Education
            </span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            My academic background, certifications and achievements.
          </p>

        </div>


        {/* ================= EDUCATION ================= */}

        <div className="mb-20">

          <h3 className="text-2xl font-bold mb-8">
            Education
          </h3>

          <div className="space-y-5">

            {education.map((item) => (

              <div
                key={item.degree}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                  <div>

                    <h4 className="text-xl font-semibold">
                      {item.degree}
                    </h4>

                    <p className="text-gray-400 mt-2">
                      {item.institute}
                    </p>

                  </div>

                  <span className="text-blue-400 bg-blue-500/10 px-4 py-2 rounded-lg text-sm w-fit">
                    {item.year}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= CERTIFICATIONS ================= */}

        <div className="mb-20">

          <h3 className="text-2xl font-bold mb-8">
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {certifications.map((certificate) => (

              <div
                key={certificate.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h4 className="text-lg font-semibold">
                      {certificate.title}
                    </h4>

                    <p className="text-gray-400 mt-2">
                      {certificate.organization}
                    </p>

                  </div>

                  <span className="text-blue-500 text-sm">
                    {certificate.year}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= ACHIEVEMENTS ================= */}

        <div>

          <h3 className="text-2xl font-bold mb-8">
            Achievements & Activities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {achievements.map((achievement) => (

              <div
                key={achievement.title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300"
              >

                <div className="flex items-center justify-between mb-3">

                  <h4 className="text-xl font-semibold">
                    {achievement.title}
                  </h4>

                  <span className="text-blue-400 text-sm">
                    {achievement.year}
                  </span>

                </div>

                <p className="text-gray-400 leading-6">
                  {achievement.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* ================= DOWNLOAD BUTTON ================= */}

        <div className="text-center mt-14">

          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default Resume;