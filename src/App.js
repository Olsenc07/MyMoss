import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Intro from './components/intro.component';



function App() {
  return (
    <Router>
      <div className="App">
      {/* add landing */}
        <Routes>
          <Route path="/" element={<Intro />} />
          {/* <Route path="/info" element={<info />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
