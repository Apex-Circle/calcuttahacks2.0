import "./App.css";
import ChromaGrid from "./assets/ChromaGrid";
import Nav from "./Components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className=" w-screen flex flex-col bg-black relative">
      <Nav />
      <Hero />

      <About />

      <div className=" w-screen flex flex-col items-center justify-center py-[8vh]">
        <div className="flex items-center justify-center mt-[20vh] z-10">
          <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
            Mentor
          </h2>
        </div>

        <div className="w-[80%] flex flex-wrap mt-[7vh]">
          <ChromaGrid />
        </div>
      </div>

      <div className=" w-screen flex flex-col items-center justify-center py-[8vh]">
        <div className="flex items-center justify-center mt-[20vh] z-10">
          <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
            Judge
          </h2>
        </div>

        <div className="w-[80%] flex flex-wrap mt-[7vh]">
          <ChromaGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
