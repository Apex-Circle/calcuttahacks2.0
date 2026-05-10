import React from 'react';

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Twitter = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Mail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);

const Cpu = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const Terminal = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const Globe = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const socialIcons = [Github, Twitter, Instagram, Mail];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden border-t border-red-600/30">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#dc2626 1px, transparent 1px), linear-gradient(90deg, #dc2626 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={32} className="text-red-600" />
              <span className="blowbrush text-[2.4vw] leading-none">
                CALCUTTA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900">HACKS</span>
              </span>
            </div>
            <p className="rajdhani text-gray-400 text-sm leading-relaxed mb-6">
              The premier hacking experience in the city of joy. Break systems, build reality.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-neutral-900 border border-white/10 hover:border-red-600 hover:text-red-500 transition-all duration-300 rounded-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="orbitron text-red-600 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" /> Navigation
            </h4>
            <ul className="space-y-4 rajdhani text-sm text-gray-400">
              {['Home', 'About', 'Schedule', 'Prizes', 'Sponsors'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white hover:pl-2 transition-all duration-300">
                    {'> '}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="orbitron text-red-600 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" /> Resources
            </h4>
            <ul className="space-y-4 rajdhani text-sm text-gray-400">
              {['Code of Conduct', 'Privacy Policy', 'Media Kit', 'Discord Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">
                    {'> '}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-neutral-900/50 p-6 border border-white/5 backdrop-blur-sm">
            <h4 className="orbitron text-white font-bold uppercase text-xs mb-4 flex items-center gap-2">
              <Terminal size={16} className="text-red-600" /> SYSTEM_STATUS: ONLINE
            </h4>
            <p className="rajdhani text-gray-500 text-xs mb-4">
              Join the network for latest updates on registration and tracks.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL_ADDRESS"
                className="bg-black border border-white/10 px-3 py-2 text-xs rajdhani w-full focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="bg-red-600 px-4 py-2 text-xs orbitron font-bold hover:bg-red-700 transition-colors">
                JOIN
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="rajdhani text-gray-600 text-xs tracking-widest uppercase">
            © {currentYear} Calcutta Hacks 2.0 // Managed by The Network
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rajdhani text-gray-500 text-xs">
              <Globe size={14} className="text-red-600" /> KOLKATA, INDIA
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="rajdhani text-gray-500 text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
