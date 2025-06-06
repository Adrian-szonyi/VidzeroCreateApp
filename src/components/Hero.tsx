import React from 'react';
import { Link } from './ui/Link';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empower Charities with <span className="text-yellow-300">User-Generated</span> Content
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
              Connect with your supporters, gather authentic stories, and build a network of creators - all in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="mailto:adrian@vidzero.com.au" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                Get in Touch
              </a>
              <Link 
                href="#how-it-works" 
                className="flex items-center justify-center text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-lg transition-all"
              >
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 transform -rotate-6 shadow-2xl rounded-xl overflow-hidden border-8 border-white">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="App Preview" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/4 -right-10 z-0 w-40 h-40 bg-yellow-300 rounded-full filter blur-3xl opacity-60"></div>
            <div className="absolute bottom-1/4 -left-10 z-0 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;