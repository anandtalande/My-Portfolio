"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ skill }: { skill: { name: string; icon: string } }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      className="flex flex-col items-center group cursor-pointer bg-[#181824cc] rounded-xl p-6 shadow-lg border-2 border-[#23234a] transition-all duration-300 hover:scale-105 hover:border-[#b99cff] hover:shadow-[0_0_40px_10px_rgba(186,156,255,0.25)] relative overflow-hidden border-animated-gradient"
    >
      {/* Animated border gradient */}
      <span className="absolute inset-2 rounded-xl border-2 border-transparent pointer-events-none z-10 border-gradient-sweep group-hover:border-gradient-animate"></span>
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 shadow-inner transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 z-20">
        <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
      </div>
      <span className="text-white text-base font-semibold tracking-wide mt-3 group-hover:text-[#fff] transition-colors duration-300 z-20">
        {skill.name}
      </span>
    </motion.div>
  );
};

const NewSkills = () => {
  const skills = [
    { name: "Android Studio", icon: "/android-logo-android-studio-appjoy-25.png" },
    { name: "React", icon: "/react.png" },
    { name: "Next.js", icon: "/next.png" },
    { name: "Python", icon: "/python-icon.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "PHP", icon: "/php-icon.png" },
    { name: "SQL", icon: "/sql-icon.png" },
    { name: "Github", icon: "/github-icon.png" },
    { name: "HTML5", icon: "/html.png" },
    { name: "CSS3", icon: "/css.png" },
    { name: "TypeScript", icon: "/ts.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
  ];

  return (
    <section className="py-20" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;

