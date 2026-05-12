import { useState, useMemo, useRef } from "react";
import { gsap } from "gsap";
import teamData from "../data/team.json";

const departments = [
  "All",
  "Leadership",
  "Web",
  "Design",
  "Social Media",
  "PR & Outreach",
  "Management",
  "Operations",
  "AI & ML",
];

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TeamCard = ({ member }) => {
  const dept = Array.isArray(member.department) ? member.department[0] : member.department;

  return (
    <a
      href={member.socials.linkedin !== "#" ? member.socials.linkedin : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col w-full cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      {/* Fixed-ratio image container */}
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Department badge */}
        <span className="absolute top-3 right-3 orbitron text-[clamp(8px,0.55vw,11px)] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white">
          {dept}
        </span>

        {/* LinkedIn hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-400/10 ">
         
        </div>
      </div>

      {/* Text below card */}
      <div className="mt-3 px-1">
        <h3 className="orbitron text-[clamp(10px,0.9vw,15px)] font-bold text-red-500 uppercase tracking-wide leading-tight group-hover:text-red-400 transition-colors truncate">
          {member.name}
        </h3>
        <p className="rajdhani text-[clamp(10px,0.85vw,14px)] text-gray-400 mt-0.5 truncate">
          {member.role}
        </p>
        <p className="rajdhani text-[clamp(9px,0.75vw,13px)] text-gray-600 truncate">
          {member.handle}
        </p>
      </div>
    </a>
  );
};

const Team = () => {
  const [activeDept, setActiveDept] = useState("All");
  const gridRef = useRef(null);
  const fadeRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const setX = useRef(null);
  const setY = useRef(null);

  const filtered = useMemo(() => {
    if (activeDept === "All") return teamData;
    return teamData.filter((m) =>
      Array.isArray(m.department) ? m.department.includes(activeDept) : m.department === activeDept,
    );
  }, [activeDept]);

  const initGrid = (el) => {
    if (!el) return;
    gridRef.current = el;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  };

  const handleMove = (e) => {
    const r = gridRef.current.getBoundingClientRect();
    gsap.to(pos.current, {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
      duration: 0.45,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: 0.6, overwrite: true });
  };

  return (
    <section
      id="team"
      className="w-screen flex flex-col items-center py-[8vh] relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-[5%] left-[10%] w-[30vh] h-[30vh] rounded-full bg-red-600 opacity-20 filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[5%] right-[10%] w-[30vh] h-[30vh] rounded-full bg-red-800 opacity-15 filter blur-3xl animate-pulse pointer-events-none" />

      {/* Title */}
      <div className="flex items-center justify-center mt-[20vh] z-10">
        <h2 className="blowbrush text-[clamp(32px,4vw,72px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
          Team
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-[5vh] z-10 px-6">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`orbitron text-[clamp(9px,0.7vw,12px)] font-bold uppercase tracking-widest px-4 py-2 rounded border transition-all duration-200 ${
              activeDept === dept
                ? "bg-red-600 border-red-600 text-white shadow-[0_0_14px_rgba(220,38,38,0.6)]"
                : "bg-transparent border-white/20 text-gray-400 hover:border-red-600/60 hover:text-white"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Grid with ChromaGrid spotlight effect */}
      <div
        ref={initGrid}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="relative w-[90%] max-w-7xl mt-[6vh] z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        style={{ "--x": "50%", "--y": "50%", "--r": "350px" }}
      >
        {filtered.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}

        {/* Grayscale mask — always on, reveals color at cursor */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            backdropFilter: "grayscale(1) brightness(0.75)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.75)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.50) 75%, rgba(0,0,0,0.68) 88%, white 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 15%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.50) 75%, rgba(0,0,0,0.68) 88%, white 100%)",
          }}
        />

        {/* Fade overlay — full grayscale when mouse is away */}
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: "grayscale(1) brightness(0.75)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.75)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,0.90) 30%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0.50) 75%, rgba(255,255,255,0.32) 88%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 15%, rgba(255,255,255,0.90) 30%, rgba(255,255,255,0.78) 45%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0.50) 75%, rgba(255,255,255,0.32) 88%, transparent 100%)",
            opacity: 1,
          }}
        />
      </div>
    </section>
  );
};

export default Team;
