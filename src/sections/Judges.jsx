import React from "react";
import TeamCard from "../Components/TeamCard";
import { judges } from "../data/people.constant";

const Judges = () => {
  return (
    <section id="judges" className="w-screen flex flex-col items-center py-[8vh] relative" data-scroll-section>
      <div className="flex items-center justify-center mt-[6vh] z-10">
        <h2 className="blowbrush text-[clamp(28px,4vw,64px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_20px_rgba(255,0,60,0.7)]">
          Judges
        </h2>
      </div>

      <p className="text-center rajdhani text-gray-300 max-w-2xl mt-4 px-4">
        Our panel of expert judges will evaluate projects across technical depth, innovation, and impact.
      </p>

      <div className="w-[90%] max-w-6xl mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {judges.map((j) => (
          <TeamCard key={j.id} member={j} />
        ))}
      </div>
    </section>
  );
};

export default Judges;
