import React from 'react';
import Intro from './components/intro';
import 




import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes for other pages here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
