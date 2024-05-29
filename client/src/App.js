import React from 'react';
import Intro from './components/intro';


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
