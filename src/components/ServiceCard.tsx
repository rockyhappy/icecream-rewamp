'use client';

import React from 'react';
import { Service } from '@/utils/api';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card service-card h-100">
      <div className="card-body">
        <div className="service-image mb-3 text-center">
          <Image 
            src={service.image} 
            alt={service.title}
            width={80}
            height={80}
            className="img-fluid"
          />
        </div>
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.description}</p>
        <div className="service-features">
          <h5>Key Features:</h5>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="service-technologies mt-3">
          <h5>Technologies:</h5>
          <div className="d-flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span key={index} className="badge bg-light text-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent border-top-0">
        <Link href={`/services/${service.id}`} className="btn btn-outline-primary">
          Learn More
        </Link>
      </div>
      <style jsx>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #eaeaea;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .service-features ul {
          padding-left: 20px;
          margin-top: 10px;
        }
        
        .service-features li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard; 