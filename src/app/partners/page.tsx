import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  projects: string[];
  logo: string;
}

interface PartnersByCategory {
  [category: string]: Partner[];
}

export default function Partners() {
  // Sample partners data - would be replaced with actual data in a real implementation
  const partners: Partner[] = [
    {
      id: 'studio-tashkeel',
      name: 'Studio Tashkeel Architecture',
      category: 'Architecture',
      description: 'Award-winning architectural firm specializing in contemporary residential and commercial design with a focus on sustainable practices.',
      projects: ['Omega Apartments', 'Victoria Heights'],
      logo: '/partners/partner-placeholder-1.jpg'
    },
    {
      id: 'precision-engineering',
      name: 'Precision Engineering Ltd',
      category: 'Structural Engineering',
      description: 'Expert structural engineering consultancy providing innovative and reliable solutions for complex construction projects.',
      projects: ['Omega Apartments', 'Riverside Commercial Center'],
      logo: '/partners/partner-placeholder-2.jpg'
    },
    {
      id: 'elite-interiors',
      name: 'Elite Interiors',
      category: 'Interior Design',
      description: 'Premium interior design studio creating sophisticated, functional spaces that enhance the architectural vision.',
      projects: ['Omega Apartments', 'Victoria Heights'],
      logo: '/partners/partner-placeholder-3.jpg'
    },
    {
      id: 'greenscape',
      name: 'Greenscape Landscaping',
      category: 'Landscape Architecture',
      description: 'Innovative landscape designers creating sustainable outdoor environments that complement architectural designs.',
      projects: ['Omega Apartments', 'Greenfield Residences'],
      logo: '/partners/partner-placeholder-4.jpg'
    },
    {
      id: 'advanced-systems',
      name: 'Advanced Building Systems',
      category: 'MEP Engineering',
      description: 'Specialists in mechanical, electrical, and plumbing systems that enhance building performance and energy efficiency.',
      projects: ['Omega Apartments', 'Central Office Hub'],
      logo: '/partners/partner-placeholder-5.jpg'
    },
    {
      id: 'quality-contractors',
      name: 'Quality Contractors Group',
      category: 'Construction',
      description: 'Trusted construction contractors delivering exceptional workmanship and attention to detail on every project.',
      projects: ['Omega Apartments', 'Parkview Apartments'],
      logo: '/partners/partner-placeholder-6.jpg'
    },
    {
      id: 'smart-home-solutions',
      name: 'Smart Home Solutions',
      category: 'Home Automation',
      description: 'Cutting-edge home automation specialists integrating the latest technology for modern, connected living.',
      projects: ['Omega Apartments'],
      logo: '/partners/partner-placeholder-7.jpg'
    },
    {
      id: 'sustainable-materials',
      name: 'Sustainable Materials Co.',
      category: 'Materials Supply',
      description: 'Suppliers of high-quality, sustainable building materials that meet the highest industry standards.',
      projects: ['Omega Apartments', 'Greenfield Residences'],
      logo: '/partners/partner-placeholder-8.jpg'
    }
  ];

  // Group partners by category
  const partnersByCategory = partners.reduce((acc: PartnersByCategory, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as PartnersByCategory);

  // Get partners involved in Omega Apartments
  const omegaPartners = partners.filter(partner => 
    partner.projects.includes('Omega Apartments')
  );

  return (
    <>
      <Header />
      
      <main>
        {/* Partners Hero Section */}
        <section className="page-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="page-title">Our Partners</h1>
            <p className="page-subtitle">
              We collaborate with industry-leading professionals and contractors to deliver exceptional quality on every project.
            </p>
          </div>
        </section>

        {/* Omega Apartments Partners Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Omega Apartments Team</h2>
            <p className="section-subtitle">
              Meet the exceptional professionals and contractors who collaborated with us on the Omega Apartments development.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {omegaPartners.map((partner) => (
                <div key={partner.id} className="partner-card hover-lift">
                  <div className="bg-gray-200 h-40 flex items-center justify-center rounded-t-lg">
                    <p className="text-gray-600">{partner.name} Logo</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 font-serif">{partner.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{partner.category}</p>
                    <div className="quality-divider"></div>
                    <p className="text-gray-600 text-sm mt-4">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners By Category Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Our Professional Network</h2>
            <p className="section-subtitle">
              Abihome Construction partners with the best in the industry to ensure exceptional quality and craftsmanship.
            </p>
            
            {Object.entries(partnersByCategory).map(([category, categoryPartners]) => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 font-serif">{category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPartners.map((partner) => (
                    <div key={partner.id} className="partner-card hover-lift">
                      <div className="bg-gray-200 h-40 flex items-center justify-center rounded-t-lg">
                        <p className="text-gray-600">{partner.name} Logo</p>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-1 font-serif">{partner.name}</h4>
                        <div className="quality-divider"></div>
                        <p className="text-gray-600 text-sm mt-4">{partner.description}</p>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-500">Projects:</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {partner.projects.map((project) => (
                              <span 
                                key={`${partner.id}-${project}`}
                                className="inline-block bg-gray-100 text-primary px-2 py-1 text-xs rounded-full"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Become a Partner Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-serif">Join Our Network of Partners</h2>
                  <div className="quality-divider"></div>
                  <p className="text-lg mb-6 leading-relaxed">
                    We&apos;re always looking to collaborate with exceptional professionals and contractors who share our commitment to quality and excellence.
                  </p>
                  <p className="text-lg mb-8 leading-relaxed">
                    If you&apos;re interested in partnering with Abihome Construction on future projects, we&apos;d love to hear from you.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-block"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="bg-gray-200 h-80 flex items-center justify-center rounded-lg">
                  <p className="text-gray-600">Partnership Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Experience the Difference of Quality Partnerships</h2>
            <p className="cta-description">
              Our network of trusted partners enables us to deliver exceptional results on every project.
            </p>
            <div className="cta-buttons">
              <Link 
                href="/projects" 
                className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
              >
                View Our Projects
              </Link>
              <Link 
                href="/contact" 
                className="bg-accent text-white px-8 py-4 rounded-md font-medium hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
