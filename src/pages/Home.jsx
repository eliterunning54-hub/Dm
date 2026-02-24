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
    gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    gsap.from('.hero-buttons', { opacity: 0, y: 30, duration: 1, delay: 0.9 });

    // Animação da secção veleiro
    gsap.from('.veleiro-content', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0, x: 40, duration: 1, ease: 'power3.out'
    });
    gsap.from('.veleiro-image', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0, x: -40, duration: 1, ease: 'power3.out'
    });

    // Animação das logos das marcas (Nova)
    gsap.from('.brand-logo-item', {
      scrollTrigger: { trigger: '.marcas-section', start: 'top 85%' },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
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
  const veleiroFeatures = t('veleiroSection.features', { returnObjects: true });
  const motorItems = t('boatTypes.motor.items', { returnObjects: true });
  const sailboatItems = t('boatTypes.sailboat.items', { returnObjects: true });
  const catamaranItems = t('boatTypes.catamaran.items', { returnObjects: true });

  const boatTypes = [
    {
      icon: Zap,
      title: t('boatTypes.motor.title'),
      description: t('boatTypes.motor.description'),
      items: Array.isArray(motorItems) ? motorItems : []
    },
    {
      icon: Wind,
      title: t('boatTypes.sailboat.title'),
      description: t('boatTypes.sailboat.description'),
      items: Array.isArray(sailboatItems) ? sailboatItems : []
    },
    {
      icon: Anchor,
      title: t('boatTypes.catamaran.title'),
      description: t('boatTypes.catamaran.description'),
      items: Array.isArray(catamaranItems) ? catamaranItems : []
    }
  ];

  // Array de marcas - Substitua as URLs pelas do seu Supabase
  const marcasSupabase = [
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/17%20FLEXITEEK%20DM.png", "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/16%20COPPERCOAT%20DM.webp", "URL_DA_MARCA_3", 
    "URL_DA_MARCA_4", "URL_DA_MARCA_5", "URL_DA_MARCA_6",
    "URL_DA_MARCA_7", "URL_DA_MARCA_8", "URL_DA_MARCA_9",
    "URL_DA_MARCA_10", "URL_DA_MARCA_11", "URL_DA_MARCA_12"
  ];

  return (
    <div className="home-page">

      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-ocean-600 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-md md:max-w-5xl mx-auto">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-snug md:leading-tight break-words">
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

      {/* ── Stats Section ── */}
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

      {/* ── Services Section ── */}
      <section className="services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-ocean-500" />
              <span className="text-ocean-500 text-xs font-bold uppercase tracking-[0.2em]">
                {t('boatTypes.sectionLabel')}
              </span>
              <div className="h-px w-12 bg-ocean-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              {t('services.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.sectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boatTypes.map((boat, index) => {
              const Icon = boat.icon;
              return (
                <div
                  key={index}
                  className="boat-card group bg-white p-8 rounded-2xl border border-gray-100 flex flex-col cursor-pointer
                    shadow-md transition-all duration-500 ease-out
                    hover:shadow-2xl hover:shadow-ocean-500/10 hover:-translate-y-3
                    hover:border-ocean-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/40"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{boat.title}</h3>
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed">{boat.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {boat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicos" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                    {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Veleiro Feature Section ── */}
      <section className="veleiro-section relative overflow-hidden bg-navy-900">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500 to-transparent" />
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="veleiro-image relative overflow-hidden">
            <img
              src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20VELEIRO%202000X1328.webp"
              alt="Veleiro DM Yacht Care"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '500px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-900/20 to-navy-900/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-ocean-400 animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide uppercase">{t('veleiroSection.badge')}</span>
            </div>
          </div>
          <div className="veleiro-content flex flex-col justify-center px-10 py-16 lg:px-16 xl:px-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-ocean-500" />
              <span className="text-ocean-400 text-xs font-bold uppercase tracking-[0.2em]">{t('veleiroSection.label')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {t('veleiroSection.title')} <span className="text-ocean-400">{t('veleiroSection.highlight')}</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">{t('veleiroSection.subtitle')}</p>
            <div className="space-y-4 mb-10">
              {Array.isArray(veleiroFeatures) && veleiroFeatures.map((item, i) => (
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/servicos" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all transform hover:scale-105 shadow-lg shadow-ocean-500/30">
                {t('veleiroSection.ctaServices')} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/351913282888" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all">
                {t('veleiroSection.ctaQuote')}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500 to-transparent" />
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12 text-center">{t('why.title')}</h2>
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

      {/* ── Testimonials ── */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t('testimonials.title')}</h2>
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

      {/* ── CTA Final ── */}
      <section className="py-20 bg-ocean-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('cta.finalTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('cta.finalSubtitle')}</p>
          <Link to="/contato" className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105">
            {t('cta.finalBtn')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── NOVA SECÇÃO: Marcas (Igual ao Print) ── */}
      <section className="marcas-section py-20 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('brands.description', 'Trabalhamos com as melhores marcas nacionais e internacionais e fornecemos peças e acessórios que o seu barco precisa.')}
            </p>
            <p className="text-gray-400 mt-4 font-medium">
              {t('brands.contactLead', 'Venha nos conhecer, entre em contato através do e-mail ou pelo telefone.')}
            </p>
          </div>

          <div className="w-full h-px bg-red-600/30 mb-16 max-w-5xl mx-auto" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center max-w-6xl mx-auto">
            {marcasSupabase.map((url, index) => (
              <div key={index} className="brand-logo-item flex items-center justify-center w-full">
                <img 
                  src={url} 
                  alt="Marca Parceira"
                  className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-red-600/30 mt-16 max-w-5xl mx-auto" />

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <Link to="/servicos" className="px-10 py-2 border border-white text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-navy-900 transition-all">
              {t('brands.btnServicos', 'Serviços')}
            </Link>
            <Link to="/produtos" className="px-10 py-2 border border-white text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-navy-900 transition-all">
              {t('brands.btnProdutos', 'Produtos')}
            </Link>
            <Link to="/contato" className="px-10 py-2 bg-[#ff4d4d] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-700 transition-all">
              {t('brands.btnContatos', 'Contatos')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
