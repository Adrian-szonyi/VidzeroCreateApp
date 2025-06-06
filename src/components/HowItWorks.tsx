import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      number: 1,
      title: "Create a Campaign",
      description: "Set up your campaign with specific goals, instructions, and the type of content you're looking for.",
      image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      number: 2,
      title: "Invite Contributors",
      description: "Share your campaign with supporters and invite them to contribute content through the app.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      number: 3,
      title: "Review Submissions",
      description: "Easily approve or request changes to submitted content from your dashboard.",
      image: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      number: 4,
      title: "Use and Share",
      description: "Download approved content for your marketing channels or send to Vidzero for professional editing.",
      image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our simple four-step process makes it easy to collect and utilize user-generated content.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <div className="space-y-4">
                {steps.map((step) => (
                  <button
                    key={step.number}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeStep === step.number
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                    onClick={() => setActiveStep(step.number)}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                        activeStep === step.number
                          ? 'bg-white text-blue-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className={`${
                          activeStep === step.number ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden">
              <img 
                src={steps.find(step => step.number === activeStep)?.image}
                alt={steps.find(step => step.number === activeStep)?.title}
                className="w-full h-auto rounded-lg transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;