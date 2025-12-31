import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, ArrowRight, Mail, Phone, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // EmailJS configuration - Replace these with your actual EmailJS credentials
  // Get them from https://www.emailjs.com/
  // See EMAILJS_SETUP.md for detailed instructions
  // You can also use environment variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_guwqb4g';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_u71cm53';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7y5VHcDp_Ofren4tO';

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is configured
      const isConfigured = EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
                          EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
                          EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

      if (isConfigured) {
        // EmailJS integration
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'shaownrahman30@gmail.com',
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Fallback: Simulate sending (for demo purposes)
        // In production, configure EmailJS or use alternative service
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <footer id="contact" className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          
          {/* Left: Contact Info */}
          <div>
            <div className="mb-12">
              <a href="#home" className="text-3xl font-black tracking-tighter flex items-center gap-1 mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                SJ.
              </a>
              <p className="text-gray-600 max-w-sm leading-relaxed font-light text-base">
                Available for freelance work and collaborations. Let's build something intelligent together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start gap-3">
                <Phone size={20} className="text-gray-500 mt-1 group-hover:text-gray-700 transition-colors" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg text-black font-medium group-hover:text-gray-600 transition-colors">Use the contact form below</p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <Mail size={20} className="text-gray-500 mt-1 group-hover:text-gray-700 transition-colors" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg text-black font-medium group-hover:text-gray-600 transition-colors">Use the contact form below</p>
                </div>
              </div>

              <div className="group flex items-start gap-3">
                <MapPin size={20} className="text-gray-500 mt-1 group-hover:text-gray-700 transition-colors" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg text-black font-medium group-hover:text-gray-600 transition-colors">Bogura, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tight bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">Get in Touch</h3>
              <p className="text-gray-600 text-sm mb-12">I usually respond within 24 hours.</p>
            
            <form 
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className={`w-full bg-transparent border-b py-4 text-black placeholder:text-gray-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-600'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className={`w-full bg-transparent border-b py-4 text-black placeholder:text-gray-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-600'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 absolute">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className={`w-full bg-transparent border-b py-4 text-black placeholder:text-gray-500 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-gray-600'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 absolute">{errors.message}</p>
                )}
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 text-sm"
                >
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 text-sm"
                >
                  <XCircle size={18} />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-4 text-black font-bold text-lg hover:text-gray-600 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom: Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-gray-200">
          <p className="text-gray-500 text-xs font-mono mb-8 md:mb-0">
            © 2025 MD SHAOWN RAHMAN. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6">
            <motion.a 
              href="https://github.com/shaownXjony" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-gray-100 rounded-full text-black hover:bg-gray-700 hover:text-white transition-all duration-300" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/shaownrahman" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-gray-100 rounded-full text-black hover:bg-gray-700 hover:text-white transition-all duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/jonys4s/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-gray-100 rounded-full text-black hover:bg-gray-700 hover:text-white transition-all duration-300" 
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

