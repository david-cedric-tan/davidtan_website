"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, User, Code } from "lucide-react";

export function BarebonesView() {
  const [activeSection, setActiveSection] = useState<"about" | "projects" | "contact">("about");

  return (
    <div className="min-h-screen bg-david-dark text-david-gray">
      {/* Simple header - same branding, no 3D deps */}
      <header className="border-b border-david-gray/20 bg-white/80 backdrop-blur-sm sticky top-0 z-30 overflow-visible">
        <div className="max-w-5xl mx-auto px-8 py-8 flex items-center">
          {/* Logo — identical to 3D nav */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-david-blue to-david-teal rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base">DT</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-david-blue to-david-teal bg-clip-text text-transparent font-sf-pro">
              David Tan
            </h1>
          </div>

          {/* Nav links — flex-1 centers them between logo and spacer */}
          <nav className="flex-1 flex items-center justify-center gap-8">
            <button
              onClick={() => setActiveSection("about")}
              className={`text-base font-medium transition-colors ${
                activeSection === "about" ? "text-david-teal" : "text-david-gray hover:text-david-blue"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection("projects")}
              className={`text-base font-medium transition-colors ${
                activeSection === "projects" ? "text-david-teal" : "text-david-gray hover:text-david-blue"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`text-base font-medium transition-colors ${
                activeSection === "contact" ? "text-david-teal" : "text-david-gray hover:text-david-blue"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Spacer that mirrors the toggle's footprint so nav links never slide under it */}
          <div className="w-[142px] shrink-0" aria-hidden="true" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {activeSection === "about" && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-david-teal/20 rounded-lg">
                <User className="w-6 h-6 text-david-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-david-blue font-sf-pro">About David</h2>
            </div>
            <p className="text-david-gray leading-relaxed">
              I&apos;m a passionate developer and designer who loves creating immersive digital
              experiences. With a background in both technical development and creative design, I
              bridge the gap between functionality and aesthetics.
            </p>
            <div className="space-y-2">
              <h3 className="text-white font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Three.js", "TypeScript", "Node.js", "Python", "Blender", "Figma"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-david-dark border border-david-teal/30 rounded-full text-sm text-david-teal"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-david-teal/20 rounded-lg">
                <Code className="w-6 h-6 text-david-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-david-blue font-sf-pro">Featured Projects</h2>
            </div>
            <div className="grid gap-4">
              <div className="p-4 bg-white/50 border border-david-gray/20 rounded-lg">
                <h3 className="text-david-blue font-semibold mb-2">3D Portfolio Experience</h3>
                <p className="text-david-gray text-sm mb-2">
                  Interactive 3D room built with Three.js and React. Toggle &quot;3D&quot; in the header to try it.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-david-blue/20 text-david-blue text-xs rounded">Three.js</span>
                  <span className="px-2 py-1 bg-david-teal/20 text-david-teal text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-david-gray/20 text-david-gray text-xs rounded">TypeScript</span>
                </div>
              </div>
              <div className="p-4 bg-white/50 border border-david-gray/20 rounded-lg">
                <h3 className="text-david-blue font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-david-gray text-sm mb-2">Full-stack e-commerce solution with modern UI/UX.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-david-blue/20 text-david-blue text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-david-teal/20 text-david-teal text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-david-gray/20 text-david-gray text-xs rounded">MongoDB</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-david-teal/20 rounded-lg">
                <Mail className="w-6 h-6 text-david-teal" />
              </div>
              <h2 className="text-2xl font-semibold text-david-blue font-sf-pro">Get In Touch</h2>
            </div>
            <p className="text-david-gray leading-relaxed">
              Let&apos;s collaborate on something amazing. Whether you have a project in mind or just want to
              chat about technology and creativity.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:david@example.com"
                className="flex items-center gap-3 p-3 bg-white/50 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
              >
                <Mail className="w-5 h-5 text-david-teal" />
                <span className="text-david-blue">david@example.com</span>
              </a>
              <a
                href="https://github.com/davidtan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/50 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
              >
                <Github className="w-5 h-5 text-david-teal" />
                <span className="text-david-blue">github.com/davidtan</span>
              </a>
              <a
                href="https://linkedin.com/in/davidtan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/50 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-david-teal" />
                <span className="text-david-blue">linkedin.com/in/davidtan</span>
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
