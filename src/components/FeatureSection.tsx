import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Our Expertise</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We deliver exceptional quality across all aspects of construction, focusing on durability, precision, and long-term value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-navy-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Residential Construction</h3>
            <p className="text-gray-700 text-center">
              High-specification homes built with premium materials and exceptional attention to detail, designed to stand the test of time.
            </p>
          </div>
          
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-navy-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Commercial Projects</h3>
            <p className="text-gray-700 text-center">
              Functional, durable commercial spaces that combine aesthetic appeal with practical design and energy efficiency.
            </p>
          </div>
          
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-navy-800 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4 text-center">Renovations & Extensions</h3>
            <p className="text-gray-700 text-center">
              Transformative renovations that breathe new life into existing structures while maintaining structural integrity and enhancing value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
