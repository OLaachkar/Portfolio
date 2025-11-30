"use client"

export default function Header() {
  return (
    <header className="relative z-30 pointer-events-auto grid grid-cols-2 md:grid-cols-3 items-center p-4 md:p-6 gap-4">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <div className="relative group cursor-pointer">
          <span className="text-white font-light text-xl md:text-2xl tracking-wide transition-all duration-300 hover:text-white/80 hover:tracking-wider">
            Ouadie
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      <nav className="hidden md:flex items-center justify-center space-x-2 pointer-events-auto">
        <a
          href="https://github.com/OLaachkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ouadielaachkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          LinkedIn
        </a>
        <a
          href="https://discord.com/users/986010906876071977"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          Discord
        </a>
      </nav>

      <div className="flex items-center justify-end col-span-1">
        <a
          href="https://www.linkedin.com/in/ouadielaachkar/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer"
        >
          <div className="flex items-center overflow-hidden rounded-full bg-white transition-all duration-300 ease-out group-hover:w-[95px] w-8 h-8">
            {/* Icon - always visible */}
            <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <span className="text-black font-normal text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 pr-2">
              Resume
            </span>
          </div>
        </a>
      </div>
    </header>
  )
}
