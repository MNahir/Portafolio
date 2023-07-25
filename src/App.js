import React from "react";

// import components
import Header from "./components/Header";
import Home from "./components/Home";

import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />

      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;