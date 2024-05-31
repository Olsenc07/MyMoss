import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// intro can be on this page
import Intro from './components/intro/intro.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

// these should be pages
import Neslo from './pages/neslo.component';
import Skalarly from './pages/skalarly.component';


function App() {
  return (
    <Router>
      {/* add landing */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/neslo" element={<Neslo />} /> 
          <Route path="/skalarly" element={<Skalarly />} />
          <Route path="*" element={<Intro />} />
        </Routes>
        <Footer />
       
    </Router>
  );
}

export default App;

