import React, { lazy, Suspense } from 'react';
import Image from 'next/image';

// Lazy load non-critical components
const LazyProjectProcess = lazy(() => import('@/components/ProjectProcess'));

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Critical, load immediately */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">Discover our portfolio of high-quality construction projects delivered with precision and excellence.</p>
        </div>
      </section>

      {/* Featured Project - Critical, load immediately */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image 
                  src="/images/construction/modern_interior.webp" 
                  alt="Omega Apartments" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-gold-100 text-gold-800 px-3 py-1 text-sm font-semibold rounded-full mb-4">Featured Project</div>
                <h2 className="text-3xl font-playfair font-bold mb-4 text-navy-800">Omega Apartments</h2>
                <p className="text-gray-700 mb-6">
                  A premium four-storey development featuring 24 high-specification apartments in a prime Salford Quays location. Each unit combines modern design with exceptional build quality and sustainable features.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24 premium apartments across 4 floors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-specification finishes throughout</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gold-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sustainable features including solar panels and EV charging</span>
                  </li>
                </ul>
                <a href="/projects/omega-apartments" className="inline-flex items-center bg-gold-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-700 transition duration-300 self-start">
                  View Project Details
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-playfair font-bold mb-12 text-navy-800 text-center">Completed Projects</h2>
          
          {/* Completed Projects - Can be lazy loaded */}
          <Suspense fallback={<div className="py-8 text-center">Loading completed projects...</div>}>
            <CompletedProjects />
          </Suspense>
        </div>
      </section>

      {/* Project Process - Can be lazy loaded */}
      <Suspense fallback={<div className="py-16 bg-gray-50 text-center">Loading project process...</div>}>
        <LazyProjectProcess />
      </Suspense>

      {/* CTA Section - Critical, load immediately */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your construction needs and discover how Abihomes Ltd can bring your vision to life.
          </p>
          <a href="/contact" className="bg-gold-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-700 transition duration-300 inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

// Extracted component for lazy loading
const CompletedProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {/* Hale Barns Transformation */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-80 relative">
          <Image 
            src="/images/construction/modern_apartment_2.webp" 
            alt="Hale Barns Transformation" 
            width={800}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-playfair font-bold mb-4 text-navy-800">Hale Barns Transformation</h3>
          <p className="text-gray-700 mb-4">
            A remarkable transformation of a 3-bedroom bungalow into a spacious 6-bedroom luxury residence. This project showcases our ability to reimagine existing properties and maximize their potential.
          </p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">Initial Value</span>
              <p className="text-lg font-semibold text-navy-800">£450,000</p>
            </div>
            <div className="text-center">
              <svg className="h-6 w-6 text-gold-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Completed Value</span>
              <p className="text-lg font-semibold text-gold-600">£1,350,000</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium New Build Residence */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-80 relative">
          <Image 
            src="/images/construction/construction_site.webp" 
            alt="Premium New Build Residence" 
            width={800}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-playfair font-bold mb-4 text-navy-800">Premium New Build Residence</h3>
          <p className="text-gray-700 mb-4">
            A bespoke 5-bedroom luxury residence built to exacting standards. This new construction project demonstrates our commitment to quality craftsmanship and attention to detail.
          </p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-500">Project Value</span>
              <p className="text-lg font-semibold text-navy-800">£750,000</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Completion</span>
              <p className="text-lg font-semibold text-navy-800">2023</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Location</span>
              <p className="text-lg font-semibold text-navy-800">Manchester</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
