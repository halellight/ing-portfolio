import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#f8f8f8]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="loader-text text-2xl font-semibold"
          >
            I₦G
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      {/* Navigation */}
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
            href="#"
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

      {/* Mobile Menu */}
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
              <Link
                to="/shows"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl sm:text-3xl font-medium hover:opacity-50 transition-opacity"
              >
                Shows
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl sm:text-3xl font-medium hover:opacity-50 transition-opacity"
              >
                About
              </Link>
              <Link
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl sm:text-3xl font-medium hover:opacity-50 transition-opacity"
              >
                Book Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 sm:pt-0">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] font-medium mb-6 sm:mb-8">
              Giving inspiration and bringing joy to millions through music
            </h1>
            <div className="flex flex-col space-y-8 sm:space-y-12">
              <p className="text-lg sm:text-xl text-gray-600">Nigerian musician, actor, and YouTuber</p>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center cursor-pointer group"
              >
                <span className="text-base sm:text-lg mr-4 group-hover:opacity-50 transition-opacity">
                  Discography
                </span>
                <ArrowRight className="group-hover:opacity-50 transition-opacity" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="aspect-[4/3] relative group cursor-pointer"
            >
              <img 
                src="/ing1.jpg"
                alt="Music"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <h3 className="text-xl sm:text-2xl font-medium mb-2 text-white">Youtube</h3>
                <p className="text-sm sm:text-base text-white opacity-80">Live Shows, Tours</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="aspect-[4/3] relative group cursor-pointer"
            >
              <img 
                src="/ing2.jpg"
                alt="Digital Content"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <h3 className="text-xl sm:text-2xl font-medium mb-2 text-white">Digital Content</h3>
                <p className="text-sm sm:text-base text-white opacity-80">Music</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

        {/* About Section */}
        <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-medium mb-8 sm:mb-12">
              From viral songs to sold-out shows, I'm on a mission to spread joy through my music
            </h2>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center cursor-pointer group"
            >
              <a href='/about' className="text-base sm:text-lg mr-4 group-hover:opacity-50 transition-opacity">My story</a>
              <ArrowRight className="group-hover:opacity-50 transition-opacity" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 sm:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-medium mb-8 sm:mb-12">
              Looking to bring me to your event? Let's make it memorable together
            </h2>
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center cursor-pointer group"
            >
              <a href='/book' className="text-base sm:text-lg mr-4 group-hover:opacity-50 transition-opacity">Book me</a>
              <ArrowRight className="group-hover:opacity-50 transition-opacity" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="text-sm sm:text-[15px] tracking-wide">© 2025 I₦G</div>
            <div className="flex space-x-6 sm:space-x-8">
              <motion.a whileHover={{ scale: 1.1 }} href="#About" className="text-sm sm:text-[15px] tracking-wide hover:opacity-50 transition-opacity">Instagram</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-sm sm:text-[15px] tracking-wide hover:opacity-50 transition-opacity">TikTok</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-sm sm:text-[15px] tracking-wide hover:opacity-50 transition-opacity">YouTube</motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
