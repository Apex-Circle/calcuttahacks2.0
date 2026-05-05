import "./App.css";
import Nav from "./Components/Nav";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className=" w-screen flex flex-col bg-black relative">
      <Nav />
      <Hero />

      <About />

      <div className="h-screen w-screen"></div>
    </div>
  );
}

export default App;
