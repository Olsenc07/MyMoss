import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// intro can be on this page
import Intro from './components/intro/intro';
// import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer';

// these should be pages
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Intro />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

