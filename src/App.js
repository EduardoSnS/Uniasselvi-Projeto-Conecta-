import React from 'react';
import Confirmacao from './pages/Confirmacao';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutoriais from './pages/Tutoriais';
import Suporte from './pages/Suporte';
import Eventos from './pages/Eventos';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/tutoriais" element={<Tutoriais />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
