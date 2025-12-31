import React, { useRef } from 'react';
import { projectsData } from '../data/content';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ 
  project: typeof projectsData[0]; 
  index: number; 
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}> = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="min-h-screen md:h-screen flex items-center justify-center sticky top-0 py-20 md:py-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className="relative flex flex-col w-full max-w-[1000px] h-[500px] md:h-[550px] rounded-3xl bg-white shadow-lg overflow-hidden border border-gray-200 origin-top mx-auto"
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="w-full md:w-[60%] h-[300px] md:h-full overflow-hidden relative">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200';
                }}
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[40%] p-6 md:p-10 flex flex-col justify-between bg-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-4xl md:text-5xl font-bold text-gray-200 mb-3 block">0{index + 1}</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-gray-600 font-medium text-sm mb-3 uppercase tracking-wider">{project.category}</p>
              {project.description && (
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
              )}
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-end mt-4 md:mt-0 relative z-10">
              <span className="text-gray-500 font-mono text-xs md:text-sm">{project.year}</span>
              <div className="flex gap-2">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => project.github && window.open(project.github, '_blank')}
                  className="px-5 py-2.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  View Project
                  <ExternalLink size={14} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="projects" className="bg-gray-50 relative">
      {/* Header */}
      <div className="h-[20vh] md:h-[35vh] flex items-center justify-center sticky top-0 z-10 pointer-events-none">
        <h2 className="text-[10vw] md:text-[7vw] font-bold tracking-tighter leading-none px-6">
          <span className="text-black">SELECTED</span> <br /> 
          <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent">WORK</span>
        </h2>
      </div>

      <div className="relative z-20 pb-[20vh]">
        {projectsData.map((project, index) => {
          const targetScale = 1 - ( (projectsData.length - index) * 0.05);
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}

        {/* View All Button */}
        <div className="flex justify-center pt-16 pb-16 md:pb-24 relative z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-50"
          >
            <motion.a
              href="https://github.com/shaownXjony?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl relative z-50 cursor-pointer"
            >
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

