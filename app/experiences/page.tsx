"use client"

import { useState } from "react"
import ShaderBackground from "@/components/shader-background"
import Header from "@/components/header"

type Section = "education" | "projects" | "future"

export default function ExperiencesPage() {
  const [activeSection, setActiveSection] = useState<Section>("education")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const educationContent = [
    {
      title: "VWO 4 (Pre-university education)",
      institution: "Het Amsterdams Lyceum",
      period: "Current",
      description:
        "Studying at one of Amsterdam's leading secondary schools while building AI products and learning software development",
    },
  ]

  const projectsContent = [
    {
      title: "Verba",
      description:
        "AI character creation platform that lets users design and connect conversational AIs to Discord, Twitter/X, Bluesky, and soon WhatsApp. Handling everything from backend infrastructure to UI design and deployment.",
      tech: ["Node.js", "AI/LLM Integration", "Discord API", "Twitter API", "Docker", "And More.."],
      image: "https://i.ibb.co/ycSJnGbK/Screenshot-2025-10-21-165110.png",
      link: "verba.ink",
    },
    {
      title: "Portfolio Website",
      description:
        "Fully AI-assisted and customized portfolio website showcasing projects, skills, and personal growth as a young developer exploring AI and product design.",
      tech: ["React", "Next.js", "Tailwind CSS", "WebGL"],
      image: "https://i.ibb.co/RpDS8Wbj/Screenshot-2025-10-21-164906.png",
    },
  ]

  const futureContent = [
    {
      title: "Build Innovative AI Systems",
      description: "Creating AI systems that make technology more natural, accessible, and creative for everyone",
      status: "In Progress",
    },
    {
      title: "Grow Verba into a Global Platform",
      description:
        "Expanding Verba's reach and capabilities to become a leading AI character creation platform worldwide",
      status: "Active",
    },
    {
      title: "Found or Join AI-Focused Tech Company",
      description:
        "Leading projects that push the limits of what AI can do, focusing on machine learning, software architecture, and business development",
      status: "Long-term Goal",
    },
  ]

  return (
    <ShaderBackground scrollable className="relative min-h-screen bg-black">
      <Header />

      <main className="relative z-20 flex px-4 md:px-8 py-12 md:py-20 pb-20">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-light text-sm flex items-center justify-between"
            >
              <span>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>
              <svg
                className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <aside
            className={`${mobileMenuOpen ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0`}
          >
            <div className="lg:sticky lg:top-24 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6">
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />

              <h2 className="text-xl md:text-2xl font-light text-white mb-4 md:mb-6">Experiences</h2>

              <nav className="space-y-2">
                <button
                  onClick={() => {
                    setActiveSection("education")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-light transition-all duration-200 ${
                    activeSection === "education"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => {
                    setActiveSection("projects")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-light transition-all duration-200 ${
                    activeSection === "projects"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    setActiveSection("future")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-light transition-all duration-200 ${
                    activeSection === "future"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  Future
                </button>
              </nav>

              <a
                href="/"
                className="mt-4 md:mt-6 block w-full text-center px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-light transition-all duration-200 hover:bg-white/10 hover:border-white/30"
              >
                ← Back to Home
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            {/* Education Section */}
            {activeSection === "education" && (
              <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8">Education</h1>
                {educationContent.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="absolute top-0 left-4 md:left-8 right-4 md:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-white mb-2">{item.title}</h3>
                        <p className="text-sm font-light text-white/70">{item.institution}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-white/5 text-white/60 text-xs font-light border border-white/10 self-start">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-light text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8">Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  {projectsContent.map((project, index) => (
                    <div
                      key={index}
                      className="group rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 md:p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg md:text-xl font-light text-white">{project.title}</h3>
                          {project.link && (
                            <a
                              href={`https://${project.link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-light text-white/60 hover:text-white/90 transition-colors"
                            >
                              {project.link} →
                            </a>
                          )}
                        </div>
                        <p className="text-xs md:text-sm font-light text-white/60 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 md:px-3 py-1 rounded-full bg-white/5 text-white/70 text-[10px] md:text-xs font-light border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Future Section */}
            {activeSection === "future" && (
              <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8">Future</h1>
                {futureContent.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className="absolute top-0 left-4 md:left-8 right-4 md:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-light text-white mb-2">{item.title}</h3>
                      <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-xs font-light border border-purple-400/30 self-start">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm font-light text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
