import React from "react";

const codingProfiles = [
  {
    name: "LeetCode",
    description:
      "Practicing Data Structures and Algorithms and continuously improving my problem-solving skills.",
    username: "himanshukumar12zx",
    link: "https://leetcode.com/u/himanshukumar12zx/",
    icon: "LC",
  },

  {
    name: "GitHub",
    description:
      "Explore my projects, source code, experiments and software development work.",
    username: "himanshukumarcs27-prog",
    link: "https://github.com/himanshukumarcs27-prog",
    icon: "GH",
  },

  {
    name: "LinkedIn",
    description:
      "Connect with me and explore my professional journey, achievements and experiences.",
    username: "Himanshu Kumar",
    link: "https://www.linkedin.com/in/himanshukumarsharma/",
    icon: "in",
  },
];

const CodingProfile = () => {
  return (
    <section
      id="coding-profiles"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="relative max-w-3xl mx-auto text-center mb-14">
        <p className="text-blue-400 font-medium tracking-wide mb-3">
          CODING & PROFESSIONAL PRESENCE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Coding Profiles
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-8">
          Explore my coding practice, projects and professional journey
          through my online profiles.
        </p>
      </div>

      {/* Profile Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {codingProfiles.map((profile) => (
          <div
            key={profile.name}
            className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Top Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon */}
            <div className="flex items-center justify-between mb-7">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <span className="text-blue-400 text-xl font-bold">
                  {profile.icon}
                </span>
              </div>

              <span className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
                ↗
              </span>
            </div>

            {/* Profile Name */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {profile.name}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-7 min-h-[84px]">
              {profile.description}
            </p>

            {/* Divider */}
            <div className="border-t border-slate-800 my-6"></div>

            {/* Username */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Profile
              </p>

              <p className="text-gray-300 text-sm truncate">
                {profile.username}
              </p>
            </div>

            {/* Button */}
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
            >
              View Profile
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfile;