import React from "react";
import Navbar from "./components/navbar/navbar.component";

import "./App.scss";
import Lead from "./components/lead/Lead.component";
import Partners from "./components/partners/Partners.component";
import About from "./components/AboutSection/About.component";
import HowITWork from "./components/HowITWorkSection/HowITWork.component";

function App() {
  return (
    <div>
      <Navbar />
      <Lead />
      <Partners />
      <About />
      <HowITWork />
    </div>
  );
}

export default App;
