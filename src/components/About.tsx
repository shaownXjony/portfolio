import React from 'react';
import { aboutData } from '../data/content';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Quote } from 'lucide-react';

const BentoCard: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 font-roboto ${className}`}
  >
    {children}
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight font-roboto bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
            About Me.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-black via-gray-700 to-gray-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Intro Card - Large */}
          <BentoCard className="md:col-span-3 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center relative overflow-hidden group min-h-[180px] md:min-h-[200px]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Quote size={140} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed relative z-10 font-roboto px-2" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300, letterSpacing: '0.01em', lineHeight: '1.6' }}>
              "{aboutData.description}"
            </p>
          </BentoCard>

          {/* Experience Card */}
          <BentoCard className="md:col-span-2" delay={0.3}>
            <div className="flex items-center gap-4 mb-8 flex-shrink-0">
              <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl group-hover:from-gray-200 group-hover:to-gray-100 transition-all duration-300 shadow-sm">
                <Briefcase size={22} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-roboto mb-1 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}>Experience</h3>
                <div className="w-12 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {aboutData.work.map((job, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full group"
                >
                  <div className="mb-4 flex-shrink-0">
                    <h4 className="font-bold text-black text-base md:text-lg mb-1 font-roboto group-hover:text-gray-700 transition-colors" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}>{job.role}</h4>
                    {job.company && (
                      <p className="text-gray-600 font-medium mb-2 text-sm font-roboto" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>{job.company}</p>
                    )}
                    <span className="text-xs font-mono text-gray-500 font-medium bg-gray-100 px-2.5 py-1 rounded-md inline-block" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500 }}>{job.period}</span>
                  </div>
                  {job.responsibilities && (
                    <ul className="mt-auto space-y-2 flex-grow">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-xs md:text-sm text-gray-700 leading-relaxed flex items-start gap-2.5 font-roboto" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, lineHeight: '1.6' }}>
                          <span className="text-gray-700 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-700"></span>
                          <span className="flex-1">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Education Card */}
          <BentoCard delay={0.2}>
            <div className="flex items-center gap-4 mb-8 flex-shrink-0">
              <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl group-hover:from-gray-200 group-hover:to-gray-100 transition-all duration-300 shadow-sm">
                <GraduationCap size={22} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-roboto mb-1 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}>Education</h3>
                <div className="w-12 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-gray-300 pl-4 hover:border-gray-500 transition-all duration-300 group relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="font-bold text-black font-roboto mb-1 text-sm md:text-base group-hover:text-gray-700 transition-colors" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}>{edu.degree}</h4>
                  <p className="text-xs md:text-sm text-gray-600 mb-1 font-roboto leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>{edu.institution}</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 font-roboto leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>{edu.field}</p>
                  <span className="text-xs font-mono bg-gradient-to-r from-gray-100 to-gray-50 px-3 py-1.5 rounded-md inline-block font-medium text-black border border-gray-200 group-hover:border-gray-300 transition-colors" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 500 }}>{edu.score}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;

