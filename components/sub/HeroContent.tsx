"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const texts = ["Anand Talande", "Software Developer"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 120);
      } else {
        timeout = setTimeout(() => setTyping(false), 1300);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 60);
      } else {
        setTyping(true);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, textIndex, texts]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-2 sm:px-8 mt-10 sm:mt-14 w-full z-[20] p-4 sm:p-8"
    >
      <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-2 sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-xs sm:text-sm md:text-base">
            Software Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[900px] w-auto h-auto"
        >
          <span>
            Hii I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {displayText}
            </span>
            <span className="inline-block w-2 animate-blink text-white align-middle">_</span>{" "}
            an individual with a passion for technology
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 sm:my-5 max-w-full md:max-w-[600px]"
        >
          A Software Developer with experience in Android Application,
          Website, and UI development. Check out my projects and skills.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1pRFWG_-mM5bqD98fg8C3NxvVk1gzEP2p/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-xs sm:text-base"
        >
          RESUME
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/view-3d-boy-using-laptop.png"
          alt="work icons"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
