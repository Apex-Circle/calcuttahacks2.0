import "./App.css";
import Team from "./sections/Team.jsx";
import LogoLoop from "./Components/LogoLoop";
import Nav from "./Components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";
import FAQ from "./sections/Faq.jsx";
import PRIZES from "./sections/Prizes.jsx";
import Footer from "./sections/Footer.jsx";
import Schedules from "./sections/Timeline.jsx";
import JudgesMentors from "./sections/JudgesMentors.jsx";
import Tracks from "./sections/Tracks.jsx";



const calcuttaLogosTop = Array.from({ length: 8 }).map(() => ({
  node: (
    <div className="flex items-center gap-2 select-none shrink-0">
      <span className="orbitron text-white font-bold text-[clamp(13px,1.3vw,20px)] tracking-widest uppercase">
        Calcutta
      </span>
      <span className="blowbrush text-[clamp(20px,2vw,30px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_10px_rgba(255,0,60,0.7)]">
        HACKS
      </span>
      <span className="orbitron text-[clamp(10px,0.85vw,14px)] font-bold px-[0.4vw] py-[0.15vw] bg-gradient-to-br from-red-600 to-red-900 text-white rounded">
        2.0
      </span>
    </div>
  ),
  ariaLabel: "Calcutta Hacks 2.0",
}));

const calcuttaLogosBottom = Array.from({ length: 7 }).map(() => ({
  node: (
    <div className="flex items-center gap-2 select-none shrink-0">
      <span className="orbitron text-white font-bold text-[clamp(13px,2vw,25px)] tracking-widest uppercase">
        Calcutta
      </span>
      <span className="blowbrush text-[clamp(20px,3vw,30px)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_10px_rgba(255,0,60,0.7)]">
        HACKS
      </span>
      <span className="orbitron text-[clamp(10px,0.85vw,14px)] font-bold px-[0.4vw] py-[0.15vw] bg-gradient-to-br from-red-600 to-red-900 text-white rounded">
        2.0
      </span>
    </div>
  ),
  ariaLabel: "Calcutta Hacks 2.0",
}));

function App() {
  return (
    <div className=" w-screen flex flex-col bg-black relative">
      <Nav />

      {/* Hero + Intro */}
      <Hero />
      <About />

         <div
          style={{ height: "fit-content", position: "relative", overflow: "hidden" }}
          className="shadow-lg  bg-red-900/10 py-4 flex items-center justify-center relative  border border-red-500/20"
        >
          <LogoLoop
            logos={calcuttaLogosTop}
            speed={80}
            direction="left"
            logoHeight={80}
            gap={48}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Calcutta Hacks 2.0 — top loop"
            className="mix-blend-screen "
            style={{
              "--logoloop-gap": `48px`,
              "--logoloop-logoHeight": `80px`,
              filter: "saturate(130%) contrast(105%) drop-shadow(0 6px 18px rgba(0,200,255,0.12))",
            }}
          />
        </div>


      <Tracks />


        
   
      <Schedules />




      

      {/* Prizes */}
      <PRIZES />


        

      {/* Team, Judges & Mentors (combined) */}
      <Team />


        <div
          style={{ height: "fit-content", position: "relative", overflow: "hidden" }}
          className="shadow-lg  bg-red-900/10 py-4 flex items-center justify-center relative my-[5vh] border border-red-500/20"
        >
          <LogoLoop
            logos={calcuttaLogosTop}
            speed={80}
            direction="left"
            logoHeight={80}
            gap={48}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Calcutta Hacks 2.0 — top loop"
            className="mix-blend-screen "
            style={{
              "--logoloop-gap": `48px`,
              "--logoloop-logoHeight": `80px`,
              filter: "saturate(130%) contrast(105%) drop-shadow(0 6px 18px rgba(0,200,255,0.12))",
            }}
          />
        </div>


      <JudgesMentors />

      {/* Sponsors block (logo loops) */}
      <div className="mt-[6vh] space-y-6" data-scroll-section>
   


    <div
          style={{ height: "fit-content", position: "relative", overflow: "hidden" }}
          className="shadow-lg  bg-red-900/10 py-4 flex items-center justify-center relative  border-t border-red-500/20"
        >
          <LogoLoop
            logos={calcuttaLogosBottom}
            speed={60}
            direction="left"
            logoHeight={64}
            gap={36}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Calcutta Hacks 2.0 — bottom loop"
            className="mix-blend-screen "
            style={{
              "--logoloop-gap": `36px`,
              "--logoloop-logoHeight": `64px`,
              filter: "saturate(130%) contrast(105%) drop-shadow(0 6px 18px rgba(0,200,255,0.12))",
            }}
          />
        </div>

        <div className="flex items-center justify-center mt-8 z-10">
          <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
            Sponsors
          </h2>
        </div>

       
      </div>

      {/* FAQ + Footer */}
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
