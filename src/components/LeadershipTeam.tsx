import React from 'react';

const LeadershipTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-16 text-navy-800">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gbenga Ogunbadejo */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-lg">Director Photo</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-bold text-navy-800">Gbenga Ogunbadejo</h3>
              <p className="text-gold-600 font-semibold mb-4">Director</p>
              <p className="text-gray-700">
                With 15 years of experience in the property business, Gbenga brings exceptional leadership and strategic vision to Abihomes Ltd. His background in healthcare has instilled a meticulous attention to detail and quality standards that define our construction approach. Under his direction, Abihomes has established itself as a company committed to excellence in every project.
              </p>
            </div>
          </div>
          
          {/* Jon Ratcliffe */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-lg">Construction Manager Photo</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-bold text-navy-800">Jon Ratcliffe</h3>
              <p className="text-gold-600 font-semibold mb-4">Construction Manager</p>
              <p className="text-gray-700">
                Jon joined Abihomes Ltd 2 years ago, bringing extensive experience in project and construction management. With a proven track record in overseeing design team meetings, creating detailed budgets, and managing contractors, Jon ensures our construction projects are delivered to the highest standards of quality and safety while maintaining efficient timelines.
              </p>
            </div>
          </div>
          
          {/* Studio Tashkeel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-lg">Studio Tashkeel Logo</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-bold text-navy-800">Studio Tashkeel</h3>
              <p className="text-gold-600 font-semibold mb-4">Architectural Partner</p>
              <p className="text-gray-700">
                Studio Tashkeel is our trusted architectural partner based in Manchester. With over 35 years of combined experience, their award-winning team specializes in residential and commercial architecture. Their creative vision and technical expertise ensure our projects are both aesthetically pleasing and functionally superior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
