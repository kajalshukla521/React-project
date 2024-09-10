import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Header from './component/Header';
import Footer from './component/Footer';
import Technology from './component/Technology';
// import Portfolio from './component/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Define the routes for  application */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/portfolio" element={<Portfolio />} />
      
        </Routes>
             */}
             
             <About/>
             <Contact/>
             <Technology/>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
