import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from '@/components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout title="Contact | Vedkamal - Full Stack Developer">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Have a project in mind or want to discuss a potential collaboration?
              Feel free to reach out!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="card h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <FaMapMarkerAlt className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-text-secondary">Your Location, Country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <FaEnvelope className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:Vedkamlpal@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                        Vedkamlpal@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <FaPhone className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <a href="tel:+917251818068" className="text-text-secondary hover:text-primary transition-colors">
                        +91 7251818068
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-text-muted/10">
                  <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-surface-light hover:bg-primary/10 text-text-secondary hover:text-primary transition-all"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-surface-light hover:bg-primary/10 text-text-secondary hover:text-primary transition-all"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-surface-light hover:bg-primary/10 text-text-secondary hover:text-primary transition-all"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center"
                  >
                    <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="button-primary mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-text-secondary mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-surface-dark border border-text-muted/20 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-text-secondary mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-surface-dark border border-text-muted/20 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-text-secondary mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-dark border border-text-muted/20 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-text-secondary mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-surface-dark border border-text-muted/20 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Hello, I'd like to discuss a project..."
                      ></textarea>
                    </div>
                    
                    {submitError && (
                      <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                        {submitError}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`button-primary w-full flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 