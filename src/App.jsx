import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
