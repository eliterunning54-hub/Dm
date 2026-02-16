import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Ship, Zap, Droplet, Paintbrush, Compass, CheckCircle, ArrowRight } from 'lucide-react';

const Refit = () => {
  const { t } = useTranslation();

  const refitServices = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: t('refit.services.electrical.title'),
      description: t('refit.services.electrical.desc'),
      items: t('refit.services.electrical.items', { returnObjects: true })
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: t('refit.services.hydraulic.title'),
      description: t('refit.services.hydraulic.desc'),
      items: t('refit.services.hydraulic.items', { returnObjects: true })
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: t('refit.services.aesthetic.title'),
      description: t('refit.services.aesthetic.desc'),
      items: t('refit.services.aesthetic.items', { returnObjects: true })
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: t('refit.services.navigation.title'),
      description: t('refit.services.navigation.desc'),
      items: t('refit.services.navigation.items', { returnObjects: true })
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: t('refit.services.propulsion.title'),
      description: t('refit.services.propulsion.desc'),
      items: t('refit.services.propulsion.items', { returnObjects: true })
    }
  ];

  const refitProcess = [
    { step: '01', title: t('refit.process.s1.title'), description: t('refit.process.s1.desc') },
    { step: '02', title: t('refit.process.s2.title'), description: t('refit.process.s2.desc') },
    { step: '03', title: t('refit.process.s3.title'), description: t('refit.process.s3.desc') },
    { step: '04', title: t('refit.process.s4.title'), description: t('refit.process.s4.desc') },
    { step: '05', title: t('refit.process.s5.title'), description: t('refit.process.s5.desc') },
    { step: '06', title: t('refit.process.s6.title'), description: t('refit.process.s6.desc') }
  ];

  const whyRefit = t('refit.why.reasons', { returnObjects: true });

  return (
    <div className="refit-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('refit.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t('refit.hero.subtitle')}
          </p>
          <Link 
            to="/contato"
            className="bg-ocean-500 hover:bg-ocean-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
          >
            {t('refit.hero.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              {t('refit.services.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('refit.services.sectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refitServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-ocean-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {Array.isArray(service.items) && service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              {t('refit.process.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('refit.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {refitProcess.map((phase, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-ocean-500 to-ocean-600 p-8 rounded-xl text-white"
              >
                <div className="text-6xl font-bold opacity-20 absolute top-4 right-4">
                  {phase.step}
                </div>
                <div className="relative">
                  <div className="text-4xl font-bold mb-3">{phase.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-ocean-100">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Refit Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('refit.why.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Array.isArray(whyRefit) && whyRefit.map((reason, index) => (
              <div 
                key={index}
                className="bg-navy-800 p-6 rounded-lg flex items-center gap-4"
              >
                <CheckCircle className="w-8 h-8 text-ocean-500 flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              {t('refit.examples.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600" alt="Refit Beneteau" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Beneteau Oceanis 45</h3>
                <p className="text-gray-600 mb-4">{t('refit.examples.p1.desc')}</p>
                <div className="text-ocean-500 font-semibold">{t('refit.examples.duration')}: 4 {t('refit.examples.months')}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1566870040567-56816b77da5b?w=600" alt="Refit Contest" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Contest 50</h3>
                <p className="text-gray-600 mb-4">{t('refit.examples.p2.desc')}</p>
                <div className="text-ocean-500 font-semibold">{t('refit.examples.duration')}: 6 {t('refit.examples.months')}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" alt="Refit Bavaria" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Bavaria 46 Cruiser</h3>
                <p className="text-gray-600 mb-4">{t('refit.examples.p3.desc')}</p>
                <div className="text-ocean-500 font-semibold">{t('refit.examples.duration')}: 3 {t('refit.examples.months')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-ocean-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('refit.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('refit.cta.subtitle')}</p>
          <Link 
            to="/contato"
            className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {t('refit.cta.button')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Refit;
