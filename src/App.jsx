import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
