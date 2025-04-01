import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Acerca from './pages/Acercade.jsx';
import FondoPortal from './components/FondoPortal';


export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0f172a] to-[#84cc16]">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div>
    </div>
  )
}
