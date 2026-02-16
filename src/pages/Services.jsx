import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Wrench, Paintbrush, Ship, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.service-detail', {
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
    });
  }, []);

  const services = [
    {
      icon: <Anchor className="w-16 h-16" />,
      title: t('services.hull.title'),
      description: t('services.hull.desc'),
      features: [], // Sem features no JSON atual
      link: '/contact'
    },
    {
      icon: <Paintbrush className="w-16 h-16" />,
      title: t('services.painting.title'),
      description: t('services.painting.desc'),
      features: [], // Sem features no JSON
      link: '/contact'
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: t('services.rigging.title'),
      description: t('services.rigging.desc'),
      features: t('services.rigging.features', { returnObjects: true }), // Array de features adicionado ao JSON
      link: '/rigging'
    },
    {
      icon: <Ship className="w-16 h-16" />,
      title: t('services.refit.title'),
      description: t('services.refit.desc'),
      features: t('services.refit.features', { returnObjects: true }), // Array de features adicionado ao JSON
      link: '/refit'
    },
    {
      icon: <Wrench className="w-16 h-16" />,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: [], // Sem features no JSON
      link: '/contact'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('services.sectionTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {t('services.sectionSubtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-container py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`service-detail flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Icon & Title */}
              <div className="lg:w-1/3">
                <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
                  <div className="text-ocean-500 mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                </div>
              </div>

              {/* Description & Features */}
              <div className="lg:w-2/3">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-ocean-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    {t('services.requestQuote')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">{t('services.cta.subtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('services.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
