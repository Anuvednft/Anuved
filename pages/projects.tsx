import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { portfolioConfig } from '@/config/portfolio';

// Project categories
const categories = ['All', 'Mobile App', 'Web App'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? portfolioConfig.projects 
    : portfolioConfig.projects.filter(project => project.category === activeCategory);
  
  return (
    <Layout title="Projects | Vedkamal - Full Stack Developer">
      {/* Projects Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-text-secondary text-lg mb-12">
              Explore my recent work and projects I've built using various technologies
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-secondary hover:bg-surface-light'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card group hover:border-primary/30 transition-all overflow-hidden flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-surface hover:bg-surface-light text-primary transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary hover:bg-primary-light text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="flex-1">
                  {/* Category Tag */}
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                    {project.category}
                  </span>
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded bg-surface-light text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* No Projects Found Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-surface/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities.
            Feel free to reach out if you're looking for a developer!
          </p>
          <Link href="/contact" className="button-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
} 