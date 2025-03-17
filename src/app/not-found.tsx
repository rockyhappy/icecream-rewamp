'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Header />
      
      <section className="py-5">
        <div className="container text-center">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-5">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 