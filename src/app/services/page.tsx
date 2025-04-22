import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serviceProcess, previousProjects } from '../../app/services-projects';

export default function Services() {
  return (
    <>
      <Header />
      
      <main>
        {/* Services Hero Section */}
        <section className="page-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              From land acquisition to project completion, we deliver exceptional quality at every stage.
            </p>
          </div>
        </section>

        {/* ISO Certification Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-serif">ISO 9001 Certified Quality</h2>
                  <div className="quality-divider"></div>
                  <p className="text-lg mb-6 leading-relaxed">
                    As an ISO 9001 certified construction company, Abihomes Ltd adheres to the highest international standards for quality management systems.
                  </p>
                  <p className="text-lg mb-8 leading-relaxed">
                    This certification demonstrates our commitment to consistent quality, customer satisfaction, and continuous improvement in all our construction projects.
                  </p>
                </div>
                <div className="bg-gray-200 h-80 flex items-center justify-center rounded-lg">
                  <p className="text-gray-600">ISO 9001 Certification Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              Our comprehensive approach ensures excellence from initial concept to final handover.
            </p>
            
            <div className="mt-12">
              {serviceProcess.map((process, index) => (
                <div key={index} className="mb-16">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold ml-4 font-serif">{process.title}</h3>
                  </div>
                  <div className="pl-16">
                    <p className="text-lg mb-6">{process.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-4 text-primary">Key Activities:</h4>
                      <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                        {process.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore some of our recent construction projects that showcase our quality and expertise.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {previousProjects.map((project, index) => (
                <div key={index} className="quality-card hover-lift">
                  <div className="bg-gray-200 h-56 flex items-center justify-center rounded-t-lg">
                    <p className="text-gray-600">{project.title} Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 font-serif">{project.title}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{project.location}</p>
                    <div className="quality-divider"></div>
                    <p className="text-gray-600 mt-4">{project.description}</p>
                    <div className="mt-6">
                      {project.details.initialValue && project.details.completedValue && (
                        <div className="mb-3">
                          <p className="text-sm font-medium">Value Increase:</p>
                          <p className="text-lg font-semibold text-primary">
                            {project.details.initialValue} → {project.details.completedValue}
                          </p>
                        </div>
                      )}
                      {project.details.value && (
                        <div className="mb-3">
                          <p className="text-sm font-medium">Project Value:</p>
                          <p className="text-lg font-semibold text-primary">{project.details.value}</p>
                        </div>
                      )}
                    </div>
                    <Link 
                      href={`/projects/${index}`} 
                      className="inline-block mt-4 text-primary font-medium hover:underline"
                    >
                      View Project Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Construction Project?</h2>
            <p className="cta-description">
              Contact us today to discuss how we can bring your vision to life with our quality-focused approach.
            </p>
            <div className="cta-buttons">
              <Link 
                href="/projects" 
                className="bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
              >
                View More Projects
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
