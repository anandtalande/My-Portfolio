import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br via-[#302b63] to-[#24243e] p-6 sm:p-10 flex flex-col items-center justify-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mt-10">
          Anand Talande
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Android Dev 🚀 || Dreamer & Doer ✨
        </p>
      </div>

      {/* Quick Facts Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          📍{" "}
          <span className="text-white font-semibold">Nagpur, India</span>
        </div>
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          🎓{" "}
          <span className="text-white font-semibold">BCA Graduate</span>
        </div>
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          💻{" "}
          <span className="text-white font-semibold">
            Android & AI Enthusiast
          </span>
        </div>
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          ⚡{" "}
          <span className="text-white font-semibold">PHP Developer Intern</span>
        </div>
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          🎵{" "}
          <span className="text-white font-semibold">Loves Music & Gaming</span>
        </div>
        <div className="bg-[#1c1c2b]/80 p-4 rounded-lg text-center shadow-md">
          🥾{" "}
          <span className="text-white font-semibold">Trekking & Adventures</span>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 text-center mb-6">
          My Journey
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center">
            🎓{" "}
            <span className="text-gray-300">2019–2022</span>
            <p className="text-white font-semibold">BCA Completed</p>
          </div>
          <div className="text-center">
            💼{" "}
            <span className="text-gray-300">Internship</span>
            <p className="text-white font-semibold">Android & PHP Developer</p>
          </div>
          <div className="text-center">
            🛠️{" "}
            <span className="text-gray-300">Personal Projects</span>
            <p className="text-white font-semibold">
              Android Apps, PHP Web Platform
            </p>
          </div>
        </div>
      </div>

      {/* Dream Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          My dream: To merge Android + AI and build apps that feel alive.
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
