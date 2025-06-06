import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GruposCrecimiento from './pages/GruposCrecimiento';
import FamiliaJoven from './pages/FamiliaJoven';
import Misiones from './pages/Misiones';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grupos-crecimiento" element={<GruposCrecimiento />} />
            <Route path="/familia-joven" element={<FamiliaJoven />} />
            <Route path="/misiones" element={<Misiones />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App