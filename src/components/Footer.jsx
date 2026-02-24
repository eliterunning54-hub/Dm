import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-navy-900 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/9%20LOGO%20SEM%20ESCRITA%20E%20SEM%20FUNDO.png" 
                alt="DM Yacht Care Logo" 
                className="w-32 h-32 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-navy-900">DM Yacht Care</h3>
                <p className="text-sm text-navy-700">Yacht Services</p>
              </div>
            </div>
            <p className="text-navy-700 mb-6">
              {t('footer.description')}
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {/* Facebook — Troque SEU_USUARIO pelo seu link real */}
              <a 
                href="https://www.facebook.com/dmyachtcare?rdid=NK2oEMayYLNrKJ3C&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AkrVRLM2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#1877F2' }}
                title="Siga-nos no Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* Instagram — Troque SEU_USUARIO pelo seu link real */}
              <a 
                href="https://www.instagram.com/dmyachtcare?igsh=N214cW51bXh5aW9h
" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-navy-900">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-navy-900">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  Antifouling
                </Link>
              </li>
              <li>
                <Link to="/rigging" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  Rigging
                </Link>
              </li>
              <li>
                <Link to="/refit" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('footer.refit')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('footer.painting')}
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  {t('footer.maintenance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-navy-900">{t('footer.contactTitle')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+351915730843" className="text-navy-700 hover:text-ocean-500 transition-colors block">
                    (+351) 915 730 843 Denys Moraes
                  </a>
                  <a href="tel:+351913282888" className="text-navy-700 hover:text-ocean-500 transition-colors block">
                    (+351) 913 282 888 Carla Pereira
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@dmyachtcare.com" className="text-navy-700 hover:text-ocean-500 transition-colors">
                  info@dmyachtcare.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                <div className="text-navy-700 text-sm">
                  Estaleiros da Marina de Portimão<br />
                  8400-279 Loja 5 , Parchal<br />
                  Ferragudo, Portugal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-navy-700">
          <p>&copy; {currentYear} DM Yacht Care. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
