import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home', 'Home') },
    { path: '/servicos', label: t('nav.services', 'Serviços') },
    { path: '/refit', label: t('nav.refit', 'Refit & Reparos') },
    { path: '/rigging', label: t('nav.rigging', 'Rigging') },
    { path: '/sobre', label: t('nav.about', 'Sobre Nós') },
    { path: '/galeria', label: t('nav.gallery', 'Galeria') },
    { path: '/contato', label: t('nav.contact', 'Contato') }
  ];

  const LanguageSelector = () => (
    <div className="flex items-center gap-3 ml-4 border-l pl-4 border-gray-200">
      <button 
        onClick={() => i18n.changeLanguage('pt')}
        className={`transition-transform hover:scale-110 ${i18n.language === 'pt' ? 'opacity-80 ring-2 ring-ocean-500 rounded-sm' : 'opacity-50'}`}
      >
        <img src="https://flagcdn.com/w40/pt.png" alt="Português" className="w-6 h-auto shadow-sm" />
      </button>
      <button 
        onClick={() => i18n.changeLanguage('en')}
        className={`transition-transform hover:scale-110 ${i18n.language === 'en' ? 'opacity-80 ring-2 ring-ocean-500 rounded-sm' : 'opacity-50'}`}
      >
        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-6 h-auto shadow-sm" />
      </button>
    </div>
  );

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/LOGO%20DM%20.png" 
              alt="DM Yacht Care Logo" 
              className="w-28 h-28 lg:w-28 lg:h-28 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-navy-900">DM Yacht Care</h1>
              <p className="text-xs lg:text-sm text-gray-600">Yacht Services & Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'text-ocean-500'
                    : 'text-gray-700 hover:text-ocean-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Language Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contato"
              className="flex items-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              {t('cta.quote', 'Solicitar Orçamento')}
            </Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-6 pb-6 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center py-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-500 mr-4 self-center">Idioma:</span>
                <LanguageSelector />
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold py-3 px-4 rounded transition-colors ${
                    location.pathname === link.path
                      ? 'bg-ocean-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contato"
                className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t('cta.quote', 'Solicitar Orçamento')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
