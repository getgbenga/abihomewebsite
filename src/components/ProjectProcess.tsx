import React from 'react';

const ProjectProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-16 text-navy-800">Our Project Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">1</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Land Research</h3>
            <p className="text-gray-700 text-center text-sm">
              Identifying optimal locations with growth potential and development opportunities.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">2</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Acquisition</h3>
            <p className="text-gray-700 text-center text-sm">
              Securing properties and land through strategic negotiation and thorough due diligence.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">3</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Planning & Design</h3>
            <p className="text-gray-700 text-center text-sm">
              Creating detailed architectural plans and securing necessary planning permissions.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">4</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Construction</h3>
            <p className="text-gray-700 text-center text-sm">
              Building with precision craftsmanship and high-quality materials to exacting standards.
            </p>
          </div>
          
          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">5</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Quality Assurance</h3>
            <p className="text-gray-700 text-center text-sm">
              Rigorous inspections and testing to ensure all aspects meet our high standards.
            </p>
          </div>
          
          {/* Step 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">6</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Completion</h3>
            <p className="text-gray-700 text-center text-sm">
              Final touches and handover with comprehensive documentation and support.
            </p>
          </div>
          
          {/* Step 7 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold">7</div>
            <h3 className="text-lg font-bold text-center mb-2 text-navy-800">Marketing & Sales</h3>
            <p className="text-gray-700 text-center text-sm">
              Strategic marketing and sales process to connect properties with the right buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;
