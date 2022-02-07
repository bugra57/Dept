import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Nav } from './components/Nav';
import Homepage from './pages/Homepage';
import { Footer } from './components/Footer';
import { ConstructionPage } from './pages/ConstructionPage';

function App() {

  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/werk" element={<ConstructionPage />} />
          <Route path="/over" element={<ConstructionPage />} />
          <Route path="/diensten" element={<ConstructionPage />} />
          <Route path="/partners" element={<ConstructionPage />} />
          <Route path="/stories" element={<ConstructionPage />} />
          <Route path="/vacatures" element={<ConstructionPage />} />
          <Route path="/events" element={<ConstructionPage />} />
          <Route path="/contact" element={<ConstructionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

