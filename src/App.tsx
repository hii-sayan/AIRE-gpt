import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';
import AIMarketplace from './components/AIMarketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Whitepaper />
            </>
          } />
          <Route path="/ai-marketplace" element={<AIMarketplace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;