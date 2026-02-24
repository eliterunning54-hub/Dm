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

    gsap.from('.veleiro-content', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0, x: 40, duration: 1, ease: 'power3.out'
    });
    gsap.from('.veleiro-image', {
      scrollTrigger: { trigger: '.veleiro-section', start: 'top 75%' },
      opacity: 0, x: -40, duration: 1, ease: 'power3.out'
    });

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
    { icon: <Anchor className="w-12 h-12" />, title: t('services.hull.title'), description: t('services.hull.desc'), link: '/servicos' },
    { icon: <Shield className="w-12 h-12" />, title: t('services.rigging.title'), description: t('services.rigging.desc'), link: '/rigging' },
    { icon: <Award className="w-12 h-12" />, title: t('services.refit.title'), description: t('services.refit.desc'), link: '/refit' }
  ];

  const testimonials = [
    { name: 'Carlos Silva', boat: 'Beneteau Oceanis 45', text: t('testimonials.carlos.text') },
    { name: 'Maria Santos', boat: 'Jeanneau Sun Odyssey 42', text: t('testimonials.maria.text') },
    { name: 'João Rodrigues', boat: 'Bavaria 46', text: t('testimonials.joao.text') }
  ];

  const whyItems = t('why.items', { returnObjects: true });
  const veleiroFeatures = t('veleiroSection.features', { returnObjects: true });
  const motorItems = t('boatTypes.motor.items', { returnObjects: true });
  const sailboatItems = t('boatTypes.sailboat.items', { returnObjects: true });
  const catamaranItems = t('boatTypes.catamaran.items', { returnObjects: true });

  const boatTypes = [
    { icon: Zap, title: t('boatTypes.motor.title'), description: t('boatTypes.motor.description'), items: Array.isArray(motorItems) ? motorItems : [] },
    { icon: Wind, title: t('boatTypes.sailboat.title'), description: t('boatTypes.sailboat.description'), items: Array.isArray(sailboatItems) ? sailboatItems : [] },
    { icon: Anchor, title: t('boatTypes.catamaran.title'), description: t('boatTypes.catamaran.description'), items: Array.isArray(catamaranItems) ? catamaranItems : [] }
  ];

  const marcasSupabase = [
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/17%20FLEXITEEK%20DM.png", 
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/16%20COPPERCOAT%20DM.webp", 
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/20%20SELDEN%20DM.webp", 
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/22%20STA-LOK%20%20DM.webp", 
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/12%20HEMPEL%20DM.png", 
    "https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/10%20JOTUN%20DM.webp",
    "URL_DA_MARCA_7", "URL_DA_MARCA_8", "URL_DA_MARCA_9",
    "URL_DA_MARCA_10", "URL_DA_MARCA_11", "URL_DA_MARCA_12"
  ];

  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-ocean-600 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2000)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 text-center text-white px-4 max-w-md md:max-w-5xl mx-auto">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-snug md:leading-tight break-words">{t('hero.title')}</h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">{t('hero.subtitle')}</p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
              {t('cta.quote')} <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/351913282888" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> {t('hero.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['exp', 'projects', 'satisfaction', 'support'].map((key, i) => (
              <div key={key}>
                <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target={[15, 500, 98, 24][i]}>0</div>
                <div className="text-gray-300">{t(`stats.${key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">{t('services.sectionTitle')}</h2>
          <p className="text-xl text-gray-600 mb-16">{t('services.sectionSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {boatTypes.map((boat, index) => {
              const Icon = boat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto"><Icon className="w-7 h-7 text-blue-600" /></div>
                  <h3 className="text-2xl font-bold mb-3">{boat.title}</h3>
                  <p className="text-gray-500 mb-6 text-sm">{boat.description}</p>
                  <Link to="/servicos" className="text-blue-600 font-semibold inline-flex items-center gap-2">{t('services.learnMore')} <ArrowRight className="w-4 h-4" /></Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Veleiro Feature Section ── */}
      <section className="veleiro-section relative overflow-hidden bg-navy-900">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="veleiro-image relative"><img src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20VELEIRO%202000X1328.webp" alt="Veleiro" className="w-full h-full object-cover" /></div>
          <div className="veleiro-content p-10 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6">{t('veleiroSection.title')}</h2>
            <p className="text-gray-300 text-lg mb-10">{t('veleiroSection.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">{t('why.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">{Array.isArray(whyItems) && whyItems.map((item, i) => <div key={i} className="text-gray-700 text-lg">✓ {item}</div>)}</div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => <div key={i} className="bg-navy-800 p-8 rounded-xl"><p className="italic text-gray-300">"{t.text}"</p><div className="mt-4 text-ocean-500 font-bold">{t.name}</div></div>)}</div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 bg-ocean-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('cta.finalTitle')}</h2>
          <Link to="/contato" className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold inline-flex items-center gap-2">{t('cta.finalBtn')} <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>

      {/* ── NOVA SECÇÃO: Marcas (Ajustada) ── */}
      <section className="marcas-section py-20 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gray-200 text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
              {t('brands.description', 'Trabalhamos com as melhores marcas nacionais e internacionais e fornecemos peças e acessórios que o seu barco precisa.')}
            </p>
            <p className="text-gray-400 text-lg mt-6 font-medium">
              {t('brands.contactLead', 'Venha nos conhecer, entre em contato através do e-mail ou pelo telefone.')}
            </p>
          </div>

          <div className="w-full h-px bg-red-600/30 mb-16 max-w-5xl mx-auto" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20 items-center justify-items-center max-w-6xl mx-auto">
            {marcasSupabase.map((url, index) => (
              <div key={index} className="brand-logo-item flex items-center justify-center w-full">
                <img 
                  src={url} 
                  alt="Marca Parceira"
                  className="h-16 md:h-24 lg:h-28 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-red-600/30 mt-16 max-w-5xl mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
