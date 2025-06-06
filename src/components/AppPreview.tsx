import React from 'react';
import screenshot1 from '../assets/Screenshot_20250605-144000.png';
import screenshot2 from '../assets/Screenshot_20250605-144008.png';
import screenshot3 from '../assets/Screenshot_20250605-144021.png';
import screenshot4 from '../assets/Screenshot_20250605-144040.png';
import screenshot5 from '../assets/Screenshot_20250605-144114.png';

const AppPreview: React.FC = () => {
  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the App in Action
          </h2>
          <p className="text-xl text-gray-600">
            Create campaigns, collect content, and manage submissions all in one place.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 px-4 -mx-4 scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-none w-[280px] relative pt-8"
            >
              <div className="absolute inset-0 bg-black rounded-[3rem] transform scale-[1.02] mt-8"></div>
              <div className="relative bg-white rounded-[2.8rem] p-3 shadow-xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                <img
                  src={screenshot}
                  alt={`App Screenshot ${index + 1}`}
                  className="w-full rounded-[2.3rem] shadow-inner"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;