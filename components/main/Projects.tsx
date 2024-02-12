import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/1.png"
          title="Fearless - Women's Safety"
          description="This innovative Android application is designed with a sole focus on women's security, offering a range of features to keep you safe, connected, and in control."
        />
        <ProjectCard
          src="/Screenshot 3.png"
          title="Personal Portfolio"
          description="Experience my portfolio, a synergy of modern technology and elegant design.  A commitment to innovation and user-centric design principles."
        />
        <ProjectCard
          src="/3.png"
          title="Personal Portfolio"
          description="Experience my portfolio, a synergy of modern technology and elegant design.  A commitment to innovation and user-centric design principles."
        />
      </div>
    </div>
  );
};

export default Projects;