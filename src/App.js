import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Intro from './pages/intro/intro';
import Bio from './pages/bio/bio';
import Contact from './components/contact/contact.jsx';
import './app.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      <Contact/>
    </Router>
  );
}

export default App;