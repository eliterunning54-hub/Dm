import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Award, ArrowRight, Phone, Zap, Droplets, Wind } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Hero animations
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    gsap.from('.hero-buttons', { opacity: 0, y: 30, duration: 1, delay: 0.9 });

    // Veleiro section animations
    gsap.from('.veleiro-content', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0,
      x: 40,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.from('.veleiro-image', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0,
      x: -40,
      duration: 1,
      ease: 'power3.out',
    });

    // Stats counter
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target')) || 0;
      gsap.to(stat, {
        scrollTrigger: { trigger: stat, start: 'top 80%' },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        onUpdate: function () {
          stat.innerHTML = Math.ceil(stat.innerHTML);
        },
      });
    });
  }, []);

  // Fallbacks seguros para tradução
  const testimonials = [
    { name: 'Carlos Silva', boat: 'Beneteau Oceanis 45', text: t('testimonials.carlos.text') || '' },
    { name: 'Maria Santos', boat: 'Jeanneau Sun Odyssey 42', text: t('testimonials.maria.text') || '' },
    { name: 'João Rodrigues', boat: 'Bavaria 46', text: t('testimonials.joao.text') || '' },
  ];

  const whyItems = t('why.items', { returnObjects: true }) || [];
  const veleiroFeatures = t('veleiro.features', { returnObjects: true }) || [
    'Antifouling & Tratamento de Casco',
    'Rigging & Manutenção de Mastros',
    'Refit Completo & Modernização',
    'Pintura, Gelcoat & Acabamentos',
  ];

  const boatTypes = [
    {
      icon: Zap,
      title: t('boats.motor.title') || 'Barcos a Motor',
      description: t('boats.motor.desc') || 'Manutenção especializada e soluções técnicas para embarcações a motor de todas as dimensões.',
      items: t('boats.motor.items', { returnObjects: true }) || [
        'Revisão e manutenção de motores',
        'Sistemas de combustível e arrefecimento',
        'Cascos e antifouling',
        'Sistemas elétricos e eletrónicos',
        'Transmissão e hélices',
        'Pintura e acabamentos',
      ],
    },
    {
      icon: Wind,
      title: t('boats.sail.title') || 'Veleiros',
      description: t('boats.sail.desc') || 'Cuidados especializados para o seu veleiro, desde o casco ao topo do mastro.',
      items: t('boats.sail.items', { returnObjects: true }) || [
        'Antifouling & tratamento de casco',
        'Rigging fixo e móvel',
        'Manutenção de velas e mastros',
        'Refit completo e modernização',
        'Pintura, gelcoat e acabamentos',
        'Sistemas de navegação',
      ],
    },
    {
      icon: Anchor,
      title: t('boats.catamaran.title') || 'Catamarãs',
      description: t('boats.catamaran.desc') || 'Experiência comprovada na manutenção e refit de catamarãs de vela e a motor.',
      items: t('boats.catamaran.items', { returnObjects: true }) || [
        'Manutenção dos dois cascos',
        'Antifouling em duplo casco',
        'Sistemas de leme e governo',
        'Refit de interiores e cockpit',
        'Sistemas elétricos e solares',
        'Estofamentos e toldos',
      ],
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-ocean-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">{t('hero.title') || ''}</h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">{t('hero.subtitle') || ''}</p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              {t('cta.quote') || 'Orçamento'} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/351913282888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> {t('hero.whatsapp') || 'Falar por WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[15, 500, 98, 24].map((num, idx) => (
              <div key={idx}>
                <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target={num}>
                  0
                </div>
                <div className="text-gray-300">{[t('stats.exp'), t('stats.projects'), t('stats.satisfaction'), t('stats.support')][idx] || ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Boat Types */}
      <section className="services-section py-20 bg-gray-50">
        {/* ...mantido igual, map seguro em boatTypes */}
      </section>

      {/* ═ Veleiro Feature Section ═ */}
      <section className="veleiro-section relative overflow-hidden bg-navy-900">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Imagem / banner do veleiro */}
          <div className="veleiro-image relative overflow-hidden">
            <img
              src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20VELEIRO%202000X1328.webp"
              alt="Veleiro DM Yacht Care em plena navegação"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '500px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-900/20 to-navy-900/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide uppercase">
                Especialistas em Veleiros
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="veleiro-content flex flex-col justify-center px-10 py-16 lg:px-16 xl:px-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Serviços Técnicos para <span className="text-ocean-400">Máxima Performance</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              Oferecemos soluções completas para o seu veleiro — desde a manutenção preventiva ao refit total, com a precisão e o cuidado que a sua embarcação merece.
            </p>
            <div className="space-y-4 mb-10">
              {Array.isArray(veleiroFeatures) &&
                veleiroFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean-500/20 border border-ocean-500/50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-ocean-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* Testimonials */}
      {/* CTA Final */}
      {/* ...mantidos iguais */}
    </div>
  );
};

export default Home;
