import React from "react";
import Navbar from "./components/navbar/navbar.component";

import "./App.scss";
import Lead from "./components/lead/Lead.component";
import Partners from "./components/partners/Partners.component";

function App() {
  return (
    <div>
      <Navbar />
      <Lead />
      <Partners />
    </div>
  );
}

export default App;
