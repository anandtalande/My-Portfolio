import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-7">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          title="Fearless - Women's Safety"
          description="This innovative Android application is designed with a sole focus on women's security, offering a range of features to keep you safe, connected, and in control."
          images={["/1.png", "/2.png", "/3.png", "/4.png"]}
        />
        <ProjectCard
          title="Personal Portfolio"
          description="Experience my portfolio, a synergy of modern technology and elegant design. A commitment to innovation and user-centric design principles."
          images={["/2_1.png","/2_2.png","/2_3.png","/2_4.png"]}
        />
        <ProjectCard
          title="Coming soon.."
          description="Description for another project."
          images={["/gpt2.png"]}
        />
      </div>
    </div>
  );
};

export default Projects;
