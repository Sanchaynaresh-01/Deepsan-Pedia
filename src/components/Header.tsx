import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-pink-900/50 animate-gradient" />
      
      <motion.div 
        className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="h-8 w-8 text-purple-400" />
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Deepsan Recommendo-PEDIA
          </h1>
        </motion.div>

        <motion.div 
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative group perspective-1000">
            <motion.button 
              className="px-4 py-2 rounded-full bg-purple-700 bg-opacity-30 hover:bg-opacity-50 text-white transition-all duration-300 border border-purple-500 border-opacity-30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.div 
              className="absolute right-0 w-48 mt-2 py-2 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
              initial={{ y: 10, rotateX: -90 }}
              whileHover={{ y: 0, rotateX: 0 }}
            >
              <p className="px-4 py-2 text-sm text-gray-200">
                Your AI-powered recommendation engine for everything you love.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;