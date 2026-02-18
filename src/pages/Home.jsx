import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Award, ArrowRight, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    gsap.from('.hero-buttons', { opacity: 0, y: 30, duration: 1, delay: 0.9 });

    gsap.from('.service-card', {
      scrollTrigger: { trigger: '.services-section', start: 'top 80%' },
      opacity: 0, y: 50, stagger: 0.2, duration: 0.8
    });

    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      gsap.to(stat, {
        scrollTrigger: { trigger: stat, start: 'top 80%' },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        onUpdate: function() {
          stat.innerHTML = Math.ceil(stat.innerHTML);
        }
      });
    });
  }, []);

  const services = [
    {
      icon: <Anchor className="w-12 h-12" />,
      title: t('services.hull.title'),
      description: t('services.hull.desc'),
      link: '/servicos'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('services.rigging.title'),
      description: t('services.rigging.desc'),
      link: '/rigging'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t('services.refit.title'),
      description: t('services.refit.desc'),
      link: '/refit'
    }
  ];

  const testimonials = [
    { name: 'Carlos Silva',    boat: 'Beneteau Oceanis 45',        text: t('testimonials.carlos.text') },
    { name: 'Maria Santos',    boat: 'Jeanneau Sun Odyssey 42',   text: t('testimonials.maria.text') },
    { name: 'João Rodrigues',  boat: 'Bavaria 46',                 text: t('testimonials.joao.text') }
  ];

  const whyItems = t('why.items', { returnObjects: true });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-ocean-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              {t('cta.quote')} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/351913282888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> {t('hero.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="15">0</div>
              <div className="text-gray-300">{t('stats.exp')}</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="500">0</div>
              <div className="text-gray-300">{t('stats.projects')}</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="98">0</div>
              <div className="text-gray-300">{t('stats.satisfaction')}</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="24">0</div>
              <div className="text-gray-300">{t('stats.support')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              {t('services.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              {t('services.sectionSubtitle')}
            </p>

            {/* SEGUNDA FOTO ADICIONADA AQUI */}
            <div className="max-w-5xl mx-auto mb-16">
              <img 
                src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20BANNER%20VELEIRO.webp" 
                alt="Banner Veleiro" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-ocean-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-ocean-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12 text-center">
            {t('why.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.isArray(whyItems) && whyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-ocean-500 mt-1">✓</div>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t('testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-navy-800 p-8 rounded-xl">
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-ocean-500">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.boat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-ocean-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.finalTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('cta.finalSubtitle')}
          </p>
          <Link
            to="/contato"
            className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            {t('cta.finalBtn')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
