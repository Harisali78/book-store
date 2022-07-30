import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Navbar from "../Navbar/Navbar";
import Services from "../Services";
import Contact from "../Contact";
import Info from "../Info";
import Footer from "../Footer/Footer"
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default RouterComponent;
