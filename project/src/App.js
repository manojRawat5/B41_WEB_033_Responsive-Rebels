import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import SafetyFeatures from './components/SafetyFeatures';
import NewsBlog from './components/NewsBlog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <Community />
      <SafetyFeatures />
      <NewsBlog />
      <Footer />
    </div>
  );
}

export default App;