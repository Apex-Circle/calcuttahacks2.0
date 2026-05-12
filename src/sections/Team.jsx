import { useState, useMemo, useRef } from "react";
import { gsap } from "gsap";
import teamData from "../data/team.json";
import TeamCard from "../Components/TeamCard";

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

// TeamCard is now a shared component at ../Components/TeamCard

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
