import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

// Import placeholder pages for categories
import Production from './pages/Production/Production';
import Event from './pages/Event/Event';
import PhotoShoot from './pages/PhotoShoot/PhotoShoot';
import Wedding from './pages/Wedding/Wedding';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/production" element={<Production />} />
            <Route path="/event" element={<Event />} />
            <Route path="/photoshoot" element={<PhotoShoot />} />
            <Route path="/wedding" element={<Wedding />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;