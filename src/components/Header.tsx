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
          <div className="col-md-4">
            <div className={`open ${menuOpen ? 'oppenned' : ''}`} onClick={toggleMenu}>
              <span className="cls"></span>
              <span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/alumni">Alumni</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/alumni-registration">Alumni Registration</Link>
                  </li>
                  <li>
                    <Link href="/feedback">Feedback</Link>
                  </li>
                </ul>
              </span>
              <span className="cls"></span>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="logo-container">
              <Link href="/">
                <Image 
                  src="/images/silogo.svg" 
                  alt="Software Incubator" 
                  width={150} 
                  height={60}
                  priority
                />
              </Link>
            </div>
          </div>
          
          <div className="col-md-4 text-right">
            <Link href="/registration" className="register_button">
              Register
            </Link>
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
      `}</style>
    </header>
  );
};

export default Header; 