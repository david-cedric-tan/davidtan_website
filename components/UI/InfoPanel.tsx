"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail, Music, Code, User } from "lucide-react";
import { useStore } from "@/store/useStore";

export function InfoPanel() {
  const { activePanel, setActivePanel } = useStore();

  const panelContent = {
    about: {
      title: "About David",
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-44 h-44 rounded-full border-2 border-david-teal/40 overflow-hidden">
              <img
                src="/img/notsupercropped.jpg"
                alt="David Tan"
                className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
          <p className="text-david-gray leading-relaxed">
            Hiya! I'm David Tan, a highly motivated, multilingual, and adaptable
            4th year student with a passion for emerging technologies in
            Artificial Intelligence and financial markets, driven to make a
            meaningful impact in the world of technology.
          </p>
          <div className="space-y-2">
            <h4 className="text-white font-semibold">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Java",
                "SQL",
                "PostgreSQL",
                "Django",
                "HTML",
                "CSS",
                "Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-david-dark/50 border border-david-teal/30 rounded-full text-sm text-david-teal"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Featured Projects",
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="p-4 bg-david-dark/30 border border-david-gray/20 rounded-lg">
              <h4 className="text-white font-semibold mb-2">
                3D Portfolio Experience
              </h4>
              <p className="text-david-gray text-sm mb-2">
                Interactive 3D room built with Three.js and React
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-david-blue/20 text-david-blue text-xs rounded">
                  Three.js
                </span>
                <span className="px-2 py-1 bg-david-teal/20 text-david-teal text-xs rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-david-gray/20 text-david-gray text-xs rounded">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="p-4 bg-david-dark/30 border border-david-gray/20 rounded-lg">
              <h4 className="text-white font-semibold mb-2">
                E-commerce Platform
              </h4>
              <p className="text-david-gray text-sm mb-2">
                Full-stack e-commerce solution with modern UI/UX
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-david-blue/20 text-david-blue text-xs rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-david-teal/20 text-david-teal text-xs rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-david-gray/20 text-david-gray text-xs rounded">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    music: {
      title: "Music & Creativity",
      icon: <Music className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-david-gray leading-relaxed">
            Music is a huge part of my creative process. I believe that good
            music and good code share the same principles - rhythm, harmony, and
            the ability to tell a story.
          </p>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Currently Listening</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Midnight City
                  </p>
                  <p className="text-david-gray text-xs">M83</p>
                </div>
                <div className="w-2 h-2 bg-david-teal rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    Blinding Lights
                  </p>
                  <p className="text-david-gray text-xs">The Weeknd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    contact: {
      title: "Get In Touch",
      icon: <Mail className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-david-gray leading-relaxed">
            Let's collaborate on something amazing. Whether you have a project
            in mind or just want to chat about technology and creativity.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:davidcedrictan@gmail.com"
              className="flex items-center space-x-3 p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-david-teal" />
              <span className="text-white">davidcedrictan@gmail.com</span>
            </a>
            <a
              href="https://github.com/david-cedric-tan"
              className="flex items-center space-x-3 p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
            >
              <Github className="w-5 h-5 text-david-teal" />
              <span className="text-white">github.com/david-cedric-tan</span>
            </a>
            <a
              href="www.linkedin.com/in/david-cedric-t-45a74318b"
              className="flex items-center space-x-3 p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-david-teal" />
              <span className="text-white">
                linkedin.com/in/davidcedricctan
              </span>
            </a>
          </div>
        </div>
      ),
    },
  };

  const currentContent = panelContent[activePanel as keyof typeof panelContent];

  if (!currentContent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-96 bg-david-dark/95 backdrop-blur-lg border-l border-david-gray/20 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-david-teal/20 rounded-lg">
                {currentContent.icon}
              </div>
              <h2 className="text-xl font-semibold text-white font-sf-pro">
                {currentContent.title}
              </h2>
            </div>
            <button
              onClick={() => setActivePanel(null)}
              className="p-2 hover:bg-david-gray/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-david-gray hover:text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white">{currentContent.content}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
