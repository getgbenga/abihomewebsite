import React, { lazy, Suspense } from 'react';
import OptimizedImage from '@/components/OptimizedImage';

// Lazy load components
const LazyFeatureSection = lazy(() => import('@/components/FeatureSection'));
const LazyTestimonialSection = lazy(() => import('@/components/TestimonialSection'));

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Critical, load immediately */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="/images/construction/modern_apartment_1.webp" 
            alt="Abihomes Construction" 
            fill 
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Building Excellence</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Crafting high-quality, durable spaces that stand the test of time. Precision engineering meets exceptional craftsmanship.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
              View Our Projects
            </a>
            <a href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-md font-semibold transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Critical, load immediately */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">About Abihomes</h2>
              <p className="mb-4 text-gray-700">
                Established in 2018, Abihomes Ltd has quickly built a reputation for exceptional quality and durability in construction. We specialize in creating spaces that combine innovative design with superior craftsmanship.
              </p>
              <p className="mb-6 text-gray-700">
                Our commitment to quality is evident in every project we undertake, from residential developments to commercial properties. We believe in building structures that not only meet but exceed expectations in terms of durability, functionality, and aesthetic appeal.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gold-600"></div>
                <p className="text-navy-800 font-semibold">ISO 9001 Certified</p>
              </div>
            </div>
            <div className="md:w-1/2 relative h-96 w-full">
              <OptimizedImage 
                src="/images/construction/construction_worker.jpeg" 
                alt="Construction Professional" 
                fill 
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Non-critical sections with Suspense fallbacks */}
      <Suspense fallback={<div className="py-20 text-center">Loading features...</div>}>
        <LazyFeatureSection />
      </Suspense>

      {/* Projects Section - Important but can be lazy loaded */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-navy-800">Featured Projects</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of high-quality construction projects, showcasing our commitment to excellence and precision craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Omega Apartments */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <OptimizedImage 
                  src="/images/construction/modern_apartment_2.webp" 
                  alt="Omega Apartments" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-4">Omega Apartments</h3>
                <p className="text-gray-700 mb-4">
                  A premium four-storey development featuring 24 high-specification apartments in Salford Quays, combining modern design with exceptional build quality.
                </p>
                <a href="/projects/omega-apartments" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                  View Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Hale Barns Transformation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <OptimizedImage 
                  src="/images/construction/modern_interior.webp" 
                  alt="Hale Barns Transformation" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-4">Hale Barns Transformation</h3>
                <p className="text-gray-700 mb-4">
                  Conversion of a 3-bed bungalow into a stunning 6-bed house, increasing property value from £450,000 to £1,350,000 through expert design and construction.
                </p>
                <a href="/projects" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                  View Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Premium New Build */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-64 relative">
                <OptimizedImage 
                  src="/images/construction/concrete_pouring.jpeg" 
                  alt="Premium New Build" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-navy-800 mb-4">Premium New Build</h3>
                <p className="text-gray-700 mb-4">
                  Construction of a new 5-bedroom luxury residence valued at £750,000, featuring high-end finishes and exceptional attention to detail throughout.
                </p>
                <a href="/projects" className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition duration-300">
                  View Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Non-critical, can be lazy loaded */}
      <Suspense fallback={<div className="py-20 text-center">Loading testimonials...</div>}>
        <LazyTestimonialSection />
      </Suspense>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Build Excellence?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to discuss your construction project and discover how our commitment to quality and durability can bring your vision to life.
          </p>
          <a href="/contact" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
