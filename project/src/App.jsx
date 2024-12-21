import React from 'react';
import AboutHero from './components/AboutHero';
import Features from './components/Features';
import Community from './components/Community';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Features />
      <Community />
      <News />
    </div>
  );
}

export default App;