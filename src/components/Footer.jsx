import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">DM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DM Yacht Care</h3>
                <p className="text-sm text-gray-400">Yacht Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ocean-500 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ocean-500 rounded-full flex items-center justify-center hover:bg-ocean-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  Antifouling
                </Link>
              </li>
              <li>
                <Link to="/rigging" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  Rigging
                </Link>
              </li>
              <li>
                <Link to="/refit" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('footer.refit')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('footer.painting')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  {t('footer.maintenance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contactTitle')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+351915730843" className="text-gray-400 hover:text-ocean-500 transition-colors block">
                    (+351) 915 730 843
                  </a>
                  <a href="tel:+351913282888" className="text-gray-400 hover:text-ocean-500 transition-colors block">
                    (+351) 913 282 888
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@dmyachtcare.com" className="text-gray-400 hover:text-ocean-500 transition-colors">
                  info@dmyachtcare.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  Marina de Vilamoura<br />
                  8125-409 Quarteira<br />
                  Algarve, Portugal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} DM Yacht Care. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
