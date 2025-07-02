import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 sm:px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-4 md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex items-center justify-center"
          style={{ minHeight: '50px' }}
        >
          <div className="mx-auto">
            <Image
              src="/myLogo1.png"
              alt="logo"
              width={130}
              height={100}
              className="translate-y-2 cursor-pointer hover:animate-slowspin w-24 sm:w-28 md:w-32"
            />
          </div>
        </a>

        {/* Centered navigation links */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center justify-center border border-[#7042f861] bg-[#0300145e] px-4 sm:px-8 md:px-[32px] py-2 md:py-[10px] rounded-full text-gray-200 gap-4 sm:gap-10 md:gap-[100px] shadow-[0_0_40px_0.5px_rgba(186,156,255,0.6)] text-xs sm:text-base md:text-lg">
            <a href="#projects" className="cursor-pointer drop-shadow-[0_0_8px_rgba(164,143,255,0.7)] hover:text-white hover:drop-shadow-[0_0_20px_rgba(186,156,255,1)] transition-all duration-300">
              Projects
            </a>
            <a href="#skills" className="cursor-pointer drop-shadow-[0_0_8px_rgba(164,143,255,0.7)] hover:text-white hover:drop-shadow-[0_0_20px_rgba(186,156,255,1)] transition-all duration-300">
              Skills
            </a>
            <a href="#about-me" className="cursor-pointer drop-shadow-[0_0_8px_rgba(164,143,255,0.7)] hover:text-white hover:drop-shadow-[0_0_20px_rgba(186,156,255,1)] transition-all duration-300">
              About me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3 sm:gap-5 md:gap-7">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="w-5 sm:w-6 md:w-8"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
