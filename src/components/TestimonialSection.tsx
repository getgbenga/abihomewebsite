import React from 'react';
import OptimizedImage from './OptimizedImage';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-16 text-navy-800">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                <OptimizedImage 
                  src="/images/optimized/placeholder-avatar.webp" 
                  alt="Client Avatar" 
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-800">Sarah Johnson</h3>
                <p className="text-gray-600">Residential Client</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Abihomes transformed our property beyond our expectations. Their attention to detail and commitment to quality was evident at every stage of the project."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                <OptimizedImage 
                  src="/images/optimized/placeholder-avatar.webp" 
                  alt="Client Avatar" 
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-800">Michael Thompson</h3>
                <p className="text-gray-600">Commercial Developer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Working with Abihomes on our commercial project was a seamless experience. Their team's expertise and professionalism ensured our project was completed on time and to the highest standards."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                <OptimizedImage 
                  src="/images/optimized/placeholder-avatar.webp" 
                  alt="Client Avatar" 
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-800">Emma Roberts</h3>
                <p className="text-gray-600">Property Investor</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "As an investor, I value partners who understand the importance of quality and return on investment. Abihomes delivered exceptional value, creating spaces that stand out in the market."
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
