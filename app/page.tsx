"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"

type Section = "education" | "projects" | "future"
type View = "home" | "experiences"

export default function Portfolio() {
  const [currentView, setCurrentView] = useState<View>("home")
  const [activeSection, setActiveSection] = useState<Section>("education")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  // Reset scroll position and disable/enable body scroll when switching views
  useEffect(() => {
    window.scrollTo(0, 0)
    if (currentView === "home") {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
  }, [currentView])

  const educationContent = [
    {
      title: "VWO 4 (Pre-university education)",
      institution: "Het Amsterdams Lyceum",
      period: "Current",
      description:
        "Studying at one of Amsterdam's leading secondary schools while building products and learning software development",
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

  const homeProjects = [
    {
      title: "Verba",
      description: "AI character creation platform with Discord, Twitter/X, and Bluesky integration",
      tech: ["Node.js", "AI/LLM", "Discord API"],
      image: "https://i.ibb.co/ycSJnGbK/Screenshot-2025-10-21-165110.png",
    },
    {
      title: "Portfolio Website",
      description: "Fully AI-assisted portfolio showcasing projects and skills",
      tech: ["React", "Next.js", "Tailwind"],
      image: "https://i.ibb.co/RpDS8Wbj/Screenshot-2025-10-21-164906.png",
    },
  ]

  return (
    <>
        <Header />

      {/* Home View */}
      <main
        className={`absolute inset-0 z-20 flex items-center justify-center px-4 md:px-8 py-12 md:py-20 pb-24 md:pb-40 overflow-hidden transition-all duration-700 ${
          currentView === "home" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div
          className={`max-w-4xl w-full text-center transition-all duration-700 ${showProjects ? "mt-12 md:mt-20" : ""}`}
        >
          <div
            className={`transition-all duration-700 ${showProjects ? "opacity-0 scale-95 -translate-y-8 pointer-events-none absolute" : "opacity-100 scale-100 translate-y-0"}`}
          >
            <div
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 md:mb-6 relative"
              style={{
                filter: "url(#glass-effect)",
              }}
            >
              <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
              <span className="text-white/90 text-[10px] md:text-xs font-light relative z-10">
                16-year-old developer from Amsterdam
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-light text-white mb-4 md:mb-6 px-2">
              <span className="font-medium italic instrument"></span> Developer
              <br />
              <span className="font-light tracking-tight text-white">& Entrepreneur</span>
            </h1>

            <p className="text-xs md:text-sm font-light text-white/70 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
              Building innovative AI systems and digital products. Founder of Verba, an AI character creation platform.
              Passionate about merging creativity with technology through web apps, automation, and conversational AI.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 flex-wrap px-4">
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                JavaScript
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                TypeScript
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                Python
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                React
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                Node.js
              </span>
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-white/80 text-[10px] md:text-xs font-light border border-white/10">
                AI/LLM
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap px-4">
              <button
                onClick={() => setCurrentView("experiences")}
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer inline-block"
              >
                Experiences
              </button>
              <a
                href="https://www.linkedin.com/in/ouadielaachkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer inline-block"
              >
                Get in Touch
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-1 md:mb-2">2+</div>
                <div className="text-[10px] md:text-xs font-light text-white/60">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-1 md:mb-2">16</div>
                <div className="text-[10px] md:text-xs font-light text-white/60">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-1 md:mb-2">VWO 4</div>
                <div className="text-[10px] md:text-xs font-light text-white/60">Student</div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${showProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none absolute"}`}
          >
            <div className="flex items-center justify-between mb-6 md:mb-8 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">Featured Work</h2>
              <button
                onClick={() => setShowProjects(false)}
                className="px-4 md:px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-light transition-all duration-200 hover:bg-white/10 hover:border-white/30 cursor-pointer"
              >
                ← Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 px-4">
              {homeProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: showProjects ? "slideInUp 0.6s ease-out forwards" : "none",
                  }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-white mb-2">{project.title}</h3>
                    <p className="text-xs font-light text-white/60 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-light border border-white/10"
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
        </div>
      </main>

      {/* Experiences View */}
      <main
        className={`absolute inset-0 z-20 flex items-start lg:items-center justify-center overflow-y-auto px-3 sm:px-4 md:px-8 py-4 sm:py-8 md:py-12 lg:py-20 pb-16 sm:pb-20 transition-all duration-700 ${
          currentView === "experiences" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className="lg:hidden mb-2 sm:mb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-light text-xs sm:text-sm flex items-center justify-between transition-all duration-200 active:bg-white/10"
            >
              <span className="truncate">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ml-2 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <aside
            className={`overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
            } lg:max-h-none lg:opacity-100 lg:block w-full lg:w-64 flex-shrink-0 lg:mb-0`}
          >
            <div className="lg:sticky lg:top-24 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-3 sm:p-4 md:p-6">
              <div className="absolute top-0 left-3 sm:left-4 right-3 sm:right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />

              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-3 sm:mb-4 md:mb-6">Experiences</h2>

              <nav className="space-y-1.5 sm:space-y-2">
                <button
                  onClick={() => {
                    setActiveSection("education")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-light transition-all duration-200 active:scale-[0.98] ${
                    activeSection === "education"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 active:text-white/80 active:bg-white/5"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => {
                    setActiveSection("projects")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-light transition-all duration-200 active:scale-[0.98] ${
                    activeSection === "projects"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 active:text-white/80 active:bg-white/5"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    setActiveSection("future")
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-light transition-all duration-200 active:scale-[0.98] ${
                    activeSection === "future"
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/60 active:text-white/80 active:bg-white/5"
                  }`}
                >
                  Future
                </button>
              </nav>

              <button
                onClick={() => setCurrentView("home")}
                className="mt-3 sm:mt-4 md:mt-6 block w-full text-center px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] sm:text-xs font-light transition-all duration-200 active:bg-white/10 active:border-white/30 active:scale-[0.98]"
              >
                Back to Home
              </button>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {/* Education Section */}
            {activeSection === "education" && (
              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 md:mb-8">Education</h1>
                {educationContent.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 transition-all duration-300 active:bg-white/10 active:border-white/20"
                  >
                    <div className="absolute top-0 left-3 sm:left-4 md:left-8 right-3 sm:right-4 md:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-1 sm:mb-2 break-words">{item.title}</h3>
                        <p className="text-xs sm:text-sm font-light text-white/70 break-words">{item.institution}</p>
                      </div>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 text-white/60 text-[10px] sm:text-xs font-light border border-white/10 self-start whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-white/60 leading-relaxed break-words">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 md:mb-8">Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {projectsContent.map((project, index) => (
                    <div
                      key={index}
                      className="group rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 active:bg-white/10 active:border-white/20"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-active:scale-105"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                          <h3 className="text-base sm:text-lg md:text-xl font-light text-white break-words">{project.title}</h3>
                          {project.link && (
                            <a
                              href={`https://${project.link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] sm:text-xs font-light text-white/60 active:text-white/90 transition-colors whitespace-nowrap"
                            >
                              {project.link} →
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm md:text-sm font-light text-white/60 mb-3 sm:mb-4 leading-relaxed break-words">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/70 text-[9px] sm:text-[10px] md:text-xs font-light border border-white/10 break-words"
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
              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-in fade-in duration-500">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 md:mb-8">Future</h1>
                {futureContent.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 transition-all duration-300 active:bg-white/10 active:border-white/20"
                  >
                    <div className="absolute top-0 left-3 sm:left-4 md:left-8 right-3 sm:right-4 md:right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-1 sm:mb-2 break-words flex-1">{item.title}</h3>
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-light border border-purple-400/30 self-start whitespace-nowrap">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-light text-white/60 leading-relaxed break-words">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
