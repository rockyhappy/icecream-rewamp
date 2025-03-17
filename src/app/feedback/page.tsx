'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '5',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Hide loader when page is loaded
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '5',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <main>
      {/* Loader */}
      <div id="loader">
        <img className="loader-img" src="/images/loader.svg" alt="Loading..." />
      </div>

      {/* Header */}
      <Header />

      {/* Feedback Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  <h3>FEEDBACK FORM</h3>
                </div>
                <div className="card-body">
                  {submitSuccess ? (
                    <div className="alert alert-success" role="alert">
                      Thank you for your feedback! We appreciate your input.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="rating">Rating</label>
                        <select
                          className="form-control"
                          id="rating"
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          required
                        >
                          <option value="5">Excellent (5)</option>
                          <option value="4">Very Good (4)</option>
                          <option value="3">Good (3)</option>
                          <option value="2">Fair (2)</option>
                          <option value="1">Poor (1)</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="feedback">Your Feedback</label>
                        <textarea
                          className="form-control"
                          id="feedback"
                          name="feedback"
                          rows={5}
                          value={formData.feedback}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>
                      </div>
                    </form>
                  )}
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