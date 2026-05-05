import React from "react";
import aboutImg from "../assets/Images/about.png";
import ScrollReveal from "../Components/ScrollReveal";

const About = () => {
  return (
    <div className="w-screen flex flex-col py-[3vh] relative  text-white">
      {/* Blurred circles */}
      <div
        className="absolute bottom-[32%]  left-[12%] w-[35vh] h-[35vh] rounded-full bg-red-600 opacity-40 filter blur-3xl animate-pulse"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="absolute bottom-[-5%] right-[13%] w-[35vh] h-[35vh] rounded-full bg-red-600 opacity-30 filter blur-2xl animate-pulse"
        style={{ zIndex: 0 }}
      ></div>

      {/* Title */}
      <div className="flex items-center justify-center mt-[20vh] z-10">
        <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
          About the Hackathon
        </h2>
      </div>

      {/* Description paragraphs */}
      <div className="flex flex-col items-center justify-center mt-[7vh] space-y-6 w-full px-6 z-10">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          
          baseRotation={3}
          blurStrength={4}
          textClassName="text-green-400 max-w-4xl rajdhani text-[1.5vw] text-center leading-relaxed"
        >
          Calcutta Hacks 2.0 is an intense 36-hour hackathon where developers, designers, and
          innovators come together to build real solutions 💡. It’s a space to turn ideas into
          working products 🚀, collaborate with talented people 🤝, and create something meaningful
          under pressure ⏳.
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={2}
          blurStrength={5}
          textClassName="text-green-400 max-w-4xl rajdhani text-[1.5vw] text-center leading-relaxed"
        >
          This hackathon is your chance to learn fast, build real projects, and grow your skills.
          You’ll work in teams, solve real problems, connect with others, and showcase what you can
          create when time is limited and ideas matter.
        </ScrollReveal>
      </div>

      {/* Image */}
      <div className="w-full flex items-center justify-center mt-[10vh] z-10 px-6">
        <img
          src={aboutImg}
          alt="About Hackathon"
          className="w-full max-w-5xl object-cover rounded-3xl border-4 border-red-700 shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
