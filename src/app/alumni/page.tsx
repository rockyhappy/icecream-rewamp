'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlumniCard from '@/components/AlumniCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Alumni, fetchAlumni } from '@/utils/api';
import Link from 'next/link';

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Immediately remove any loader
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }

    // Fetch alumni
    const getAlumni = async () => {
      try {
        const data = await fetchAlumni();
        setAlumni(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load alumni. Please try again later.');
        setLoading(false);
      }
    };

    getAlumni();
  }, []);

  // Get unique batches for filter without using Set spread
  const batches = Array.from(
    alumni.reduce((acc, alumnus) => {
      acc.add(alumnus.batch);
      return acc;
    }, new Set<string>())
  ).sort((a, b) => parseInt(b) - parseInt(a));

  // Filter alumni based on selected batch
  const filteredAlumni = filter === 'all' 
    ? alumni 
    : alumni.filter(a => a.batch === filter);

  return (
    <div className="alumni-page">
      {/* Header */}
      <Header />

      {/* Alumni Header */}
      <section className="py-5 alumni-header" style={{ background: 'linear-gradient(to right, #1672cc, #0d5ca9)', color: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>OUR ALUMNI</h1>
              <p className="lead">Meet the successful graduates of Software Incubator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Filter */}
      <section className="py-4 bg-light alumni-filter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-center flex-wrap">
                <button 
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'} m-2`}
                  onClick={() => setFilter('all')}
                >
                  All Batches
                </button>
                {batches.map(batch => (
                  <button 
                    key={batch} 
                    className={`btn ${filter === batch ? 'btn-primary' : 'btn-outline-primary'} m-2`}
                    onClick={() => setFilter(batch)}
                  >
                    Batch {batch}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni List */}
      <section className="py-5 alumni-list">
        <div className="container">
          <div className="section-title">
            <h2>Our Alumni Network</h2>
            <p>Our alumni are working at top companies around the world</p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : filteredAlumni.length === 0 ? (
            <div className="text-center py-5">
              <h3>No alumni found for the selected filter.</h3>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => setFilter('all')}
              >
                View All Alumni
              </button>
            </div>
          ) : (
            <div className="row">
              {filteredAlumni.map(alumnus => (
                <div key={alumnus.id} className="col-md-4 mb-4">
                  <AlumniCard alumni={alumnus} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Alumni Network */}
      <section className="py-5 join-alumni" style={{ background: 'linear-gradient(to right, #1672cc, #0d5ca9)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>Join Our Alumni Network</h2>
              <p className="lead">
                Are you a former member of Software Incubator? Join our alumni network to stay connected and contribute to our community.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <Link href="/alumni-registration" className="btn btn-light btn-lg">
                Register as Alumni
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .alumni-page {
          position: relative;
          z-index: 1;
        }
        
        .alumni-header {
          margin-top: 0;
          position: relative;
          z-index: 1;
        }
        
        .alumni-filter, .alumni-list, .join-alumni {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
} 