import React, { useState, useEffect, useRef } from "react";

import { FaCalendarAlt } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { day1Events, day2Events } from "../data/TimeLine.constant";
import TimelineEvent from "../Components/TimelineEvent";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);
  const timelineRef = useRef(null);

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
    <div id="timeline" className="w-full min-h-screen py-20 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mt-[20vh] z-10">
            <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
              Time Line
            </h2>
          </div>
          <p className="text-xl text-white max-w-2xl mx-auto rajdhani">
            Your guide to all activities during Calcutta &lt;Hacks/&gt;
          </p>
        </div>

        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-4">
            <FaCalendarAlt className="text-2xl text-white" />
            <div className="text-lg font-bold text-white">
              {activeTab === 0 ? "December 13, 2025" : "December 14, 2025"}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-16 orbitron ">
          <div className="flex rounded-xl shadow-lg overflow-hidden bg-green-900/10 border border-green-500/20">
            <button
              className={`py-3 px-10 font-semibold text-lg transition-all duration-300
                ${
                  activeTab === 0
                    ? "bg-gradient-to-b from-red-400 to-red-900 text-white shadow-inner"
                    : "bg-gradient-to-b bg-[#b09355]  text-white hover:bg-[#ece6d6]"
                }`}
              onClick={() => {
                setActiveTab(0);
                setActiveEvent(null);
              }}
            >
              Day 1
            </button>
            <button
              className={`py-3 px-10 font-semibold text-lg transition-all duration-300
                ${
                  activeTab === 1
                    ? "bg-gradient-to-b from-red-400 to-red-900 text-white shadow-inner"
                    : "bg-gradient-to-b bg-[#b09355]  text-white hover:bg-[#ece6d6]"
                }`}
              onClick={() => {
                setActiveTab(1);
                setActiveEvent(null);
              }}
            >
              Day 2
            </button>
          </div>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto pl-4 relative">
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
        </div>
      </div>
    </div>
  );
};

export default Timeline;
