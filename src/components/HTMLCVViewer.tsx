import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface HTMLCVViewerProps {
  isOpen: boolean;
  onClose: () => void;
  htmlUrl: string;
  title?: string;
}

const HTMLCVViewer: React.FC<HTMLCVViewerProps> = ({ isOpen, onClose, htmlUrl, title = 'CV' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white">
                <h2 className="text-xl font-bold text-black">{title}</h2>
                <div className="flex items-center gap-3">
                  <a
                    href={htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    Open in New Tab
                  </a>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} className="text-black" />
                  </motion.button>
                </div>
              </div>

              {/* HTML CV Viewer */}
              <div className="flex-1 overflow-auto bg-white relative">
                <iframe
                  src={htmlUrl}
                  className="w-full h-full border-0"
                  title={title}
                  style={{ minHeight: '600px' }}
                />
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between p-4 md:p-6 border-t border-gray-200 bg-white">
                <a
                  href="/cv/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Download PDF Version
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HTMLCVViewer;

