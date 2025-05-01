import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-[22px] tracking-wider font-bold"
          >
            I₦G
          </motion.a>
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link to="/shows" className="text-[15px] tracking-wide hover:opacity-50 transition-opacity">
              Shows
            </Link>
            <Link to="/about" className="text-[15px] tracking-wide hover:opacity-50 transition-opacity">
              About
            </Link>
            <Link to="/book" className="text-[15px] tracking-wide hover:opacity-50 transition-opacity">
              Book Me
            </Link>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
              <span className="text-[22px] tracking-wider font-medium">I₦G</span>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </motion.button>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              <Link to="/shows" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:opacity-50">Shows</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:opacity-50">About</Link>
              <Link to="/book" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium hover:opacity-50">Book Me</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
