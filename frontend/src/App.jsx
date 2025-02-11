import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Membership from "./pages/Membership/Membership";
import Contact from "./pages/Contact/Contact";
import Guidelines from "./pages/Guidelines/Guidelines";
import Publications from "./pages/Publications/Publications";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
