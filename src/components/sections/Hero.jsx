import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-massage.webp" 
          alt="Massage Amma assis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest text-secondary uppercase bg-secondary/5 border border-secondary/10 rounded-full">
            Pour vos employés
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-900 mb-8 leading-tight">
            Massage Amma <br /> 
            <span className="italic text-secondary"> Chambéry  </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 mb-10 font-light leading-relaxed">
            Offrez à vos collaborateurs et à vous-même une parenthèse de sérénité.
             <br className="hidden md:block" />
            Une solution bien-être sur mesure pour libérer les tensions, réduire le stress et redynamiser vos équipes au cœur de leur journée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-secondary text-white rounded-full font-medium shadow-lg shadow-secondary/20 transition-all hover:bg-secondary/90"
            >
              Réserver une séance
            </motion.a>
            <motion.a
              href="#le-massage"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-secondary border border-secondary/20 rounded-full font-medium transition-all hover:bg-gray-50"
            >
              Découvrir le Amma
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
