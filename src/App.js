import React from "react";
import Navbar from "./components/navbar/navbar.component";

import "./App.scss";
import Lead from "./components/lead/Lead.component";
import Partners from "./components/partners/Partners.component";
import About from "./components/AboutSection/About.component";
import HowITWork from "./components/HowITWorkSection/HowITWork.component";
import Service from "./components/ServiceSection/Service.component";
import Pricing from "./components/pricing/Pricing.component";
import CarSection from "./components/TheCarSection/CarSection.component";
import Footer from "./components/FooterSection/Footer.component";

function App() {
  return (
    <div>
      <Navbar />
      <Lead />
      <Partners />
      <About />
      <HowITWork />
      <Service />
      <Pricing />
      <CarSection />
      <div className="container section get-started">
        <div className="columns is-vcentered">
          <div className="column">
            <h2 className="z-title">
              Join instantly with $0 down and get your car right now.
            </h2>
          </div>
          <div className="column">
            <div className="has-text-centered">
              <button className="button is-dark is-rounded">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
