import React from "react";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaFacebook, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[10px] z-50 relative" style={{ pointerEvents: 'auto' }}>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <a href="https://github.com/anandtalande" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[7px] cursor-pointer text-gray-200 hover:text-[#7042f8]">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/anandtalande" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[7px] cursor-pointer text-gray-200 hover:text-[#0e76a8]">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com/anand_the_big_secret/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[7px] cursor-pointer text-gray-200 hover:text-[#e1306c]">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="https://www.facebook.com/anandtalande" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[7px] cursor-pointer text-gray-200 hover:text-[#1877f3]">
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Anand Talande 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
