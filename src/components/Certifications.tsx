import React from 'react';
import { certificationsData } from '../data/content';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award size={20} />;
      case 'course':
        return <BookOpen size={20} />;
      case 'activity':
        return <Users size={20} />;
      default:
        return <Trophy size={20} />;
    }
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-white relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Certifications</span> <br />
            <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 bg-clip-text text-transparent">& Courses.</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Continuous learning and professional development in data science, machine learning, and AI.
          </p>
        </motion.div>

        {/* Certifications & Courses */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold mb-5 flex items-center gap-2 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent"
          >
            <Award size={20} className="text-gray-700" />
            <span>Certifications & Courses</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certificationsData.certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3 relative z-10">
                  <div className="p-2.5 bg-gray-100 rounded-lg group-hover:bg-gray-600 transition-all duration-300">
                    <div className="text-gray-600 group-hover:text-white transition-colors">
                      {getIcon(item.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-black mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1.5 line-clamp-1">{item.issuer}</p>
                    <span className="text-[10px] text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">{item.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold mb-5 flex items-center gap-2 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent"
          >
            <Trophy size={20} className="text-gray-700" />
            <span>Activities & Achievements</span>
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certificationsData.activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3 relative z-10">
                  <div className="p-2.5 bg-gray-100 rounded-lg group-hover:bg-gray-600 transition-all duration-300">
                    <div className="text-gray-600 group-hover:text-white transition-colors">
                      {getIcon(item.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-black mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-gray-600 mb-1.5 line-clamp-1">{item.description}</p>
                    )}
                    <span className="text-[10px] text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">{item.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

