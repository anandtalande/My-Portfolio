import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
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
              className="translate-y-2 cursor-pointer hover:animate-slowspin"
            />
          </div>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-7">
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
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
