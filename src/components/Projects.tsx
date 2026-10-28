"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaYoutube } from "react-icons/fa";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: string[];
  github?: string;
  demo?: string;
  video?: string;
};

const projects: Project[] = [
  {
    title: "Multi-Agent AI Project Manager",
    subtitle: "AI-Powered Software Project Planning Platform",
    description:
      "Turns a project idea into structured requirements, technology recommendations, system architecture, a three-sprint plan, and project documentation. LangGraph orchestrates specialized agents, with optional scope clarification, live progress updates, and downloadable PDF and JSON plans.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Google Gemini",
      "Pydantic",
      "Next.js",
      "PostgreSQL",
    ],
    images: [],
    video: "https://youtu.be/Vs7NUV-zlrc",
  },

  {
    title: "PhysioCare",
    subtitle: "AI-Powered Physiotherapy Rehabilitation Platform",
    description:
      "Cross-platform AI rehabilitation platform using MediaPipe BlazePose, Google ML Kit, Flutter, and Gemini AI for real-time exercise tracking, posture correction, rep counting, pain alerts, and therapist monitoring.",
    tech: [
      "Flutter",
      "MediaPipe",
      "Google ML Kit",
      "Gemini API",
      "Supabase",
      "Dart",
    ],
    images: [
      "/projects/physiocare-1.png",
      "/projects/physiocare-2.png",
      "/projects/physiocare-3.png",
      "/projects/physiocare-4.png",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "ComplaintIQ",
    subtitle: "AI Banking Complaint Management System",
    description:
      "Full-stack NLP-powered complaint management platform automating sentiment analysis, ticket prioritization, department routing, urgency detection, analytics dashboards, and executive report generation.",
    tech: [
      "Python",
      "FastAPI",
      "PyTorch",
      "HuggingFace",
      "SQLite",
      "Plotly",
    ],
    images: [
      "/projects/complaintiq-1.png",
      "/projects/complaintiq-2.png",
      "/projects/complaintiq-3.png",
      "/projects/complaintiq-4.png",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Industrial Monitoring Dashboard",
    subtitle: "Real-Time Manufacturing Analytics Platform",
    description:
      "Real-time industrial dashboard built during internship at Siemens Goa integrating live machine logs, FPY tracking, production insights, machine health analytics, and centralized monitoring for multiple production lines.",
    tech: [
      "Python",
      "Streamlit",
      "SQLite",
      "Pandas",
      "JavaScript",
    ],
    images: [
      "/projects/siemens-1.png",
      "/projects/siemens-2.png",
      "/projects/siemens-3.png",
      "/projects/siemens-4.png",
      "/projects/siemens-5.png",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-20 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">03.</span>
          Featured Projects
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              
              {project.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative group overflow-hidden rounded-xl"
                    >
                      <div className="absolute inset-0 bg-[#64ffda]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>

                      <img
                        src={image}
                        alt={project.title}
                        className="relative z-10 w-full h-[170px] object-cover rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 rounded-xl z-20"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="min-h-[360px] rounded-xl border border-white/10 bg-[#111111] p-8 flex flex-col justify-center">
                  <p className="text-[#64ffda] font-mono text-xs tracking-widest mb-6">
                    LANGGRAPH WORKFLOW
                  </p>
                  <div className="space-y-3">
                    {[
                      "Project requirements",
                      "Technology research",
                      "System architecture",
                      "Sprint planning",
                      "Project documentation",
                    ].map((stage, stageIndex) => (
                      <div
                        key={stage}
                        className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 px-4 py-3"
                      >
                        <span className="font-mono text-sm text-[#64ffda]">
                          0{stageIndex + 1}
                        </span>
                        <span className="text-sm text-[#ccd6f6]">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-[#64ffda] font-mono text-sm mb-2">
                  Featured Project
                </p>

                <h3 className="text-3xl font-bold text-[#ccd6f6]">
                  {project.title}
                </h3>

                <p className="text-[#8892b0] mt-2 mb-6">
                  {project.subtitle}
                </p>

                <div className="bg-[#111111] border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-2xl hover:shadow-[#64ffda]/10 hover:-translate-y-1 transition-all duration-300">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-3 mt-6 text-sm font-mono text-[#64ffda]">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {(project.github && project.github !== "#") ||
                (project.demo && project.demo !== "#") ||
                project.video ? (
                  <div className="flex gap-5 mt-6">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        aria-label={`${project.title} on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <FaGithub size={22} />
                      </a>
                    )}

                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        aria-label={`${project.title} live demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}

                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <FaYoutube size={22} />
                        <span>Watch demo</span>
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}