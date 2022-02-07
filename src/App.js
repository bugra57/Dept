import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Nav } from './components/Nav';
import Homepage from './pages/Homepage';
import { Footer } from './components/Footer';
import { UnderConstructionPage } from './pages/UnderConstructionPage';

function App() {

  return (
    <Router>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/werk" element={<UnderConstructionPage />} />
          <Route path="/over" element={<UnderConstructionPage />} />
          <Route path="/diensten" element={<UnderConstructionPage />} />
          <Route path="/partners" element={<UnderConstructionPage />} />
          <Route path="/stories" element={<UnderConstructionPage />} />
          <Route path="/vacatures" element={<UnderConstructionPage />} />
          <Route path="/events" element={<UnderConstructionPage />} />
          <Route path="/contact" element={<UnderConstructionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

