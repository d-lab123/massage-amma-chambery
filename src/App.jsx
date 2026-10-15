import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Particuliers from './components/sections/Particuliers';
import Reservation from './components/sections/Reservation';
import PrivacyModal from './components/ui/PrivacyModal';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [selectedFormula, setSelectedFormula] = React.useState('');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Détecter l'ancre #politique-de-confidentialite dans l'URL
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#politique-de-confidentialite') {
        setIsPrivacyOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenPrivacy = (e) => {
    if (e) e.preventDefault();
    setIsPrivacyOpen(true);
    if (typeof window !== 'undefined') {
      window.location.hash = 'politique-de-confidentialite';
    }
  };

  const handleClosePrivacy = () => {
    setIsPrivacyOpen(false);
    if (typeof window !== 'undefined' && window.location.hash === '#politique-de-confidentialite') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-primary selection:bg-secondary/20 selection:text-secondary">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-[60]" style={{ scaleX }} />
      
      <Header />
      
      <main>
        <Hero />
        
        {/* Le Massage Section (Inline for simplicity or I could extract it) */}
        <section id="le-massage" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Tradition & Modernité</span>
              <h2 className="text-3xl md:text-4xl font-serif">Le Massage Amma</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  <span className="italic font-medium text-secondary">Fermez les yeux. Laissez vos sens prendre le relais.</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Né au Japon il y a des siècles, le <span className="text-secondary font-medium">Amma</span> signifie littéralement « calmer avec les mains ». Pratiqué assis et habillé, il se glisse dans votre journée en 15 à 30 minutes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Le temps d'une pause, les tensions du dos, des épaules et de la nuque s'effacent. Le stress recule, le calme s'installe.
                </p>
                <p className="text-lg leading-relaxed italic font-medium text-secondary">
                  Et lorsque vous rouvrez les yeux, vous repartez apaisé, allégé, et pleinement disponible pour la suite de votre journée.
                </p>
              </motion.div>
              
              <div className="bg-primary/50 p-10 rounded-3xl border border-secondary/10 backdrop-blur-sm shadow-sm">
                <h3 className="text-xl font-medium mb-6 text-secondary">Pourquoi choisir le Amma ?</h3>
                <ul className="space-y-4">
                  {[
                    "Praticable partout (bureau, domicile, événement)",
                    "Se pratique habillé sur chaise ergonomique",
                    "Efficacité sur le stress et la fatigue",
                    "Format court et adaptable à votre emploi du temps",
                    "Un moment de partage et de détente qui renforce la cohésion d'équipe"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 font-light">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Particuliers onSelectFormula={setSelectedFormula} />
        <Reservation selectedFormula={selectedFormula} />
      </main>
      
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif mb-6">Massage Amma Chambéry</h2>
              <p className="text-gray-400 max-w-sm font-light leading-relaxed">
                Praticien certifié en massage Amma assis. J'accompagne particuliers et entreprises vers un mieux-être durable à Chambéry et sa région.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-6">Navigation</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Accueil</a></li>
                <li><a href="#le-massage" className="hover:text-accent transition-colors">Qu'est-ce que le massage Amma</a></li>
                <li><a href="#tarifs" className="hover:text-accent transition-colors">Nos offres</a></li>
                <li><a href="#reservation" className="hover:text-accent transition-colors">Recevoir un devis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>Chambéry, Savoie</li>
                <li>Disponible sur rendez-vous</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Massage Amma Chambéry. Tous droits réservés.</p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="#politique-de-confidentialite"
              onClick={handleOpenPrivacy}
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>

      {/* Fenêtre Modale de Politique de Confidentialité */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={handleClosePrivacy} />
    </div>
  );
}

export default App;
