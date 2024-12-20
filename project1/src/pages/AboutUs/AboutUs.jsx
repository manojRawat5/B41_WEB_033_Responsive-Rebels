import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import SafetySection from './components/SafetySection';
import NewsBlog from './components/NewsBlog';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <HowItWorks />
      <Community />
      <SafetySection />
      <NewsBlog />
    </div>
  );
}