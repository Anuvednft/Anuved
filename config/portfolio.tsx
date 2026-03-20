import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

export const portfolioConfig = {
  personal: {
    name: 'Vedkamal',
    fullName: 'Vedkamal',
    role: 'Web & App Developer',
    location: 'Bareilly, Uttar Pradesh',
    availability: 'Available for freelance work',
    email: 'Vedkamlpal@gmail.com', // Update with actual email
    phone: '917251818068', // Update if needed
    about: {
      short: 'Fresher developer from Bareilly building Android apps & web platforms using React Native, Flutter & Firebase. Apps published on Google Play 🚀',
      paragraph1: "I'm a Fresher Web & Mobile App Developer from Bareilly, focused on building Android apps and web platforms using React Native (Expo), Firebase, and Flutter. I started with WordPress websites back in 2021, developed freelance projects for clients, and have since built and published apps on Google Play Store.",
      paragraph2: "I worked as a Full Stack Developer (App Developer Role) at InvisiaX on a social media app using React.js, Node.js, Express, and MongoDB. I love solving real problems — from grocery delivery apps with Razorpay payments to privacy-focused chat apps disguised as calculators. I'm highly motivated and always eager to learn."
    },
    education: {
      degree: 'B.Com (Expected July 2026)',
      university: 'Future Institute of Management Studies, Bareilly (MJPRU)'
    },
    resumeUrl: '/files/resume.pdf',
    whatsappNumber: '917251818068', // Update with real WhatsApp number
  },
  social: {
    github: 'https://github.com/vedkamal',
    linkedin: 'https://linkedin.com/in/vedkamal',
    twitter: '#',
    instagram: '#',
  },
  stats: [
    { value: '3+', label: 'Apps Published' },
    { value: '4+', label: 'Websites Built' },
    { value: '300+', label: 'App Installs' }
  ],
  heroOrbiters: [
    { label: '⚛️ React Native', r: 280, dur: 20, frac: 0,    border: 'rgba(21,177,212,0.5)' },
    { label: '🦋 Flutter',      r: 280, dur: 20, frac: 0.25,  border: 'rgba(84,197,248,0.5)' },
    { label: '🔥 Firebase',     r: 280, dur: 20, frac: 0.5,   border: 'rgba(255,202,40,0.5)' },
    { label: '🍃 MongoDB',      r: 280, dur: 20, frac: 0.75,  border: 'rgba(71,162,72,0.5)' },
    { label: '📱 Play Store',   r: 190, dur: 13, frac: 0.125, border: 'rgba(61,220,132,0.5)' },
    { label: '🌐 WordPress',    r: 190, dur: 13, frac: 0.625, border: 'rgba(33,117,155,0.5)' },
  ],
  technologies: [
    { name: 'React', category: 'Frontend', icon: 'FaReact', color: '#61DAFB' },
    { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#0a0101ff' },
    { name: 'React Native', category: 'Mobile', icon: 'SiAndroid', color: '#3DDC84' },
    { name: 'Flutter', category: 'Mobile', icon: 'SiFlutter', color: '#54C5F8' },
    { name: 'JavaScript', category: 'Language', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'Node.js', category: 'Backend', icon: 'FaNodeJs', color: '#339933' },
    { name: 'Firebase', category: 'Backend', icon: 'SiFirebase', color: '#FFCA28' },
    { name: 'MongoDB', category: 'Database', icon: 'SiMongodb', color: '#47A248' },
    { name: 'Supabase', category: 'Database', icon: 'SiSupabase', color: '#3ECF8E' },
    { name: 'Tailwind CSS', category: 'Styling', icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'Git', category: 'Tool', icon: 'FaGitAlt', color: '#F05032' },
    { name: 'WordPress', category: 'CMS', icon: 'FaWordpress', color: '#21759B' }
  ],
  experiences: [
    {
      title: 'Project Engineer (App Developer Role)',
      company: 'InvisiaX',
      period: '2024 - 2026',
      description: 'Full Stack Developer at InvisiaX (Team Project). Built a social media app with user authentication, profiles, posts, likes, and comments. Tech Stack: React.js, Node.js, Express, and MongoDB. Used Git/GitHub for version control and teamwork.',
    },
    {
      title: 'Freelance WordPress Developer',
      company: 'Self-employed',
      period: '2021 - 2024',
      description: 'Developed and delivered 4+ WordPress websites for clients. Owned and managed a personal news website with regular updates and SEO. Skills gained: SEO, website customization, and client handling.',
    },
  ],
  services: [
    {
      icon: <FaCode className="text-primary text-3xl" />,
      title: 'Web Development',
      description: 'Creating responsive, accessible, full-stack web applications with React, Next.js, and Node.js.'
    },
    {
      icon: <FaMobileAlt className="text-primary text-3xl" />,
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile apps using React Native (Expo) and Flutter, published on Google Play Store.'
    },
    {
      icon: <FaServer className="text-primary text-3xl" />,
      title: 'Backend & Firebase',
      description: 'Setting up Firebase backends, real-time databases, Cloud Functions, and Supabase for full-stack apps.'
    },
    {
      icon: <FaDatabase className="text-primary text-3xl" />,
      title: 'WordPress & SEO',
      description: 'Building, customizing, and optimizing WordPress websites with SEO best practices and client handling.'
    },
  ],
  projects: [
    {
      id: 1,
      title: 'ApnaMart – Grocery Delivery App',
      description: 'Location-based grocery delivery app with user authentication, product listing, cart, and order management. Integrated secure Razorpay payments via Firebase Cloud Functions. Implemented city-based order restrictions.',
      image: '/images/project-apnamart.jpg',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Razorpay', 'Cloud Functions'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Calculator – Private Chat App',
      description: 'Privacy-focused disguised chat app that looks like a normal calculator. Unlocks a hidden private chat via a secret code. Features real-time messaging, authentication, and secure sessions. Hosted web demo on Vercel.',
      image: '/images/project-calculator.jpg',
      category: 'Mobile App',
      technologies: ['Flutter', 'Supabase', 'Dart', 'Vercel'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Firefly 4K HD Wallpaper App',
      description: 'A 4K & HD wallpaper app published on Google Play & Oppo App Store. Features categories, trending section, and daily wallpaper updates. Gained 300+ installs in the first weeks after launch.',
      image: '/images/project-firefly.jpg',
      category: 'Mobile App',
      technologies: ['React Native', 'Expo', 'Firebase'],
      github: '#',
      demo: 'https://play.google.com',
      featured: true
    },
    {
      id: 4,
      title: 'InvisiaX – Social Media App',
      description: 'Full-stack social media application with user authentication, profiles, posts, likes, and comments. Built as a team project using Git/GitHub for version control and collaboration.',
      image: '/images/project-invisiaX.jpg',
      category: 'Web App',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Personal News Website',
      description: 'Owned and managed a personal news website built on WordPress with regular content updates, SEO optimization, and audience growth. Maintained for 3+ years as a freelance project.',
      image: '/images/project-news.jpg',
      category: 'Web App',
      technologies: ['WordPress', 'SEO', 'Hosting'],
      github: '#',
      demo: '#',
      featured: false
    },
  ],
  allSkillCategories: [
    {
      name: 'Web & App Development',
      skills: [
        { name: 'HTML / CSS', level: 88, featured: false },
        { name: 'JavaScript (JS)', level: 82, featured: false },
        { name: 'React / Next.js', level: 82, featured: true },
        { name: 'React Native (Expo)', level: 80, featured: true },
        { name: 'Flutter', level: 75, featured: true },
        { name: 'Node.js', level: 72, featured: false },
      ],
      featured: true
    },
    {
      name: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 85, featured: true },
        { name: 'REST API', level: 80, featured: false },
        { name: 'OAuth', level: 72, featured: false },
        { name: 'MongoDB', level: 70, featured: false },
        { name: 'Node.js', level: 75, featured: true }, // Mapped from featured list
        { name: 'MongoDB / Supabase', level: 72, featured: true }, // Mapped from featured list
        { name: 'Supabase', level: 72, featured: false },
        { name: 'Razorpay Integration', level: 68, featured: false },
      ],
      featured: true
    },
    {
      name: 'CMS & SEO',
      skills: [
        { name: 'WordPress', level: 85, featured: false },
        { name: 'Search Engine Optimization', level: 78, featured: false },
        { name: 'Website Customization', level: 80, featured: false },
        { name: 'Content Management', level: 75, featured: false },
      ],
      featured: false
    },
    {
      name: 'Tools & Platform',
      skills: [
        { name: 'Git / GitHub', level: 78, featured: false },
        { name: 'Hosting & Domains', level: 80, featured: false },
        { name: 'Vercel / Netlify', level: 76, featured: false },
        { name: 'Google Play Publishing', level: 74, featured: false },
      ],
      featured: false
    },
  ],
  otherSkills: [
    'Design Understanding', 'Problem Solving', 'Team Collaboration',
    'Visual Design', 'Client Handling', 'Project Management',
    'Mobile-First Design', 'Cross-Browser Compatibility', 'App Publishing',
    'Freelancing', 'SEO Writing', 'Responsive Design'
  ],
  currentlyLearning: [
    'AI Integration', 'TypeScript', 'Backend APIs', 'Cloud Functions', 'App Monetization'
  ]
};
