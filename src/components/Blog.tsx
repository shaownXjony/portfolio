import React from 'react';
import { blogData } from '../data/content';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-outline leading-none tracking-tighter translate-y-[30%]">
          BLOG
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">From Machine Learning</span> <br />
            <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 bg-clip-text text-transparent">to Explainable AI.</span>
          </h2>
          <p className="text-gray-600 tracking-widest uppercase text-sm font-medium">
            Building robust, scalable intelligent systems
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16">
          {['Data Analysis', 'Machine Learning', 'Computer Vision', 'NLP', 'AI'].map((item, index) => (
            <button 
              key={index}
              className="text-sm font-medium text-gray-500 hover:text-gray-700 uppercase tracking-widest transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {blogData.slice(0, 3).map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link || "#"}
              target={post.link ? "_blank" : undefined}
              rel={post.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="aspect-[3/2] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400 font-mono">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 flex-grow bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:via-gray-500 group-hover:to-gray-400 transition-all duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-700 font-medium text-sm pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Read Article <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://github.com/shaownXjony?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            View All Blogs
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

