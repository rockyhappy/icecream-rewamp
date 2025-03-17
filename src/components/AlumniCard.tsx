'use client';

import { Alumni } from '@/utils/api';
import Image from 'next/image';

interface AlumniCardProps {
  alumni: Alumni;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <div className="alumni-card">
      <div className="position-relative" style={{ height: '200px' }}>
        <Image
          src={alumni.image}
          alt={alumni.name}
          fill
          style={{ objectFit: 'cover' }}
          className="alumni-image"
        />
      </div>
      <div className="alumni-info">
        <h3 className="alumni-name">{alumni.name}</h3>
        <p className="alumni-position">{alumni.position}</p>
        <p className="alumni-company">{alumni.company}</p>
        <span className="alumni-batch">Batch {alumni.batch}</span>
        <p className="alumni-testimonial">"{alumni.testimonial}"</p>
        <div className="social-links">
          {Object.entries(alumni.socialLinks).map(([platform, url]) => {
            if (!url) return null;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={platform}
              >
                <i className={`fab fa-${platform.toLowerCase()}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlumniCard; 