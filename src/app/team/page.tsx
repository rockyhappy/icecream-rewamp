'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/TeamMemberCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { TeamMember, fetchTeamMembers } from '@/utils/api';

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately remove any loader
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }

    // Fetch team members
    const getTeamMembers = async () => {
      try {
        const data = await fetchTeamMembers();
        setTeamMembers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load team members. Please try again later.');
        setLoading(false);
      }
    };

    getTeamMembers();
  }, []);

  return (
    <div className="team-page">
      {/* Header */}
      <Header />

      {/* Team Header */}
      <section className="py-5 team-header" style={{ background: 'linear-gradient(to right, #1672cc, #0d5ca9)', color: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>OUR TEAM</h1>
              <p className="lead">Meet the talented individuals behind Software Incubator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-5 leadership-team">
        <div className="container">
          <div className="section-title">
            <h2>Leadership Team</h2>
            <p>Our leadership team guides the vision and direction of Software Incubator</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="row">
              {teamMembers
                .filter(member => member.position.includes('President') || member.position.includes('Lead'))
                .map(member => (
                  <div key={member.id} className="col-md-4 mb-4">
                    <TeamMemberCard member={member} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* All Team Members */}
      <section className="py-5 bg-light all-team">
        <div className="container">
          <div className="section-title">
            <h2>All Team Members</h2>
            <p>Our talented team of developers, designers, and innovators</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="row">
              {teamMembers.map(member => (
                <div key={member.id} className="col-md-4 mb-4">
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-5 join-team" style={{ background: 'linear-gradient(to right, #1672cc, #0d5ca9)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>Join Our Team</h2>
              <p className="lead">
                Are you passionate about technology and innovation? Join Software Incubator and be part of our journey to create amazing solutions.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <a href="/registration" className="btn btn-light btn-lg">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .team-page {
          position: relative;
          z-index: 1;
        }
        
        .team-header {
          margin-top: 0;
          position: relative;
          z-index: 1;
        }
        
        .leadership-team, .all-team, .join-team {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
} 