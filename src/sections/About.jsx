import React from "react";
import aboutImg from "../assets/Images/about.png";
import ScrollReveal from "../Components/ScrollReveal";
import { Sparkles, Users, Rocket, Trophy } from "lucide-react";

const features = [
  {
    icon: <Rocket size={22} />,
    title: "Build Fast",
    desc: "Turn innovative ideas into real working products within 36 hours.",
  },
  {
    icon: <Users size={22} />,
    title: "Collaborate",
    desc: "Work with developers, designers, and creative problem-solvers.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Innovate",
    desc: "Create impactful solutions that solve real-world challenges.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Compete",
    desc: "Showcase your talent, network, and win exciting opportunities.",
  },
];

const About = () => {
  return (
    <section className="flex items-center justify-center relative w-full overflow-hidden py-[10vh] bg-black text-white md:h-screen">
      {/* Background Glow Effects */}
      <div className="absolute top-[10%] left-[5%] h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[140px]" />
      <div className="absolute bottom-[0%] right-[0%] h-[25rem] w-[25rem] rounded-full bg-red-500/20 blur-[120px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:45px_45px] opacity-20" />

      <div className="relative z-10 mx-auto flex w-full h-full max-w-7xl flex-col items-center gap-16 px-[2vw] lg:flex-row">
        {/* Left Image Section */}
        <div className="Left relative flex w-full items-center justify-center  lg:w-[48%]">
          {/* Outer Glow */}
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-red-700 via-red-500 to-red-900 opacity-30 blur-3xl" />

          {/* Decorative Ring */}
          <div className="absolute inset-0 rounded-[3rem] border border-red-500/20" />

          {/* Main Image Container */}
          <div className="group relative w-full overflow-hidden rounded-[2.5rem] border border-red-500/20 bg-white/[0.04] shadow-[0_0_60px_rgba(255,0,60,0.18)] backdrop-blur-xl">
            {/* Top Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Animated Shine */}
            <div className="absolute -left-[120%] top-0 z-20 h-full w-[50%] rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />

            <img
              src={aboutImg}
              alt="About Hackathon"
              className="h-[65vh] w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 z-30 flex items-center gap-4 rounded-3xl border border-white/10 bg-black/45 px-6 py-4 backdrop-blur-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20 border border-red-500/20">
                <span className="rajdhani text-2xl font-bold text-red-400">36</span>
              </div>

              <div>
                <p className="rajdhani text-sm uppercase tracking-[0.25em] text-red-300">Hours</p>

                <h4 className="rajdhani text-2xl font-bold leading-none text-white">
                  Non-Stop Innovation
                </h4>
              </div>
            </div>

            {/* Bottom Blur Glow */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-red-900/20 to-transparent" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex w-full flex-col gap-8 lg:w-[55%]">
          {/* Heading */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-14 bg-red-500" />
              <p className="rajdhani text-sm uppercase tracking-[0.35em] text-red-400">
                About Event
              </p>
            </div>

            <h2 className="blowbrush text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] text-transparent bg-gradient-to-r from-white via-red-300 to-red-700 bg-clip-text drop-shadow-[0_0_30px_rgba(255,0,60,0.35)]">
              Calcutta Hacks{" "}
              <div className="text-[clamp(2rem,5vw,5rem)] bg-gradient-to-br from-red-600 to-red-900 inline-block px-4 py-3 font-bold text-white rounded-2xl ml-4 shadow-[0_0_20px_rgba(255,0,60,0.25)]">
                2.0
              </div>
            </h2>
          </div>

          {/* Scroll Reveal Paragraphs */}
          <div className="space-y-6">
            <p className="rajdhani text-[clamp(15px,1.15vw,22px)] leading-relaxed text-zinc-300">
              Calcutta Hacks 2.0 is an intense 36-hour hackathon where developers, designers, and
              innovators come together to build real solutions 💡. It’s a place where ideas evolve
              into working products 🚀 through collaboration, creativity, and rapid execution.
            </p>

            <p className="rajdhani text-[clamp(15px,1.15vw,22px)] leading-relaxed text-zinc-300">
              Work with talented teammates, solve meaningful challenges, connect with
              industry-minded builders, and showcase what you can create under pressure ⏳ while
              learning and growing throughout the journey.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="group relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 rajdhani text-lg font-bold tracking-wide text-white shadow-[0_0_30px_rgba(255,0,60,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,0,60,0.45)]">
              <span className="relative z-10">Explore Hackathon</span>

              <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
