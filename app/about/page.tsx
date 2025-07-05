import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#030014] text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About Me</h1>
      <div className="max-w-2xl text-lg text-gray-300 leading-relaxed">
        <p>
          Hi! I'm Anand Talande, a passionate software developer with experience in Android, web, and UI development. I love building modern, user-friendly applications and learning new technologies. <br /><br />
          My journey in tech started with curiosity and has grown into a career focused on creating impactful digital solutions. I enjoy collaborating with others, solving problems, and continuously improving my skills.
        </p>
        <p className="mt-6">
          <b>Skills:</b> React, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, Express.js, Redux, HTML5, CSS3, JavaScript, and more.
        </p>
        <p className="mt-6">
          <b>Contact:</b> anand.talande@email.com
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
