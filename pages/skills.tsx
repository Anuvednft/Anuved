import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

// Skill categories and items
const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'REST API', level: 90 },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jest', level: 80 },
      { name: 'Webpack', level: 75 },
    ],
  },
  {
    name: 'Design & Others',
    skills: [
      { name: 'UI/UX Design', level: 75 },
      { name: 'Figma', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'SEO', level: 70 },
      { name: 'Accessibility', level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <Layout title="Skills | Vedkamal - Full Stack Developer">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Here's an overview of my technical skills and expertise in various technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                
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
          
          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-center">Other Skills & Interests</h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Agile Methodology', 'Team Leadership', 'Project Management',
                  'Problem Solving', 'Technical Writing', 'Mentoring',
                  'Mobile-First Design', 'Cross-Browser Compatibility', 'Web Security',
                  'Data Visualization', 'Progressive Web Apps', 'Serverless Architecture'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-surface-light text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Currently <span className="gradient-text">Learning</span>
            </h2>
            <p className="text-text-secondary mb-8">
              I believe in continuous learning and staying updated with the latest technologies.
              Here are some areas I'm currently exploring:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Web3', 'Blockchain', 'AI Integration', 'Svelte', 'Rust'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="card py-4 px-6 bg-gradient-to-br from-surface to-surface-dark"
                >
                  <span className="text-lg font-medium gradient-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 