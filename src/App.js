import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Intro from './pages/intro/intro';
import Bio from './pages/bio/bio';
import Footer from '/Users/olsenc07/Projects/MyMoss/src/components/footer/footer.jsx';
import './app.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="*" element={<Intro />} />
        </Routes>
      <Footer/>

    </Router>
  );
}

export default App;