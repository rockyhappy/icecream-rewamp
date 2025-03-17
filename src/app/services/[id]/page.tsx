'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Service, fetchServices } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = parseInt(params.id as string);
  
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately remove any loader
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }

    // Fetch service details
    const getServiceDetails = async () => {
      try {
        const services = await fetchServices();
        const foundService = services.find(s => s.id === serviceId);
        
        if (foundService) {
          setService(foundService);
        } else {
          setError('Service not found');
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load service details. Please try again later.');
        setLoading(false);
      }
    };

    getServiceDetails();
  }, [serviceId]);

  if (loading) {
    return (
      <div className="service-detail-page">
        <Header />
        <div className="container py-5 text-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="service-detail-page">
        <Header />
        <div className="container py-5 text-center">
          <div className="alert alert-danger">
            {error || 'Service not found'}
          </div>
          <Link href="/services" className="btn btn-primary mt-3">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <Header />

      {/* Service Header */}
      <section className="py-5 service-header" style={{ background: 'linear-gradient(to right, #1672cc, #0d5ca9)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>{service.title}</h1>
              <p className="lead">{service.description}</p>
            </div>
            <div className="col-md-4 text-center">
              <Image 
                src={service.image} 
                alt={service.title}
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-5 service-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2>Key Features</h2>
                  <ul className="feature-list">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h2>Our Approach</h2>
                  <p>
                    At Software Incubator, we follow a systematic approach to deliver high-quality {service.title.toLowerCase()} solutions. Our process involves understanding your requirements, designing a solution that meets your needs, implementing the solution using the latest technologies, and providing ongoing support and maintenance.
                  </p>
                  <p>
                    We believe in collaboration and transparency throughout the development process. Our team works closely with you to ensure that the final product exceeds your expectations and delivers value to your business.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h2>Why Choose Us for {service.title}</h2>
                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="fas fa-users fa-2x text-primary"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4>Expert Team</h4>
                          <p>Our team consists of experienced professionals with expertise in {service.title.toLowerCase()}.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="fas fa-code-branch fa-2x text-primary"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4>Modern Technologies</h4>
                          <p>We use the latest technologies and best practices to deliver high-quality solutions.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="fas fa-clock fa-2x text-primary"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4>Timely Delivery</h4>
                          <p>We understand the importance of deadlines and ensure timely delivery of projects.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="fas fa-headset fa-2x text-primary"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4>Ongoing Support</h4>
                          <p>We provide ongoing support and maintenance to ensure the smooth operation of your solution.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h3>Technologies</h3>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-primary p-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h3>Get a Quote</h3>
                  <p>Interested in our {service.title.toLowerCase()} services? Contact us for a free consultation and quote.</p>
                  <form className="mt-3">
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows={4} placeholder="Tell us about your project" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3>Related Services</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <Link href="/services/1" className="text-decoration-none">
                        Web Development
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/services/2" className="text-decoration-none">
                        Mobile Development
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link href="/services/3" className="text-decoration-none">
                        Machine Learning
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-light service-cta">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="lead">
            Contact us today to discuss your {service.title.toLowerCase()} project and how we can help you achieve your goals.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg mt-3">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .service-detail-page {
          position: relative;
          z-index: 1;
        }
        
        .service-header {
          margin-top: 0;
          position: relative;
          z-index: 1;
        }
        
        .service-details, .service-cta {
          position: relative;
          z-index: 1;
        }
        
        .feature-list {
          list-style: none;
          padding-left: 0;
        }
        
        .feature-item {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        
        .feature-item:hover {
          background-color: rgba(22, 114, 204, 0.05);
        }
      `}</style>
    </div>
  );
} 