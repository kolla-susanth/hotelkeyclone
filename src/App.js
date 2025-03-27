import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Keep Navbar always visible */}
        <Routes>
          <Route path="/" element={<Landing />} />         {/* Home Page */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us Page */}
        </Routes>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
