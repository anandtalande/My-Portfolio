import React from "react";

const NewSkills = () => {
  const skills = [
    { name: "React", icon: "/react.png" },
    { name: "Next.js", icon: "/next.png" },
    { name: "TypeScript", icon: "/ts.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "Node.js", icon: "/node-js.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "Redux", icon: "/redux.png" },
    { name: "HTML5", icon: "/html.png" },
    { name: "CSS3", icon: "/css.png" },
    { name: "JavaScript", icon: "/js.png" },
  ];

  return (
    <section className="py-20" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center rounded-lg p-4 shadow-md cursor-pointer drop-shadow-[0_0_8px_rgba(164,143,255,0.7)] hover:text-white hover:drop-shadow-[0_0_20px_rgba(186,156,255,1)] transition-all duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
              <span className="text-white text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
