import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Error from "./components/Error/Error";
import "./styles/Styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio_react" element={<Home />} />
        <Route path="/portfolio_react/about" element={<About />} />
        <Route path="/portfolio_react/contact" element={<Contact />} />
        <Route path="/portfolio_react/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
