import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>

            <Link
              to="/"
              className="text-2xl font-bold"
            >
              Himanshu
              <span className="text-blue-500">.</span>
            </Link>

            <p className="text-gray-400 mt-4 leading-7 max-w-sm">
              Computer Science student and aspiring software developer
              passionate about building modern web applications and
              solving real-world problems.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>


          {/* Connect */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/himanshukumarcs27-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/himanshukumarsharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:himanshukumar12zx@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Email
              </a>

              <a
                href="tel:+916202191492"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                +91 6202191492
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Himanshu Kumar. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with{" "}
            <span className="text-blue-500">
              React
            </span>{" "}
            &{" "}
            <span className="text-blue-500">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;