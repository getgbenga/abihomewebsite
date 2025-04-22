import React, { lazy, Suspense } from 'react';
import Image from 'next/image';

// Lazy load non-critical components
const LazyLeadershipTeam = lazy(() => import('@/components/LeadershipTeam'));

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Critical, load immediately */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-6">About Abihome Construction</h1>
          <p className="text-xl max-w-3xl">A premier construction company dedicated to building excellence across the UK.</p>
        </div>
      </section>

      {/* Our Story Section - Critical, load immediately */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Founded with a vision to transform the construction landscape, Abihome Construction has established itself as a trusted name in the industry, delivering exceptional building projects that stand the test of time.
              </p>
              <p className="mb-4 text-gray-700">
                Our journey began with a commitment to quality craftsmanship and innovative design, values that continue to drive our approach to every project we undertake.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be at the forefront of modern construction, combining traditional building expertise with cutting-edge techniques and sustainable practices.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                <Image 
                  src="/images/construction/modern_apartment_1.webp" 
                  alt="Company History" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values - Can be lazy loaded */}
      <Suspense fallback={<div className="py-16 text-center">Loading mission and values...</div>}>
        <MissionAndValues />
      </Suspense>

      {/* Our Expertise - Can be lazy loaded */}
      <Suspense fallback={<div className="py-16 text-center">Loading expertise information...</div>}>
        <ExpertiseSection />
      </Suspense>

      {/* Leadership Team Section - Can be lazy loaded */}
      <Suspense fallback={<div className="py-16 text-center">Loading leadership team...</div>}>
        <LazyLeadershipTeam />
      </Suspense>

      {/* CTA Section - Critical, load immediately */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're planning a residential development, commercial building, or renovation project, we're here to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/projects" className="bg-white text-navy-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">View Our Projects</a>
            <a href="/contact" className="bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition duration-300">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Extracted components for lazy loading
const MissionAndValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-16 text-navy-800">Our Mission & Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Excellence */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Quality Excellence</h3>
            <p className="text-gray-700 text-center">
              We are committed to delivering the highest standards of construction quality in every project, from foundation to finishing touches.
            </p>
          </div>
          
          {/* Timely Delivery */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Timely Delivery</h3>
            <p className="text-gray-700 text-center">
              We understand the importance of deadlines and strive to complete all projects on schedule without compromising on quality.
            </p>
          </div>
          
          {/* Client Partnership */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Client Partnership</h3>
            <p className="text-gray-700 text-center">
              We build lasting relationships with our clients, working collaboratively to bring their vision to life with transparency and integrity.
            </p>
          </div>
          
          {/* Innovation */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Innovation</h3>
            <p className="text-gray-700 text-center">
              We embrace innovative construction techniques and technologies to enhance efficiency, sustainability, and the overall quality of our projects.
            </p>
          </div>
          
          {/* Sustainability */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Sustainability</h3>
            <p className="text-gray-700 text-center">
              We are committed to environmentally responsible construction practices, incorporating sustainable materials and energy-efficient designs.
            </p>
          </div>
          
          {/* Attention to Detail */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-navy-800">Attention to Detail</h3>
            <p className="text-gray-700 text-center">
              We believe that excellence lies in the details, which is why we pay meticulous attention to every aspect of our construction projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center font-bold mb-16 text-navy-800">Our Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Residential Construction */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 mb-8">
              <Image 
                src="/images/construction/modern_apartment_2.webp" 
                alt="Residential Construction" 
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Residential Construction</h3>
            <p className="mb-6 text-gray-700">
              From luxury apartment complexes to custom family homes, we bring expertise and attention to detail to every residential project. Our team understands that your home is more than just a building—it's where life happens.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Apartment buildings and complexes</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom homes and renovations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-family housing developments</span>
              </li>
            </ul>
          </div>
          
          {/* Commercial Construction */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80 mb-8">
              <Image 
                src="/images/construction/concrete_pouring.jpeg" 
                alt="Commercial Construction" 
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Commercial Construction</h3>
            <p className="mb-6 text-gray-700">
              Our commercial construction services deliver functional, attractive spaces that enhance business operations and customer experiences. We understand the unique requirements of commercial buildings and deliver solutions that work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Office buildings and corporate headquarters</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Retail spaces and shopping centers</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hospitality and leisure facilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
