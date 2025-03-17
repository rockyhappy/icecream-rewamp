'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  useEffect(() => {
    // Hide loader when page is loaded
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js, a React framework.',
      date: 'March 15, 2023',
      author: 'John Doe',
      image: '/images/service-web.svg',
    },
    {
      id: 2,
      title: 'Introduction to Machine Learning',
      excerpt: 'Discover the basics of machine learning and how it can be applied to solve real-world problems.',
      date: 'February 28, 2023',
      author: 'Jane Smith',
      image: '/images/service-ml.svg',
    },
    {
      id: 3,
      title: 'Mobile App Development with React Native',
      excerpt: 'Build cross-platform mobile applications using React Native framework.',
      date: 'January 20, 2023',
      author: 'Mike Johnson',
      image: '/images/service-mob.svg',
    },
  ];

  return (
    <main>
      {/* Loader */}
      <div id="loader">
        <img className="loader-img" src="/images/loader.svg" alt="Loading..." />
      </div>

      {/* Header */}
      <Header />

      {/* Blog Header */}
      <section className="py-5" style={{ background: 'url(/images/blogbg.jpg)', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-white">
              <h1>OUR BLOG</h1>
              <p>Stay updated with our latest articles and news</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{post.date}</small>
                      <small className="text-muted">By {post.author}</small>
                    </div>
                    <Link href={`/blog/${post.id}`} className="btn btn-primary mt-3">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 