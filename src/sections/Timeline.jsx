import React, { useState, useEffect, useRef } from "react";

import { FaCalendarAlt } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { day1Events, day2Events, day3Events } from "../data/TimeLine.constant";
import TimelineEvent from "../Components/TimelineEvent";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);
  const timelineRef = useRef(null);
  const dates = ["December 13, 2026", "December 14, 2025", "December 15, 2025"];

  const handleEventClick = (index) => {
    setActiveEvent(activeEvent === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineEvents = gsap.utils.toArray(".timeline-event");

      timelineEvents.forEach((event) => {
        gsap.to(event, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "circ.in",
          stagger: 0.05,
          scrollTrigger: {
            trigger: event,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div
      id="timeline"
      className="relative w-full min-h-screen py-8 md:py-20 bg-linear-to-b from-red-900/20 via-black to-red-900/20"
      
    >



      {/* Ambient blobs */}
      <div className="absolute top-[30%] left-[4%] w-[25vh] h-[25vh] rounded-full bg-red-600 opacity-20 filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[25vh] h-[25vh] rounded-full bg-red-800 opacity-15 filter blur-3xl animate-pulse pointer-events-none" />


      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center mt-8 md:mt-[15vh] z-10 mb-4 md:mb-6">
            <h2 className="blowbrush text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-700 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)] animate-pulse">
              Time Line
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto rajdhani font-light px-2">
            Your guide to all activities during Calcutta &lt;Hacks/&gt;
          </p>
        </div>

        <div className="flex justify-center items-center mb-8 md:mb-12">
          <div className="flex items-center space-x-2 md:space-x-4 bg-red-900/10 backdrop-blur px-4 md:px-6 py-2 md:py-3 rounded-full border border-red-500/20">
            <FaCalendarAlt className="text-xl md:text-2xl text-red-400" />
            <div className="text-sm md:text-lg font-bold text-white">
              {dates[activeTab]}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8 md:mb-16 orbitron">
          <div className="flex gap-2 sm:gap-3 md:gap-4 rounded-2xl p-2 sm:p-3 bg-gradient-to-r from-red-950/40 via-red-900/30 to-red-950/40 backdrop-blur-xl border border-red-500/40 shadow-2xl">
            <button
              className={`relative py-3 sm:py-4 px-6 sm:px-10 md:px-14 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 rounded-lg overflow-hidden group
                ${activeTab === 0
                  ? "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-2xl shadow-red-600/60 scale-105"
                  : "bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-gray-100 hover:from-red-900/40 hover:to-red-800/40 hover:text-white hover:shadow-xl hover:shadow-red-500/30"
                } before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700`}
              onClick={() => {
                setActiveTab(0);
                setActiveEvent(null);
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">

                Day 1
              </span>
            </button>
            <button
              className={`relative py-3 sm:py-4 px-6 sm:px-10 md:px-14 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 rounded-lg overflow-hidden group
                ${activeTab === 1
                  ? "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-2xl shadow-red-600/60 scale-105"
                  : "bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-gray-100 hover:from-red-900/40 hover:to-red-800/40 hover:text-white hover:shadow-xl hover:shadow-red-500/30"
                } before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700`}
              onClick={() => {
                setActiveTab(1);
                setActiveEvent(null);
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">

                Day 2
              </span>
            </button>
            <button
              className={`relative py-3 sm:py-4 px-6 sm:px-10 md:px-14 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 rounded-lg overflow-hidden group
                ${activeTab === 2
                  ? "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-2xl shadow-red-600/60 scale-105"
                  : "bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-gray-100 hover:from-red-900/40 hover:to-red-800/40 hover:text-white hover:shadow-xl hover:shadow-red-500/30"
                } before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700`}
              onClick={() => {
                setActiveTab(2);
                setActiveEvent(null);
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">

                Day 3
              </span>
            </button>
          </div>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto pl-2 sm:pl-4 md:pl-6 lg:pl-8 relative">
          {activeTab === 0 &&
            day1Events.map((event, index) => (
              <TimelineEvent
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                icon={event.icon}
                isActive={activeEvent === index}
                onClick={() => handleEventClick(index)}
                isLast={index === day1Events.length - 1}
                activeTab={activeTab}
              />
            ))}

          {activeTab === 1 &&
            day2Events.map((event, index) => (
              <TimelineEvent
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                icon={event.icon}
                isActive={activeEvent === index}
                onClick={() => handleEventClick(index)}
                isLast={index === day2Events.length - 1}
                activeTab={activeTab}
              />
            ))}

          {activeTab === 2 &&
            day3Events.map((event, index) => (
              <TimelineEvent
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                icon={event.icon}
                isActive={activeEvent === index}
                onClick={() => handleEventClick(index)}
                isLast={index === day3Events.length - 1}
                activeTab={activeTab}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
