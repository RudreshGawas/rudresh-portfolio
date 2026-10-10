"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function SocialBar() {
  return (
    <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 z-50">
      
      <a
        href="https://github.com/RudreshGawas"
        target="_blank"
        className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="mailto:rudreshgawas3@gmail.com"
        className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
      >
        <FiMail size={20} />
      </a>

      <div className="w-[1px] h-32 bg-[#8892b0] mt-2"></div>
    </div>
  );
}