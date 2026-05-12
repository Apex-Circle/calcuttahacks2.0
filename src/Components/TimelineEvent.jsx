import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TimelineEvent = ({
  time,
  title,
  description,
  icon,
  isActive,
  onClick,
  isLast,
  activeTab,
}) => {
  const eventRef = useRef(null);
  const dayLabels = ["Day 1", "Day 2", "Day 3"];

  useEffect(() => {
    gsap.set(eventRef.current, {
      opacity: 0,
      x: -50,
    });
  }, []);

  return (
    <div
      ref={eventRef}
      className={`timeline-event flex flex-col sm:flex-row mb-4 sm:mb-6 md:mb-8 cursor-pointer group transition-all duration-300 ${isActive ? "scale-100" : "hover:scale-105"}`}
      onClick={onClick}
    >
      <div className="relative flex items-start sm:items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-800 to-black border-2 border-red-500 flex items-center justify-center z-10 shadow-xl text-xl sm:text-2xl
          ${isActive ? "ring-4 ring-red-400 ring-opacity-75 shadow-2xl shadow-red-500/50" : "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:border-red-400"} 
          transition-all duration-300 flex-shrink-0`}
        >
          {icon}
        </div>
        {!isLast && (
          <div className="hidden sm:block absolute w-1 bg-gradient-to-b from-red-400 to-red-900 h-24 md:h-32 top-16 md:top-20 -translate-x-0 z-0"></div>
        )}
        {!isLast && (
          <div className="sm:hidden absolute h-1 bg-gradient-to-r from-red-400 to-red-900 w-12 left-14 top-6 z-0"></div>
        )}
      </div>

      <div
        className={`m-2 sm:m-3 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-red-900/75 aged-paper transition-all duration-300 w-full sm:w-[calc(100%-80px)] md:w-[90%] rounded-lg sm:rounded-xl backdrop-blur-sm
          ${
            isActive
              ? "text-white shadow-[0_10px_35px_-5px_rgba(239,68,68,0.4)] border-red-500/50 bg-gradient-to-br from-red-900/20 to-red-800/10"
              : "shadow-md hover:shadow-xl hover:border-red-700/50 hover:bg-gradient-to-br hover:from-red-900/10 hover:to-red-800/5"
          }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <span
            className={`font-mono font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit
            ${isActive ? "bg-red-900/50 text-red-100 border border-red-500/50" : "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md"}`}
          >
            {time}
          </span>

          {isActive && (
            <span className="text-red-300 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border border-red-400/50 bg-red-900/30">
              {dayLabels[activeTab]}

            </span>
          )}
        </div>

        <h3
          className={`text-xl sm:text-2xl md:text-3xl font-bold mt-3 orbitron transition-colors duration-300 ${isActive ? "text-white" : "text-red-300 group-hover:text-red-200"}`}
        >
          {title}
        </h3>

        {isActive && (
          <p className="mt-3 md:mt-4 leading-relaxed text-base sm:text-lg md:text-xl text-gray-100 rajdhani opacity-95 font-light">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineEvent;
