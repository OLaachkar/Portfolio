"use client"

import { useState } from "react"

export default function HeroContent() {
  const [showProjects, setShowProjects] = useState(false)

  const projects = [
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
      <main className="relative z-20 flex items-center justify-center px-4 md:px-8 h-full py-12 md:py-20 pb-24 md:pb-40">
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
              <a
                href="/experiences"
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer inline-block"
              >
                Experiences
              </a>
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
              {projects.map((project, index) => (
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
    </>
  )
}
