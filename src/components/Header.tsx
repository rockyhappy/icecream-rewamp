'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={`open ${menuOpen ? 'oppenned' : ''}`} onClick={toggleMenu}>
              <span className="cls"></span>
              <span style={menuOpen ? { height: '600px', width: '400px', borderRadius: 0 } : {}}>
                <ul className="sub-menu" style={{ borderRadius: 0, paddingLeft: '40px', height: menuOpen ? '600px' : 'auto' }}>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginTop: '150px', marginBottom: '15px' }}>
                    <Link href="/" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Home</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/achievements" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Achievements</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/team" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Team</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/alumni" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Alumni</Link>
                  </li>
                  {/* 
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/services" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Services</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/blog" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Blog</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/alumni-registration" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Alumni Registration</Link>
                  </li>
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link href="/feedback" style={{ display: 'block', width: '100%', textAlign: 'left' }}>Feedback</Link>
                  </li>
                  */}
                  <li style={{ paddingLeft: '40px', marginLeft: '100px', width: '250px', textAlign: 'left', marginBottom: '15px' }}>
                    <Link 
                      href="/registration" 
                      style={{ 
                        display: 'block', 
                        width: '100%', 
                        textAlign: 'left',
                        color: '#EF334C',
                        fontWeight: 'bold'
                      }}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </span>
              <span className="cls"></span>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="logo-container">
              <Link href="/">
                <Image 
                  src="/images/logo.png" 
                  alt="Programming Club" 
                  width={150} 
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        header {
          padding: 15px 0;
        }
        
        .logo-container {
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .logo-container {
            text-align: center;
            margin: 10px 0;
          }
        }
        
        /* Additional navigation styles */
        :global(.sub-menu) {
          border-radius: 0 !important;
          padding-left: 40px !important;
          transform: scale(0);
          transform-origin: top left;
          transition: transform 0.3s ease !important;
        }
        
        :global(.oppenned .sub-menu) {
          height: 600px !important;
          width: 400px !important;
          transform: scale(1);
        }
        
        :global(.oppenned span:nth-child(2)) {
          height: 600px !important;
          width: 400px !important;
          border-radius: 0 !important;
          transition: all 0.3s ease !important;
        }
        
        :global(.sub-menu li) {
          padding-left: 40px !important;
          margin-left: 100px !important;
          width: 250px !important;
          text-align: left !important;
          margin-bottom: 15px !important;
        }
        
        :global(.sub-menu li:first-child) {
          margin-top: 150px !important;
        }
        
        :global(.sub-menu li a) {
          display: block !important;
          width: 100% !important;
          text-align: left !important;
        }
      `}</style>
    </header>
  );
};

export default Header; 