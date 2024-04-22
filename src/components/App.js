import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import image from "./About";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <img src={image} alt="I made this" />
    </div>
  );
}

export default App;
