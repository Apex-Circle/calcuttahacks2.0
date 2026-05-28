import React, { useRef, useMemo } from "react";
import { gsap } from "gsap";
import TeamCard from "../Components/TeamCard";
import { judges, mentors } from "../data/people.constant";

const JudgesMentors = () => {
  const gridRef = useRef(null);
  const fadeRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const setX = useRef(null);
  const setY = useRef(null);

  const experts = useMemo(() => {
    return [...judges, ...mentors];
  }, []);

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
    <section id="experts" className="w-screen flex flex-col items-center py-[8vh] relative overflow-hidden" data-scroll-section>
      <div className="absolute top-[5%] left-[10%] w-[30vh] h-[30vh] rounded-full bg-red-600 opacity-20 filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[5%] right-[10%] w-[30vh] h-[30vh] rounded-full bg-red-800 opacity-15 filter blur-3xl animate-pulse pointer-events-none" />

      <div className="flex items-center justify-center mt-[8vh] z-10">
        <h2 className="blowbrush text-[clamp(32px,4vw,72px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
          Experts
        </h2>
      </div>

      <p className="text-center rajdhani text-gray-300 max-w-2xl mt-4 px-4">
        Experienced mentors and judges available to guide and evaluate projects.
      </p>

      <div
        ref={initGrid}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="relative w-[90%] max-w-7xl mt-[6vh] z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        style={{ "--x": "50%", "--y": "50%", "--r": "350px" }}
      >
        {experts.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}

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

export default JudgesMentors;
