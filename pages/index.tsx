import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaExternalLinkAlt, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiJavascript, SiFirebase, SiMongodb, SiSupabase, SiTailwindcss, SiAndroid } from 'react-icons/si';
import Layout from '@/components/Layout';
import { portfolioConfig } from '@/config/portfolio';

export default function Home() {
  return (
    <Layout>
      {/* Animated Background */}
      <div className="animated-background"></div>
      <div className="bg-shapes"></div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'linear-gradient(rgba(21,177,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,177,212,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Availability badge */}
            {portfolioConfig.personal.availability && (
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {portfolioConfig.personal.availability}
              </div>
            )}
            <p className="text-primary font-mono text-lg mb-3 tracking-wider">Hello there, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="gradient-text">{portfolioConfig.personal.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-secondary">
              {portfolioConfig.personal.role.split('&').map((part, i, arr) => 
                i === 0 ? <React.Fragment key={i}>{part} &amp; </React.Fragment> : <span key={i} className="text-primary">{part}</span>
              )}
            </h2>
            <p className="text-text-secondary text-lg mb-6 max-w-lg leading-relaxed">
              {portfolioConfig.personal.about.short}
            </p>
            {/* Stats */}
            <div className="flex gap-6 mb-8 p-4 rounded-2xl border" style={{ background: 'rgb(var(--surface))', borderColor: 'var(--border)', boxShadow: '0 4px 20px var(--card-hover)' }}>
              {portfolioConfig.stats.map((s,i)=>(
                <div key={s.label} className={`text-center flex-1 ${i<2?'border-r':''}`} style={{ borderColor: 'var(--border)' }}>
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-text-secondary mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="button-primary flex items-center gap-2">
                View My Work
                <FaArrowRight />
              </Link>
              <Link href="/contact" className="button-secondary flex items-center gap-2">
                Get In Touch
              </Link>
            </div>
            
            <div className="flex gap-4 mt-4">
              {portfolioConfig.social.github && (
                <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{ background: 'rgb(var(--surface))', border: '1px solid var(--border)', color: 'rgb(var(--text-primary))' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,177,212,0.5)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(21,177,212,0.18)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <FaGithub size={18} style={{ color: 'rgb(var(--text-primary))' }} />
                  <span>GitHub</span>
                </a>
              )}
              {portfolioConfig.social.linkedin && (
                <a href={portfolioConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{ background: 'rgb(var(--surface))', border: '1px solid var(--primary)', color: 'rgb(var(--text-primary))' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(21,177,212,0.6)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(21,177,212,0.22)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <FaLinkedin size={18} style={{ color: '#15B1D4' }} />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block w-full"
            style={{ position: 'relative', height: '600px', flexShrink: 0 }}
          >
            {/* Background glow blobs */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '360px', height: '360px', marginTop: '-180px', marginLeft: '-180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,177,212,0.18) 0%, transparent 70%)', pointerEvents: 'none', boxShadow: 'var(--shadow-ring)' }} />

            {/* Static guide rings with shadow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '560px', height: '560px', marginTop: '-280px', marginLeft: '-280px', borderRadius: '50%', border: '1px dashed var(--border)', boxShadow: 'var(--shadow-ring)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '380px', height: '380px', marginTop: '-190px', marginLeft: '-190px', borderRadius: '50%', border: '1px dashed var(--border)', boxShadow: 'var(--shadow-ring)', pointerEvents: 'none' }} />

            {/* Skill orbiters — each gets own orbit div centered via negative margins */}
            {portfolioConfig.heroOrbiters.map((s) => (
              <div key={s.label} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: `${s.r * 2}px`, height: `${s.r * 2}px`,
                marginTop: `-${s.r}px`, marginLeft: `-${s.r}px`,
                borderRadius: '50%',
                animation: `spin ${s.dur}s linear infinite`,
                animationDelay: `${-(s.dur * s.frac)}s`,
              }}>
                {/* Pill at top of this orbit circle, counter-rotates to stay upright */}
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgb(var(--surface))',
                  border: `1px solid ${s.border}`,
                  color: 'rgb(var(--text-primary))',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap',
                  boxShadow: 'var(--shadow-pill)',
                  animation: `counter-spin ${s.dur}s linear infinite`,
                  animationDelay: `${-(s.dur * s.frac)}s`,
                }}>
                  {s.label}
                </div>
              </div>
            ))}

            {/* Center: Profile photo with background layer — z-index above all rings */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              width: '260px', height: '260px',
              marginTop: '-130px', marginLeft: '-130px',
              borderRadius: '50%',
              background: 'rgb(var(--surface))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 30,
              boxShadow: 'var(--shadow-photo)',
              animation: 'float 4s ease-in-out infinite',
            }}>
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                  src="/images/ved.PNG"
                  alt={portfolioConfig.personal.name}
                  width={240}
                  height={240}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
            {portfolioConfig.projects.filter(p => p.featured || p.id <= 3).slice(0, 3).map((project, index) => (
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
            {portfolioConfig.allSkillCategories.filter(c => c.featured).map((category, categoryIndex) => (
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              ⚡ Technologies I Work With
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From mobile apps to web platforms — here are the tools and frameworks I use to build real products.
            </p>
          </motion.div>

          {/* Category filter labels */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Frontend', 'Mobile', 'Language', 'Backend', 'Database', 'CMS', 'Tools'].map((cat) => (
              <span key={cat} className="px-4 py-1.5 rounded-full text-xs font-semibold border border-text-muted/20 text-text-secondary bg-surface-light/50 backdrop-blur-sm">
                {cat}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {portfolioConfig.technologies.map((tech, index) => {
              let IconComponent;
              switch(tech.icon) {
                case 'FaReact': IconComponent = FaReact; break;
                case 'SiNextdotjs': IconComponent = SiNextdotjs; break;
                case 'SiAndroid': IconComponent = SiAndroid; break;
                case 'SiFlutter': IconComponent = SiFlutter; break;
                case 'SiJavascript': IconComponent = SiJavascript; break;
                case 'FaNodeJs': IconComponent = FaNodeJs; break;
                case 'SiFirebase': IconComponent = SiFirebase; break;
                case 'SiMongodb': IconComponent = SiMongodb; break;
                case 'SiSupabase': IconComponent = SiSupabase; break;
                case 'SiTailwindcss': IconComponent = SiTailwindcss; break;
                case 'FaGitAlt': IconComponent = FaGitAlt; break;
                case 'FaWordpress': IconComponent = FaWordpress; break;
                default: IconComponent = FaReact;
              }
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="group relative rounded-2xl p-5 flex flex-col items-center justify-center cursor-default overflow-hidden shadow-lg dark:shadow-none bg-surface"
                  style={{
                    border: `2px solid ${tech.color}25`,
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px 4px ${tech.color}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}55`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.removeProperty('box-shadow');
                    (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}25`;
                  }}
                >
                  {/* Glow blob behind icon */}
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundColor: tech.color }}
                  />
                  
                  {/* Icon circle */}
                  <div
                    className="relative w-16 h-16 flex items-center justify-center rounded-2xl mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${tech.color}18` }}
                  >
                    <IconComponent size={30} style={{ color: tech.color }} className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  </div>

                  <p className="text-base font-semibold text-text-primary group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </p>
                  <span
                    className="text-xs font-medium mt-2 px-3 py-0.5 rounded-full"
                    style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                  >
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
            className="mt-14 text-center"
          >
            <Link href="/skills" className="button-secondary inline-flex items-center gap-2 group">
              <span>View All Skills</span>
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