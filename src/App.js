import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Firstpage from './pages/Firstpage';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';


function App() {
  return (
    
      <><div>
      <Navbar />
    </div>
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Firstpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact/>} />
           
          </Routes>
        </Router>
      </div></>
  );
}

export default App;
