import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Nav } from './components/Nav';
import Homepage from './pages/Homepage';

function App() {

  return (
    <Router>
      <div className='app'>
        <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

