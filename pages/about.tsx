import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import Layout from '@/components/Layout';

// Experience items
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Acme Tech Inc.',
    period: '2021 - Present',
    description: 'Led the development of web applications using React, Node.js, and MongoDB. Implemented modern CI/CD pipelines and mentored junior developers.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Solutions Ltd.',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects with MERN stack. Collaborated with UI/UX designers to implement responsive interfaces.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Innovators',
    period: '2017 - 2019',
    description: 'Built dynamic user interfaces using React and worked on optimization techniques for better performance.',
  },
];

// Services offered
const services = [
  {
    icon: <FaCode className="text-primary text-3xl" />,
    title: 'Frontend Development',
    description: 'Creating responsive, accessible, and performant user interfaces with modern JavaScript frameworks.'
  },
  {
    icon: <FaServer className="text-primary text-3xl" />,
    title: 'Backend Development',
    description: 'Building robust server-side applications with Node.js, Express, and other modern frameworks.'
  },
  {
    icon: <FaMobileAlt className="text-primary text-3xl" />,
    title: 'Responsive Web Design',
    description: 'Ensuring applications look and work great on all devices, from mobile phones to desktops.'
  },
  {
    icon: <FaDatabase className="text-primary text-3xl" />,
    title: 'Database Architecture',
    description: 'Designing and implementing efficient database structures for optimal performance.'
  },
];

export default function About() {
  return (
    <Layout title="About Me | Vedkamal - Full Stack Developer">
      {/* About Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Get to know more about me, my experience, and what I do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20"></div>
              <div className="relative animate-float">
                <div className="aspect-square rounded-full bg-surface/80 border border-primary/10 flex items-center justify-center overflow-hidden glow shadow-xl">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Vedkamal" 
                    width={400} 
                    height={400} 
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                I'm <span className="gradient-text">Vedkamal</span>, a Full Stack Developer
              </h2>
              <p className="text-text-secondary mb-6">
                With several years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I'm passionate about using technology to solve real-world problems and deliver exceptional user experiences.
              </p>
              <p className="text-text-secondary mb-6">
                My journey in web development began with a fascination for creating user interfaces that are not only visually appealing but also functionally powerful. Over the years, I've expanded my skills to cover the entire development stack.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Education</h3>
                  <p className="text-text-secondary">BSc in Computer Science</p>
                  <p className="text-text-muted">University Name, 2017</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                  <p className="text-text-secondary">Your Location</p>
                  <p className="text-text-muted">Available for remote work</p>
                </div>
              </div>
              
              <Link href="/files/resume.pdf" target="_blank" className="button-primary inline-flex items-center gap-2">
                Download CV <FaDownload />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-surface/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              My professional journey and the experience I've gained over the years
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8 relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-primary"></div>
                <div className="card">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="text-text-muted text-sm px-3 py-1 rounded-full bg-surface-light">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I provide a range of development services to help you build your dream project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card group hover:border-primary/30 transition-all"
              >
                <div className="p-3 rounded-lg bg-surface-light inline-block mb-4 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 