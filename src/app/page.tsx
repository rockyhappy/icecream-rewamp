'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Hide loader when page is loaded
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }

    // Load external scripts
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript('/js/javascript.js');
    loadScript('/js/ticker.min.js');
    loadScript('/js/typed.min.js');

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <main>
      {/* Loader */}
      <div id="loader">
        <img className="loader-img" src="/images/logo.png" alt="Loading..." />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="content-si">
        <div className="background">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="/images/logo.png" alt="Programming Club Logo" className="logo-image" />
                <h2 className="believe">WE BELIEVE IN INNOVATION</h2>
                <div className="type-wrap">
                  <span id="typed" className="matter"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="slider-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2>OUR SERVICES</h2>
              <p>We provide a wide range of technical services</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src="/images/service-web.svg" alt="Web Development" className="mb-3" style={{ height: '100px' }} />
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">We create responsive and dynamic websites using the latest technologies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src="/images/service-mob.svg" alt="Mobile Development" className="mb-3" style={{ height: '100px' }} />
                  <h5 className="card-title">Mobile Development</h5>
                  <p className="card-text">We build native and cross-platform mobile applications for iOS and Android.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <img src="/images/service-ml.svg" alt="Machine Learning" className="mb-3" style={{ height: '100px' }} />
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">We implement machine learning solutions for various business problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutus_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>ABOUT US</h2>
              <p className="justify-text">
                Software Incubator is the technical society of ABES Engineering College. We aim to enhance the technical skills of our members and provide them with a platform to showcase their talents. We organize various technical events, workshops, and hackathons to promote technical culture in the college.
              </p>
              <p className="justify-text">
                Our members work on various projects in different domains like Web Development, Mobile Development, Machine Learning, and more. We also provide internship opportunities to our members in various companies.
              </p>
              <Link href="/about" className="btn btn-primary mt-3">Learn More</Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/video.jpg" alt="About Us" className="video-frame" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2>OUR TECHNOLOGIES</h2>
              <p>We work with the latest technologies</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/python.png" alt="Python" className="clients" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/java.png" alt="Java" className="clients" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/js.png" alt="JavaScript" className="clients" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/node-js.png" alt="Node.js" className="clients" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/android.png" alt="Android" className="clients" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img src="/images/ios.png" alt="iOS" className="clients" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contactus_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>CONTACT US</h2>
              <p>Feel free to reach out to us for any queries or collaborations.</p>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={5} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="contact_button">Send Message</button>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/map.png" alt="Map" className="map-frame" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 