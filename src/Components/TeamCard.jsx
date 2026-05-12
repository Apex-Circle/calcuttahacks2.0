import React from "react";

const TeamCard = ({ member }) => {
  const dept = Array.isArray(member.department) ? member.department[0] : member.department;

  return (
    <a
      href={member.socials?.linkedin && member.socials.linkedin !== "#" ? member.socials.linkedin : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col w-full cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3/4" }}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <span className="absolute top-3 right-3 orbitron text-[clamp(8px,0.55vw,11px)] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white">
          {dept}
        </span>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-400/10 "></div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="orbitron text-[clamp(10px,0.9vw,15px)] font-bold text-red-500 uppercase tracking-wide leading-tight group-hover:text-red-400 transition-colors truncate">
          {member.name}
        </h3>
        <p className="rajdhani text-[clamp(10px,0.85vw,14px)] text-gray-400 mt-0.5 truncate">{member.role}</p>
        <p className="rajdhani text-[clamp(9px,0.75vw,13px)] text-gray-600 truncate">{member.handle}</p>
      </div>
    </a>
  );
};

export default TeamCard;
