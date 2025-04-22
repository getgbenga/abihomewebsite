import React from 'react';
import Image from 'next/image';
import { omegaApartments } from '@/app/omega-apartments';

export default function OmegaApartmentsPage() {
  // Get apartment types from data
  const oneBedType = omegaApartments.apartmentTypes.find(type => type.type === "1 Bedroom Apartment");
  const twoBedType = omegaApartments.apartmentTypes.find(type => type.type === "2 Bedroom Apartment");
  const threeBedType = omegaApartments.apartmentTypes.find(type => type.type === "3 Bedroom Apartment");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/construction/modern_apartment_1.webp" 
            alt="Omega Apartments" 
            fill 
            style={{objectFit: 'cover'}}
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Omega Apartments</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Premium apartments in the heart of Salford Quays, offering exceptional quality and modern living.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#floor-plans" className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
              View Floor Plans
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-md font-semibold transition duration-300">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Development Overview</h2>
              <p className="mb-4 text-gray-700">
                Omega Apartments is a premium four-storey development featuring 24 high-specification apartments in the vibrant Salford Quays area. Located at 1 Peel Cross, this exceptional development offers contemporary living spaces designed with quality and comfort in mind.
              </p>
              <p className="mb-6 text-gray-700">
                Each of the 24 apartments (6 per floor) combines modern design with exceptional build quality, creating homes that are both beautiful and functional. With a range of one, two, and three-bedroom options available, Omega Apartments caters to diverse lifestyle needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-800 mb-2">Location</h3>
                  <p className="text-gray-700">1 Peel Cross, Salford Quays</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-800 mb-2">Completion</h3>
                  <p className="text-gray-700">October 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-800 mb-2">Apartments</h3>
                  <p className="text-gray-700">24 units (6 per floor)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-navy-800 mb-2">Parking</h3>
                  <p className="text-gray-700">Up to 2 spaces per apartment</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-96 w-full">
              <Image 
                src="/images/construction/modern_apartment_2.webp" 
                alt="Omega Apartments Exterior" 
                fill 
                style={{objectFit: 'cover'}}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types Section */}
      <section id="floor-plans" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Apartment Types</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our range of thoughtfully designed apartments, each offering premium specifications and contemporary living spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* One Bedroom */}
            {oneBedType && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-64 relative">
                  <Image 
                    src="/images/construction/modern_interior.webp" 
                    alt="One Bedroom Apartment" 
                    fill 
                    style={{objectFit: 'cover'}}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-navy-800">One Bedroom</h3>
                    <span className="text-gold-600 font-bold">From £{oneBedType.minPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Perfect for professionals and first-time buyers, our one-bedroom apartments offer stylish, low-maintenance living with premium specifications.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Approx. {oneBedType.minSqft}-{oneBedType.maxSqft} sq ft</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Open-plan living/dining area</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>High-specification throughout</span>
                    </li>
                  </ul>
                  <a href="/projects/omega-apartments/one-bedroom" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                    View details
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            )}
            
            {/* Two Bedroom */}
            {twoBedType && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-64 relative">
                  <Image 
                    src="/images/construction/modern_interior.webp" 
                    alt="Two Bedroom Apartment" 
                    fill 
                    style={{objectFit: 'cover'}}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-navy-800">Two Bedroom</h3>
                    <span className="text-gold-600 font-bold">From £{twoBedType.minPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ideal for couples and small families, our two-bedroom apartments provide spacious living with premium finishes throughout.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Approx. {twoBedType.minSqft}-{twoBedType.maxSqft} sq ft</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Master bedroom with en-suite</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Generous balcony or terrace</span>
                    </li>
                  </ul>
                  <a href="/projects/omega-apartments/two-bedroom" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                    View details
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            )}
            
            {/* Three Bedroom */}
            {threeBedType && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-64 relative">
                  <Image 
                    src="/images/construction/modern_interior.webp" 
                    alt="Three Bedroom Apartment" 
                    fill 
                    style={{objectFit: 'cover'}}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-navy-800">Three Bedroom</h3>
                    <span className="text-gold-600 font-bold">From £{threeBedType.minPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our most spacious option, perfect for families or those requiring additional space, with premium features and finishes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Approx. {threeBedType.minSqft}-{threeBedType.maxSqft} sq ft</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Two bathrooms (one en-suite)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Spacious living/dining area</span>
                    </li>
                  </ul>
                  <a href="/projects/omega-apartments/three-bedroom" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                    View details
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Premium Specifications</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every Omega apartment is finished to exceptional standards with high-quality fixtures and fittings throughout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-navy-800">Interior Features</h3>
              <ul className="space-y-4">
                {omegaApartments.features.general.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-navy-800">Sustainability</h3>
              <ul className="space-y-4">
                {omegaApartments.features.sustainability.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Prime Location</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Situated in the vibrant Salford Quays area, Omega Apartments offers exceptional connectivity and access to amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-navy-800">Nearby Amenities</h3>
              <ul className="space-y-4">
                {omegaApartments.features.nearby.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg">
              {/* Map placeholder - would be replaced with actual map in production */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-600">Location Map</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Register Your Interest</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to learn more about Omega Apartments and schedule a viewing of our show apartment.
          </p>
          <a href="/contact" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
