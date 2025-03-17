'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Service, fetchServices } from '@/utils/api';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately remove any loader
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }

    // Fetch services
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      }
    };

    getServices();
  }, []);

  return (
    <div className="services-page">
      {/* Header */}
      <Header />

      {/* Services Header */}
      <section className="py-5 services-header" style={{ background: 'linear-gradient(to right, #EF334C, #ffffff)', color: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>OUR SERVICES</h1>
              <p className="lead">Explore the range of technical services we offer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-5 services-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Innovative Solutions for Modern Challenges</h2>
              <p>
                At Programming Club, we offer a comprehensive range of technical services to help businesses and organizations leverage technology for growth and innovation. Our team of skilled developers, designers, and engineers work collaboratively to deliver high-quality solutions tailored to your specific needs.
              </p>
              <p>
                Whether you need a responsive website, a mobile application, or a complex machine learning solution, we have the expertise to bring your vision to life. We follow industry best practices and use the latest technologies to ensure that our solutions are robust, scalable, and future-proof.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img 
                src="/images/service-desk.svg" 
                alt="Services" 
                className="img-fluid" 
                style={{ maxHeight: '300px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-5 bg-light services-list">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Discover the wide range of services we offer</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="row">
              {services.map(service => (
                <div key={service.id} className="col-md-6 mb-4">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What sets Programming Club apart from others</p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-code fa-3x mb-3 text-primary"></i>
                  <h4>Technical Expertise</h4>
                  <p>
                    Our team consists of skilled developers and engineers with expertise in various technologies and domains.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-users fa-3x mb-3 text-primary"></i>
                  <h4>Collaborative Approach</h4>
                  <p>
                    We work closely with our clients to understand their needs and deliver solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-rocket fa-3x mb-3 text-primary"></i>
                  <h4>Innovation</h4>
                  <p>
                    We stay updated with the latest technologies and trends to deliver innovative solutions for modern challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-5 contact-cta" style={{ background: 'linear-gradient(to right, #EF334C, #ffffff)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>Need a Custom Solution?</h2>
              <p className="lead">
                Contact us to discuss your project requirements and how we can help you achieve your goals.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <a href="#contact" className="btn btn-light btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .services-page {
          position: relative;
          z-index: 1;
        }
        
        .services-header {
          margin-top: 0;
          position: relative;
          z-index: 1;
        }
        
        .services-intro, .services-list, .why-choose-us, .contact-cta {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
} 