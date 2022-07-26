import React from "react";
import { Navbar, Footer } from "../src/components";
import Routes from "./Routes";
import "./styles/_main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
