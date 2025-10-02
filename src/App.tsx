import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickLinkrProject from './components/QuickLinkrProject';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/projects/quicklinkr" element={<QuickLinkrProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;