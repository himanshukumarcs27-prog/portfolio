import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href = `mailto:himanshukumar12zx@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-500 font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Have a project idea, opportunity or just want to connect?
            Feel free to reach out.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's work together
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              I'm always open to discussing new projects,
              development opportunities and interesting ideas.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 text-xl">
                  @
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:himanshukumar12zx@gmail.com"
                  className="text-gray-200 hover:text-blue-500 transition"
                >
                  himanshukumar12zx@gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 text-xl">
                  ☎
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+916202191492"
                  className="text-gray-200 hover:text-blue-500 transition"
                >
                  +91 6202191492
                </a>
              </div>

            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">
                  GH
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/himanshukumarcs27-prog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-500 transition"
                >
                  github.com/himanshukumarcs27-prog
                </a>
              </div>

            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">
                  in
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/himanshukumarsharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-500 transition"
                >
                  linkedin.com/in/himanshukumarsharma
                </a>
              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-5">

                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* Email */}
              <div className="mb-5">

                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* Message */}
              <div className="mb-6">

                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 transition resize-none"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;