import React from "react";

const AboutMe = () => {

  return (
    <div className="min-h-screen w-full bg-gradient-to-br via-[#302b63] to-[#24243e] p-6 sm:p-10 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-[#1c1c2b]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] p-6 sm:p-10 mt-20 mb-20">
        <h1 className="text-4xl sm:text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          About Me
        </h1>

        <p className="text-base sm:text-[15px] text-gray-300 leading-relaxed mb-5 text-center">
          <span className="font-semibold text-white">coming soon...</span>🫡
        </p>      
      </div>
    </div>
  );
};

export default AboutMe;
