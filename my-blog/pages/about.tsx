import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About - Modern Blog" description="Learn more about Modern Blog and our mission">
      <section className="py-8 md:py-12 bg-accent-blue">
        <div className="container">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">About Me</h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              I'm Ved Kamal, a web developer and blogger from Bareilly, Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0">
            <div className="relative h-72 md:h-96 w-full image-container">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Ved Kamal"
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
                priority
                loading="eager"
                unoptimized={true}
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Personal Journey</h2>
              <p className="text-gray-600 mb-4">
                I'm currently pursuing my Bachelor of Computer Applications (BCA) at Mahatma Jyotiba Phule Rohilkhand University in Bareilly. My journey in the world of technology and web development started with a simple fascination with how websites work.
              </p>
              <p className="text-gray-600 mb-4">
                Based in Bareilly, Uttar Pradesh, I've been building my skills in web development, focusing on modern technologies like React, Next.js, and TypeScript. This blog is my platform to share what I learn along the way.
              </p>
              <p className="text-gray-600">
                When I'm not coding or studying, I enjoy exploring new technologies, reading tech blogs, and contributing to open-source projects. I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-accent-gray">
        <div className="container px-4 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-2">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1">Web Development</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Proficient in HTML, CSS, JavaScript, React, and Next.js for building modern web applications.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-2">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1">UI/UX Design</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Skilled in creating responsive, mobile-friendly designs with a focus on user experience and accessibility.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-2">
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1">Problem Solving</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Strong analytical skills and a passion for solving complex technical challenges with efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Education</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h3 className="text-base md:text-lg font-semibold mb-1">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-1">Mahatma Jyotiba Phule Rohilkhand University, Bareilly</p>
              <p className="text-xs md:text-sm text-gray-500">Expected Graduation: 2025</p>
            </div>
            <p className="text-xs md:text-base text-gray-600">
              Currently focused on expanding my knowledge in programming, web development, and computer science fundamentals. I'm passionate about using technology to solve real-world problems.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage; 