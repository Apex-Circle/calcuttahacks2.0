import "./App.css";
import Team from "./sections/Team.jsx";
import LogoLoop from "./Components/LogoLoop";
import Nav from "./Components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";
import FAQ from "./sections/Faq.jsx";
import PRIZES from "./sections/Prizes.jsx";
import Footer from "./sections/Footer.jsx";

const imageLogos = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_hNqJRu1uNrEfhHH5FCtN3ltoP5MBpjkWg&s",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIygUTsIdSAR0MwbnUyNloj8ZCCWVZylTBBQ&s",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-Kt7p9AJdygzW3f7xtyCAETHMO-2xTSgew&s",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWGx49vyixrV2CW_xbXIDPiqg5tiabAH9yw&s",
    alt: "Company 4",
    href: "https://company4.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_hNqJRu1uNrEfhHH5FCtN3ltoP5MBpjkWg&s",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIygUTsIdSAR0MwbnUyNloj8ZCCWVZylTBBQ&s",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-Kt7p9AJdygzW3f7xtyCAETHMO-2xTSgew&s",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWGx49vyixrV2CW_xbXIDPiqg5tiabAH9yw&s",
    alt: "Company 4",
    href: "https://company4.com",
  },
];

function App() {
  return (
    <div className=" w-screen flex flex-col bg-black relative">
      <Nav />
      <Hero />

      <About />

      <div className="flex flex-col">
        <div className="flex items-center justify-center mt-[20vh] z-10">
          <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
            Sponsors
          </h2>
        </div>

        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
          className="mt-[8vh]  shadow-lg"
        >
          <LogoLoop
            logos={imageLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="green"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      <Team />

      <PRIZES />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
