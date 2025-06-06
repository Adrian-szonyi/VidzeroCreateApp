import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Capture authentic stories from around the world",
    "Build a global network of content creators",
    "Reduce marketing costs through user-generated content",
    "Create more engaging and relatable content",
    "Save time with streamlined content collection",
    "Increase community participation and engagement",
    "Scale your content production capabilities",
    "Showcase diverse perspectives and experiences"
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                  alt="Charity team collaborating" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Charities Love Our Platform
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our app helps charities create more impactful campaigns through authentic, affordable, and engaging content.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;