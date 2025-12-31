import React, { useState } from 'react';
import { heroData } from '../data/content';
import { motion } from 'framer-motion';
import { Download, Eye, Github, Linkedin, Facebook } from 'lucide-react';
import HTMLCVViewer from './HTMLCVViewer';

const Hero: React.FC = () => {
  const [isHTMLCVOpen, setIsHTMLCVOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-24 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8"
          >
            <motion.span
              custom={0}
              variants={textVariants}
              className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent"
            >
              Data
            </motion.span>
            
            <motion.span
              custom={1}
              variants={textVariants}
              className="block bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent"
            >
              Science <span className="text-gray-500">&</span>
            </motion.span>
            
            <motion.span
              custom={2}
              variants={textVariants}
              className="block bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Machine
            </motion.span>
            
            <motion.span
              custom={3}
              variants={textVariants}
              className="block bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent"
            >
              Learning
            </motion.span>

            <motion.span
              custom={4}
              variants={textVariants}
              className="block mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 bg-clip-text text-transparent font-normal"
            >
              Aspirant.
            </motion.span>
          </motion.h1>

          <motion.p
            custom={5}
            variants={textVariants}
            className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed font-light mb-8"
          >
            Turning raw data into meaningful insights and building intelligent, real-world solutions.
          </motion.p>

          <motion.div
            custom={6}
            variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => setIsHTMLCVOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Eye size={18} className="group-hover:scale-110 transition-transform duration-300" />
              View my CV
            </motion.button>
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv/resume.pdf';
                link.download = 'MD_Shaown_Rahman_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-6 py-3 bg-white border-2 border-black text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              Download PDF CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* HTML CV Viewer Modal */}
        <HTMLCVViewer
          isOpen={isHTMLCVOpen}
          onClose={() => setIsHTMLCVOpen(false)}
          htmlUrl="/cv/resume.html"
          title="My CV"
        />


        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative h-full flex justify-end items-center"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden bg-gray-100 rounded-2xl transition-all duration-700 ease-out shadow-xl hover:shadow-2xl group"
          >
            {/* Image with enhanced filters */}
            <motion.img
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              src={heroData.image}
              alt="MD Shaown Rahman"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              style={{
                filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
              }}
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
              }}
            />
            
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/5 pointer-events-none"></div>
            
            {/* Social Media Links Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-xl px-5 py-3.5 rounded-full shadow-2xl border border-white/30"
            >
              <motion.a
                href="https://github.com/shaownXjony"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.25, rotate: 8, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-white border border-gray-300 rounded-full hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700 group-hover:text-white transition-all duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shaownrahman"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.25, rotate: -8, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-white border border-gray-300 rounded-full hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700 group-hover:text-white transition-all duration-300" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/jonys4s/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.25, rotate: 8, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-white border border-gray-300 rounded-full hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-700 group-hover:text-white transition-all duration-300" />
              </motion.a>
            </motion.div>

            {/* Decorative Corner Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

