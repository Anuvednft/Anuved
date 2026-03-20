import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { portfolioConfig } from '@/config/portfolio';

export default function Skills() {
  return (
    <Layout title="Skills | Vedkamal - Full Stack Developer">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-text-secondary text-base">
              Here's an overview of my technical skills and expertise in various technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {portfolioConfig.allSkillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card"
              >
                <h2 className="text-xl font-bold mb-4">{category.name}</h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-primary text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
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
            className="mt-12 max-w-6xl mx-auto"
          >
            <div className="card">
              <h2 className="text-xl font-bold mb-4 text-center">Other Skills & Interests</h2>
              
              <div className="flex flex-wrap justify-center gap-3">
                {portfolioConfig.otherSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-full bg-surface-light text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors text-xs"
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
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Currently <span className="gradient-text">Learning</span>
            </h2>
            <p className="text-text-secondary mb-6 text-sm">
              I believe in continuous learning and staying updated with the latest technologies.
              Here are some areas I'm currently exploring:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {portfolioConfig.currentlyLearning.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="card py-3 px-4 bg-gradient-to-br from-surface to-surface-dark"
                >
                  <span className="text-base font-medium gradient-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 