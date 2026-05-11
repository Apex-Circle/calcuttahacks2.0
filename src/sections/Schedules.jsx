
import { useState } from "react";

export default function Schedules() {

  const [activeDay, setActiveDay] = useState("day1");

  const scheduleData = {
    day1: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        description: "Welcome session and hackathon kickoff 🚀",
      },
      {
        time: "11:00 AM",
        title: "Team Formation",
        description: "Meet developers, designers & innovators 🤝",
      },
      {
        time: "02:00 PM",
        title: "Mentorship Round",
        description: "Discuss ideas with mentors 💡",
      },
    ],

    day2: [
      {
        time: "10:00 AM",
        title: "Project Submission",
        description: "Final submission deadline ⏳",
      },
      {
        time: "01:00 PM",
        title: "Final Presentation",
        description: "Pitch your project before judges 🎤",
      },
      {
        time: "05:00 PM",
        title: "Prize Distribution",
        description: "Winners announcement & closing 🎉",
      },
    ],
  };

  return (
    <section className="min-h-screen bg-black text-white px-[8%] py-24 relative overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-[20%] right-[-100px] w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-center mt-[20vh] z-10">
          <h2 className="blowbrush text-[4vw] leading-none mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
         Event  Timeline
        </h2>
        </div>

        {/* TABS */}
        <div className="flex gap-5 mb-10 flex-wrap">

          <button
            onClick={() => setActiveDay("day1")}
            className={`px-8 mb-8 py-3 rounded-xl border transition duration-300 ${
              activeDay === "day1"
                ? "bg-gradient-to-r from-red-600 to-red-400 border-red-500"
                : "bg-[#111] border-red-500"
            }`}
          >
            Day 1
          </button>

          <button
            onClick={() => setActiveDay("day2")}
            className={`px-8 py-3 mb-8 rounded-xl border transition duration-300 ${
              activeDay === "day2"
                ? "bg-gradient-to-r from-red-600 to-red-400 border-red-500"
                : "bg-[#111] border-red-500"
            }`}
          >
            Day 2
          </button>

        </div>

        {/* SCHEDULE CARDS */}
        <div className="flex flex-col gap-6">

          {scheduleData[activeDay].map((item, index) => (

            <div
              key={index}
              className="flex md:flex-row flex-col gap-8 items-start md:items-center bg-[#111]/90 border border-red-500/30 p-6 rounded-3xl backdrop-blur-md hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition duration-300"
            >

              {/* TIME BOX */}
              <div className="min-w-[110px] h-[110px] rounded-2xl bg-gradient-to-b from-red-600 to-red-900 flex flex-col items-center justify-center">

                <span className="text-2xl font-bold">
                  {item.time.split(" ")[0]}
                </span>

                <small className="text-sm">
                  {item.time.split(" ")[1]}
                </small>

              </div>

              {/* DETAILS */}
              <div>

                <h2 className="text-3xl font-bold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-300 leading-8">
                  {item.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

