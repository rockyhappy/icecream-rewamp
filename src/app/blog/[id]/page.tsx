'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js, a React framework.',
    content: `
      <p>Next.js is a React framework that enables server-side rendering and static site generation for React applications. It provides a great developer experience with features like file-system routing, API routes, and built-in CSS support.</p>
      
      <h3>Why Next.js?</h3>
      <p>Next.js solves many common problems in React applications, such as:</p>
      <ul>
        <li>Server-side rendering for better SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple file-based routing</li>
        <li>Built-in CSS and Sass support</li>
        <li>API routes to build API endpoints with serverless functions</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js application, you can use the following command:</p>
      <pre><code>npx create-next-app my-app</code></pre>
      
      <p>This will create a new Next.js application in the my-app directory. You can then navigate to the directory and start the development server:</p>
      <pre><code>cd my-app
npm run dev</code></pre>
      
      <p>Your application will be available at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
      
      <h3>Conclusion</h3>
      <p>Next.js is a powerful framework for building React applications. It provides a great developer experience and many features that make it easy to build high-performance web applications.</p>
    `,
    date: 'March 15, 2023',
    author: 'John Doe',
    image: '/images/service-web.svg',
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning',
    excerpt: 'Discover the basics of machine learning and how it can be applied to solve real-world problems.',
    content: `
      <p>Machine Learning is a subset of artificial intelligence that focuses on developing systems that can learn from and make decisions based on data. It enables computers to learn without being explicitly programmed.</p>
      
      <h3>Types of Machine Learning</h3>
      <p>There are three main types of machine learning:</p>
      <ul>
        <li><strong>Supervised Learning:</strong> The algorithm is trained on labeled data, meaning that each training example is paired with an output label.</li>
        <li><strong>Unsupervised Learning:</strong> The algorithm is trained on unlabeled data and must find patterns and relationships on its own.</li>
        <li><strong>Reinforcement Learning:</strong> The algorithm learns by interacting with an environment and receiving rewards or penalties for its actions.</li>
      </ul>
      
      <h3>Common Machine Learning Algorithms</h3>
      <p>Some common machine learning algorithms include:</p>
      <ul>
        <li>Linear Regression</li>
        <li>Logistic Regression</li>
        <li>Decision Trees</li>
        <li>Random Forests</li>
        <li>Support Vector Machines</li>
        <li>Neural Networks</li>
      </ul>
      
      <h3>Applications of Machine Learning</h3>
      <p>Machine learning is used in a wide range of applications, including:</p>
      <ul>
        <li>Image and speech recognition</li>
        <li>Natural language processing</li>
        <li>Recommendation systems</li>
        <li>Fraud detection</li>
        <li>Autonomous vehicles</li>
        <li>Medical diagnosis</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Machine learning is a rapidly evolving field with many exciting applications. As data continues to grow in volume and complexity, machine learning will play an increasingly important role in extracting insights and making predictions.</p>
    `,
    date: 'February 28, 2023',
    author: 'Jane Smith',
    image: '/images/service-ml.svg',
  },
  {
    id: 3,
    title: 'Mobile App Development with React Native',
    excerpt: 'Build cross-platform mobile applications using React Native framework.',
    content: `
      <p>React Native is a popular JavaScript framework for building native mobile applications. It allows developers to use React along with native platform capabilities to build mobile apps for iOS and Android.</p>
      
      <h3>Why React Native?</h3>
      <p>React Native offers several advantages for mobile app development:</p>
      <ul>
        <li>Cross-platform development: Write once, run on both iOS and Android</li>
        <li>Faster development: Hot reloading allows for quick iteration</li>
        <li>Native performance: Direct access to native APIs and components</li>
        <li>Large community and ecosystem: Many libraries and tools available</li>
        <li>Familiar React syntax: Easy for web developers to learn</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new React Native application, you can use the following command:</p>
      <pre><code>npx react-native init MyApp</code></pre>
      
      <p>This will create a new React Native application in the MyApp directory. You can then navigate to the directory and start the development server:</p>
      <pre><code>cd MyApp
npx react-native run-ios  # For iOS
npx react-native run-android  # For Android</code></pre>
      
      <h3>Key Components</h3>
      <p>React Native provides a set of core components that map directly to native UI components:</p>
      <ul>
        <li><code>View</code>: A container component similar to a div in web development</li>
        <li><code>Text</code>: A component for displaying text</li>
        <li><code>Image</code>: A component for displaying images</li>
        <li><code>ScrollView</code>: A scrollable container</li>
        <li><code>FlatList</code>: A component for rendering large lists of data efficiently</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>React Native is a powerful framework for building cross-platform mobile applications. It combines the best of React with native mobile development, allowing developers to create high-quality mobile apps with a single codebase.</p>
    `,
    date: 'January 20, 2023',
    author: 'Mike Johnson',
    image: '/images/service-mob.svg',
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blogId = Number(id);
  
  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === blogId);

  useEffect(() => {
    // Hide loader when page is loaded
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
  }, []);

  if (!blogPost) {
    return (
      <main>
        <Header />
        <section className="py-5">
          <div className="container text-center">
            <h1>Blog Post Not Found</h1>
            <p className="lead mb-4">The blog post you are looking for does not exist.</p>
            <Link href="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

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
              <h1>{blogPost.title}</h1>
              <p>
                <span className="mr-3">By {blogPost.author}</span>
                <span>{blogPost.date}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <img src={blogPost.image} className="card-img-top" alt={blogPost.title} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  <div className="mt-4">
                    <Link href="/blog" className="btn btn-primary">
                      Back to Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 