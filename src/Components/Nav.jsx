import React, { useState } from "react";

const links = ["About", "Tracks", "Cradles", "Schedule", "Sponsors"];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-screen fixed top-0 left-0 z-50 bg-[#0a0a0a] border-b border-red-900/40">
      <div className="max-w-7xl mx-auto px-6 h-[6vh] min-h-[52px] flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2 select-none shrink-0">
          <span className="orbitron text-white font-bold text-[clamp(13px,1.3vw,20px)] tracking-widest uppercase">
            Calcutta
          </span>
          <span className="blowbrush text-[clamp(20px,2vw,30px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_10px_rgba(255,0,60,0.7)]">
            HACKS
          </span>
          <span className="orbitron text-[clamp(10px,0.85vw,14px)] font-bold px-[0.4vw] py-[0.15vw] bg-gradient-to-br from-red-600 to-red-900 text-white rounded">
            2.0
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-[clamp(12px,2vw,36px)]">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="orbitron text-[clamp(11px,0.9vw,15px)] font-semibold tracking-widest text-gray-300 hover:text-red-400 transition-colors duration-200 uppercase"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#register"
          className="hidden md:inline-block shrink-0 orbitron text-[clamp(11px,0.9vw,15px)] font-bold tracking-widest uppercase px-[clamp(10px,1vw,18px)] py-[clamp(6px,0.5vw,10px)] bg-gradient-to-r from-red-600 to-red-800 text-white rounded hover:scale-105 hover:shadow-[0_0_16px_rgba(255,0,60,0.7)] transition-all duration-300"
        >
          Join Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 bg-red-500 transition-all duration-300 ${
                open && i === 0 ? "rotate-45 translate-y-1.5" :
                open && i === 1 ? "opacity-0" :
                open && i === 2 ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-red-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="orbitron text-sm font-semibold tracking-widest text-gray-300 hover:text-red-400 uppercase"
            >
              {l}
            </a>
          ))}
          <a
            href="#register"
            className="orbitron text-sm font-bold tracking-widest uppercase px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded text-center"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
