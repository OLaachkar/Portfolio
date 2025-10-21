"use client"

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-6 right-6 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <svg
                fill="currentColor"
                viewBox="0 0 147 70"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-7 translate-x-[-0.5px] text-white/70 transition-colors duration-200 hover:text-white"
              >
                <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
                <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
              </svg>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-xs font-light text-center">
              © {new Date().getFullYear()} All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-xs font-light transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-xs font-light transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-xs font-light transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-white/60 hover:text-white text-xs font-light transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
