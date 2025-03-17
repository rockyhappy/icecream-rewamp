'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-4 mb-4">
            <h5 className="text-white">SOFTWARE INCUBATOR</h5>
            <p className="text-white-50">
              Software Incubator is the technical society of ABES Engineering College. We aim to enhance the technical skills of our members and provide them with a platform to showcase their talents.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-white">QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white-50">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-white-50">Services</Link>
              </li>
              <li>
                <Link href="/team" className="text-white-50">Team</Link>
              </li>
              <li>
                <Link href="/alumni" className="text-white-50">Alumni</Link>
              </li>
              <li>
                <Link href="/blog" className="text-white-50">Blog</Link>
              </li>
              <li>
                <Link href="/alumni-registration" className="text-white-50">Alumni Registration</Link>
              </li>
              <li>
                <Link href="/feedback" className="text-white-50">Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-white">CONTACT US</h5>
            <p className="text-white-50">
              Software Incubator<br />
              ABES Engineering College<br />
              Campus - 1, 19th KM Stone, NH-24<br />
              Ghaziabad, Uttar Pradesh 201009
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="text-white mr-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white mr-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white mr-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 text-white-50">
        © {new Date().getFullYear()} Software Incubator. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 