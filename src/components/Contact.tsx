"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-[#64ffda] font-mono mb-4">
          07. What’s Next?
        </p>

        <h2 className="text-5xl font-bold text-[#ccd6f6] mb-8">
          Get In Touch
        </h2>

        <p className="text-[#8892b0] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          I’m currently seeking opportunities in AI/ML, GenAI, and
          full stack AI engineering roles. Whether you have a role,
          collaboration, or project idea — feel free to reach out.
        </p>

        <a
          href="mailto:rudreshgawas3@gmail.com"
          className="inline-block border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded-lg hover:bg-[#64ffda]/10 transition-all duration-300 font-mono"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-16 text-2xl text-[#8892b0]">
          <a
            href="https://github.com/RudreshGawas"
            target="_blank"
            className="hover:text-[#64ffda] transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rudresh-gawas-876293251"
            target="_blank"
            className="hover:text-[#64ffda] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:rudreshgawas3@gmail.com"
            className="hover:text-[#64ffda] transition-colors duration-300"
          >
            <FiMail />
          </a>
        </div>

        <p className="text-[#8892b0]/60 text-sm mt-20 font-mono">
          Designed & Built by Rudresh Gawas
        </p>
      </motion.div>
    </section>
  );
}