import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import FAQ from './components/FAQ';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Vidzero Creator | User-Generated Content for Charities";
  }, []);
  
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <AppPreview />
        <FAQ />
      </main>
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-xl text-white">
            To learn more about Vidzero Creator or register to become an early adopter email{' '}
            <a 
              href="mailto:adrian@vidzero.com.au" 
              className="text-yellow-300 hover:text-yellow-200 underline transition-colors"
            >
              adrian@vidzero.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;