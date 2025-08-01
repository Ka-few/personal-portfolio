import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import other components like About, Projects, etc.

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Projects' element={<Projects />}/>
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} /> 
        <Route path='/Experience' element={<Experience />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
