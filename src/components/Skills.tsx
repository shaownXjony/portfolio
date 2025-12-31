import React, { useRef, useState, useEffect } from 'react';
import { skillsData } from '../data/content';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Counter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const number = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.div
      className="group cursor-default p-5 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200/50 hover:border-gray-300 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
      onViewportEnter={() => {
        if (!isInView) {
          motionValue.set(number);
          setIsInView(true);
        }
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent block mb-2">
          0{suffix}
        </span>
        <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Technology logos based on CV and GitHub projects
  const techLogos = [
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "OpenCV", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Scikit-learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
    { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
  ];

  return (
    <section 
      ref={containerRef} 
      id="skills"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          
          {/* Left: Content & Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 md:mb-12"
            >
              <div className="inline-block mb-2">
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Skills & Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-5 tracking-tighter leading-[0.9]">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Technical</span> <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 bg-clip-text text-transparent">Proficiency.</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed font-light">
                A quantitative breakdown of my journey in data science and machine learning engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {skillsData.stats.map((stat, index) => (
                <Counter key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right: Orbital Logo System */}
          <div className="relative h-[450px] md:h-[500px] flex items-start justify-center pt-8 md:pt-12">
            {/* Animated background glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-200/30 via-gray-300/20 to-gray-200/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Central Core */}
            <motion.div 
              className="absolute left-1/2 top-8 md:top-12 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black rounded-full flex items-center justify-center z-10 shadow-2xl border-2 border-zinc-700/50 group"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Rotating border effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/20 border-r-white/10"
              />
              <span className="text-white font-black text-xl tracking-[0.2em] relative z-10 drop-shadow-lg">SKILLS</span>
            </motion.div>

            {/* Orbit Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute left-1/2 top-8 md:top-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: ring * 180,
                  height: ring * 180,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ring * 0.15, duration: 0.8 }}
              >
                <div className="absolute inset-0 rounded-full border border-zinc-200/60"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-zinc-100/40 to-transparent"></div>
                {/* Subtle pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-zinc-300/30"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4 + ring,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}

            {/* Orbiting Logos */}
            {techLogos.map((tech, i) => {
              const radius = 200 + (i % 2) * 60; // Varying radius
              
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-8 md:top-12 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    transformOrigin: 'center center',
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-white via-gray-50 to-white rounded-full shadow-xl flex items-center justify-center p-3 border border-gray-200/60 group relative overflow-hidden"
                    style={{ rotate: -360 }} // Counter-rotate to keep logo upright
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.25, zIndex: 30, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                    title={tech.name}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    />
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-icon')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-icon w-full h-full rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-white text-sm font-bold relative z-10';
                          fallback.textContent = tech.name.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
