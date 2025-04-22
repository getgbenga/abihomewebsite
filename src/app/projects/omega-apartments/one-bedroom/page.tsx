import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function OneBedroom() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="page-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="page-title">1 Bedroom Apartments</h1>
            <p className="page-subtitle">
              Elegant and comfortable living spaces designed for professionals and individuals seeking refined city living.
            </p>
          </div>
        </section>

        {/* Apartment Details */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-300 h-[600px] flex items-center justify-center rounded-lg shadow-xl">
                <p className="text-gray-600">1 Bedroom Apartment Image</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 font-serif">Sophisticated Urban Living</h2>
                <div className="luxury-divider mb-8"></div>
                <p className="text-lg mb-6 leading-relaxed">
                  Our 1 bedroom apartments at Omega offer the perfect blend of style, comfort, and functionality for discerning individuals seeking a premium urban lifestyle.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Each apartment features an open-plan design that maximizes space and light, creating an airy and welcoming environment that's perfect for both relaxation and entertaining.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  With meticulous attention to detail and high-quality finishes throughout, these apartments represent exceptional value without compromising on luxury.
                </p>
                
                <div className="bg-primary/5 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold mb-4 font-serif">Apartment Specifications</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-1">Size Range</p>
                      <p className="text-xl font-medium">38-49m²</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Starting Price</p>
                      <p className="text-xl font-medium text-accent">£225,000</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Bedrooms</p>
                      <p className="text-xl font-medium">1 Spacious Bedroom</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Bathrooms</p>
                      <p className="text-xl font-medium">1 Luxury Bathroom</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-block"
                >
                  Inquire About This Apartment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Premium Features</h2>
            <p className="section-subtitle">
              Every detail of our 1 bedroom apartments has been carefully considered to create a living experience of unparalleled quality.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Elegant Living Space</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Open-plan living and dining area designed to maximize space and light, creating a perfect environment for both relaxation and entertaining.
                </p>
              </div>
              
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Designer Kitchen</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Contemporary kitchen with premium stone countertops, designer breakfast bar, and high-end integrated appliances for a seamless cooking experience.
                </p>
              </div>
              
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Stunning Views</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Large windows offering abundant natural light and views of the surrounding area, creating a bright and airy atmosphere throughout the day.
                </p>
              </div>
              
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Luxury Bathroom</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Elegantly appointed bathroom featuring premium fixtures, designer tiles, and high-quality finishes for a spa-like experience in your own home.
                </p>
              </div>
              
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Spacious Bedroom</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Generously sized bedroom with built-in wardrobes providing ample storage space, creating a tranquil retreat for relaxation and rest.
                </p>
              </div>
              
              <div className="luxury-card">
                <div className="luxury-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-serif">Security & Privacy</h3>
                <div className="luxury-divider"></div>
                <p className="text-gray-600">
                  Secure entry system, 24/7 security monitoring, and thoughtful design ensuring privacy and peace of mind for all residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Floor Plans</h2>
            <p className="section-subtitle">
              Explore the thoughtfully designed layouts of our 1 bedroom apartments.
            </p>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-300 h-[500px] flex items-center justify-center rounded-lg shadow-xl">
                <p className="text-gray-600">Floor Plan Image</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-6 font-serif">Optimized for Modern Living</h3>
                <div className="luxury-divider mb-8"></div>
                <p className="text-lg mb-6 leading-relaxed">
                  Our 1 bedroom apartments feature intelligently designed floor plans that maximize space efficiency while maintaining an open, airy feel throughout.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  The thoughtful layout creates distinct zones for living, dining, and sleeping, while ensuring a natural flow between spaces that enhances the overall living experience.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  With generous storage solutions integrated throughout, these apartments offer the perfect balance of style and practicality for contemporary urban living.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-serif">Type A</h4>
                    <p className="text-gray-600 mb-1">Size: 38m²</p>
                    <p className="text-gray-600">Balcony: No</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 font-serif">Type B</h4>
                    <p className="text-gray-600 mb-1">Size: 49m²</p>
                    <p className="text-gray-600">Balcony: Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Apartment Gallery</h2>
            <p className="section-subtitle">
              Take a visual tour of our exquisite 1 bedroom apartments.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Living Room Image</p>
              </div>
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Kitchen Image</p>
              </div>
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Bedroom Image</p>
              </div>
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Bathroom Image</p>
              </div>
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Dining Area Image</p>
              </div>
              <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg shadow-md hover-scale">
                <p className="text-gray-600">Balcony Image (Type B)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make This Apartment Your Home?</h2>
            <p className="cta-description">
              Contact us today to arrange a viewing or request more information about our 1 bedroom apartments.
            </p>
            <div className="cta-buttons">
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link 
                href="/projects/omega-apartments" 
                className="bg-accent text-white px-8 py-4 rounded-md font-medium hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
              >
                Back to All Apartments
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
