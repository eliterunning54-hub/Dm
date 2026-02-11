import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { path: '/', label: 'Home' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/refit', label: 'Refit & Reparos' },
    { path: '/rigging', label: 'Rigging' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'Contato' }
  ];

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
            <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">DM</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900">DM Yacht Care</h1>
              <p className="text-sm text-gray-600">Yacht Services & Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* CTA Button Desktop */}
          <Link
            to="/contato"
            className="hidden lg:flex items-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Solicitar Orçamento
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy-900 p-2"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-6 pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold py-2 px-4 rounded transition-colors ${
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
                className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
