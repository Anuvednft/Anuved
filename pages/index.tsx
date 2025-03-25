import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiGraphql } from 'react-icons/si';
import Layout from '@/components/Layout';

// Tech stack items
const technologies = [
  { name: 'React', category: 'Frontend', icon: 'FaReact', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#000000' },
  { name: 'TypeScript', category: 'Language', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', category: 'Language', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Node.js', category: 'Backend', icon: 'FaNodeJs', color: '#339933' },
  { name: 'Express', category: 'Backend', icon: 'SiExpress', color: '#000000' },
  { name: 'MongoDB', category: 'Database', icon: 'SiMongodb', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Database', icon: 'SiPostgresql', color: '#4169E1' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'GraphQL', category: 'API', icon: 'SiGraphql', color: '#E10098' },
  { name: 'Git', category: 'Tool', icon: 'FaGitAlt', color: '#F05032' },
  { name: 'Docker', category: 'DevOps', icon: 'FaDocker', color: '#2496ED' }
];

// Featured projects
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard.',
    image: '/images/project-ecommerce.jpg',
    category: 'Web App',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard to manage multiple social media accounts with analytics and scheduling features.',
    image: '/images/project-dashboard.jpg',
    category: 'Web App',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A mobile application for managing tasks, to-do lists, and reminders with cloud synchronization.',
    image: '/images/project-taskapp.jpg',
    category: 'Mobile App',
    technologies: ['React Native', 'Redux', 'Firebase'],
    github: '#',
    demo: '#',
  },
];

// Featured skills 
const featuredSkillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'GraphQL', level: 65 },
    ],
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Animated Background */}
      <div className="animated-background"></div>
      <div className="bg-shapes"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-primary mb-4 font-mono">Hello there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Vedkamal</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-text-secondary font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl">
              I build exceptional digital experiences that are fast, 
              accessible, visually appealing, and responsive. My focus is on 
              creating seamless applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary flex items-center gap-2">
                View My Work
                <FaArrowRight />
              </Link>
              <Link href="/contact" className="button-secondary flex items-center gap-2">
                Get In Touch
              </Link>
            </div>
            
            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20"></div>
            <div className="relative animate-float">
              {/* Placeholder for profile image - replace with actual image */}
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
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here are some of my recent works. I've built these projects using various technologies and frameworks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card group hover:border-primary/20 transition-all overflow-hidden flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <div className="bg-surface-light h-full w-full flex items-center justify-center">
                    {/* Replace emojis with actual images */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white hover:bg-surface text-primary transition-colors shadow-sm"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary hover:bg-primary-light text-white transition-colors shadow-sm"
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
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded bg-surface text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-surface text-text-secondary">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="button-primary inline-flex items-center gap-2">
              View All Projects <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-surface/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here's an overview of my technical skills and expertise in various technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredSkillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/skills" className="button-primary inline-flex items-center gap-2">
              View All Skills <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I work with a variety of technologies to create robust and scalable applications.
              Here are some of the key technologies I specialize in:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              // Get the correct icon component
              let IconComponent;
              switch(tech.icon) {
                case 'FaReact': IconComponent = FaReact; break;
                case 'SiNextdotjs': IconComponent = SiNextdotjs; break;
                case 'SiTypescript': IconComponent = SiTypescript; break;
                case 'SiJavascript': IconComponent = SiJavascript; break;
                case 'FaNodeJs': IconComponent = FaNodeJs; break;
                case 'SiExpress': IconComponent = SiExpress; break;
                case 'SiMongodb': IconComponent = SiMongodb; break;
                case 'SiPostgresql': IconComponent = SiPostgresql; break;
                case 'SiTailwindcss': IconComponent = SiTailwindcss; break;
                case 'SiGraphql': IconComponent = SiGraphql; break;
                case 'FaGitAlt': IconComponent = FaGitAlt; break;
                case 'FaDocker': IconComponent = FaDocker; break;
                default: IconComponent = FaReact;
              }
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="card p-6 flex flex-col items-center justify-center group hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all duration-300 group-hover:shadow-md"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <IconComponent size={32} style={{ color: tech.color }} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <p className="text-lg font-medium text-text-secondary group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                  <span className="text-xs text-text-secondary/70 mt-1 bg-surface-light px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
          
           
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/skills" className="button-secondary inline-flex items-center gap-2 group">
              <span>View All Technologies</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative glass-effect rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something <span className="gradient-text">Amazing</span> Together
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                I'm currently available for freelance work and open to new opportunities.
                If you have a project that needs some creative touch, let's get in touch.
              </p>
              <Link href="/contact" className="button-primary inline-flex items-center gap-2">
                Start a Project
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 