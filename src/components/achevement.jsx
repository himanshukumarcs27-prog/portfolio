import React from "react";

const Achievement = () => {
  const achievements = [
    {
      title: "HACK UTSAV",
      year: "2024",
      category: "Hackathon",
      description:
        "Participated in HACK UTSAV and gained practical experience in collaborative problem-solving and development.",
    },

    {
      title: "Smart India Hackathon",
      year: "2024",
      category: "Hackathon",
      description:
        "Participated in Smart India Hackathon (SIH) and worked on problem-solving in a competitive environment.",
    },

    {
      title: "IEEE Seminar Coordinator",
      year: "2024",
      category: "Leadership",
      description:
        "Worked as Coordinator for an IEEE Seminar at IILM University.",
    },

    {
      title: "Discipline Committee",
      year: "2024",
      category: "Responsibility",
      description:
        "Served as a member of the Discipline Committee during the Fresher's Event at IILM University.",
    },

    {
      title: "KCIIS Start-up Parikrama",
      year: "January 2025",
      category: "Event",
      description:
        "Engaged in the KCIIS Start-up Parikrama event at SIET and IILM University, Greater Noida.",
    },

    {
      title: "TEDx Naini Women",
      year: "September 2024",
      category: "Conference",
      description:
        "Participated in TEDx Naini Women at IILM University.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            Milestones
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements &{" "}
            <span className="text-blue-500">
              Activities
            </span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Some of the events, hackathons and leadership
            responsibilities I have been involved in.
          </p>

        </div>


        {/* ================= ACHIEVEMENTS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {achievements.map((achievement) => (

            <div
              key={achievement.title}
              className="group bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-5">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-lg">
                    {achievement.title.charAt(0)}
                  </span>
                </div>

                <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>

              </div>


              {/* Category */}
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                {achievement.category}
              </p>


              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition">
                {achievement.title}
              </h3>


              {/* Description */}
              <p className="text-gray-400 text-sm leading-6">
                {achievement.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievement;