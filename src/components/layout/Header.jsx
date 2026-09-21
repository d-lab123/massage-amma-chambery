import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className={`text-lg sm:text-xl font-serif font-bold transition-colors ${isScrolled ? 'text-secondary' : 'text-gray-900'}`}>
              Massage Amma Chambéry
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#le-massage" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              Le Amma
            </a>
            <a href="#tarifs" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              Nos Formules
            </a>
            <a
              href="#reservation"
              className="px-5 py-2 bg-secondary text-white text-sm font-medium rounded-full shadow-sm hover:bg-secondary/90 transition-all"
            >
              Demander un devis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-100 mt-3 flex flex-col space-y-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <a
              href="#le-massage"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-secondary py-1"
            >
              Le Amma
            </a>
            <a
              href="#tarifs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-secondary py-1"
            >
              Nos Formules
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2.5 bg-secondary text-white text-sm font-medium rounded-xl hover:bg-secondary/90 transition-all"
            >
              Demander un devis
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
