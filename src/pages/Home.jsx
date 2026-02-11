import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Award, Users, ArrowRight, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Hero animation
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6
    });

    gsap.from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.9
    });

    // Services cards animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      gsap.to(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
        },
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
      title: 'Tratamento de Casco',
      description: 'Antifouling profissional, limpeza e proteção do casco para máxima performance.',
      link: '/servicos'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Rigging Completo',
      description: 'Instalação e manutenção de rigging fixo e móvel com materiais premium.',
      link: '/rigging'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Refit & Reparos',
      description: 'Modernização completa e reparos estruturais com acabamento profissional.',
      link: '/refit'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      boat: 'Beneteau Oceanis 45',
      text: 'Serviço impecável! A equipa da DM Yacht Care fez um trabalho extraordinário no refit do meu veleiro.'
    },
    {
      name: 'Maria Santos',
      boat: 'Jeanneau Sun Odyssey 42',
      text: 'Profissionais de confiança. Já são 5 anos a fazer a manutenção anual do meu barco.'
    },
    {
      name: 'João Rodrigues',
      boat: 'Bavaria 46',
      text: 'Recomendo! Trabalho de qualidade, prazos cumpridos e preço justo.'
    }
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
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Conserto e Manutenção Profissional de Veleiros no Algarve
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200">
            Especialistas em reparos estruturais, rigging, antifouling e refit completo para veleiros e iates
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contato"
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/351915730843"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Falar no WhatsApp
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
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="500">0</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="98">0</div>
              <div className="text-gray-300">% Satisfação</div>
            </div>
            <div>
              <div className="stat-number text-5xl font-bold text-ocean-500 mb-2" data-target="24">0</div>
              <div className="text-gray-300">Horas Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Serviços Técnicos para Máxima Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas de manutenção náutica com qualidade profissional
            </p>
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
                  Saber mais <ArrowRight className="w-4 h-4" />
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
            Por Que Escolher a Nossa Equipa?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Equipa especializada em rigging',
              'Materiais premium certificados',
              'Transparência no orçamento',
              'Atendimento personalizado',
              'Foco em durabilidade e segurança',
              'Prazos cumpridos rigorosamente'
            ].map((item, index) => (
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
            O Que Dizem os Nossos Clientes
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
            O Seu Veleiro Merece o Melhor
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco e receba uma avaliação técnica profissional
          </p>
          <Link 
            to="/contato"
            className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Solicitar Avaliação Técnica <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
