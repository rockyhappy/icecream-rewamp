'use client';

import { TeamMember } from '@/utils/api';
import Image from 'next/image';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="team-member-card">
      <div className="position-relative" style={{ height: '250px' }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
          className="team-member-image"
        />
      </div>
      <div className="team-member-info">
        <h3 className="team-member-name">{member.name}</h3>
        <p className="team-member-position">{member.position}</p>
        <p className="team-member-bio">{member.bio}</p>
        <div className="team-member-skills">
          {member.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="social-links">
          {Object.entries(member.socialLinks).map(([platform, url]) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 