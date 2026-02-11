import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Wrench, Paintbrush, Ship, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.from('.service-detail', {
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });
  }, []);

  const services = [
    {
      icon: <Anchor className="w-16 h-16" />,
      title: 'Tratamento de Casco e Antifouling',
      description: 'Aplicação profissional de antifouling para proteger o casco contra incrustações marinhas, melhorando a performance e reduzindo o consumo de combustível.',
      features: [
        'Limpeza profunda do casco',
        'Aplicação de primers especializados',
        'Antifouling de marcas premium',
        'Polimento e acabamento profissional',
        'Inspeção de hélices e ânodos'
      ],
      link: '/contato'
    },
    {
      icon: <Paintbrush className="w-16 h-16" />,
      title: 'Pintura Naval e Gelcoat',
      description: 'Restauração e pintura completa do gelcoat com acabamento profissional, devolvendo o brilho original à sua embarcação.',
      features: [
        'Reparação de gelcoat danificado',
        'Pintura completa do casco',
        'Polimento e enceramento',
        'Aplicação de proteção UV',
        'Correção de osmose'
      ],
      link: '/contato'
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Rigging Fixo e Móvel',
      description: 'Instalação, manutenção e substituição completa de rigging com materiais certificados e mão de obra especializada.',
      features: [
        'Inspeção completa de mastros',
        'Substituição de cabos de aço',
        'Instalação de novos estais',
        'Manutenção de terminais',
        'Ajuste e afinação do rig'
      ],
      link: '/rigging'
    },
    {
      icon: <Ship className="w-16 h-16" />,
      title: 'Refit Completo',
      description: 'Modernização total da embarcação, incluindo sistemas elétricos, hidráulicos, velas e equipamentos de navegação.',
      features: [
        'Planeamento completo do projeto',
        'Upgrade de sistemas elétricos',
        'Modernização de equipamentos',
        'Renovação de interiores',
        'Certificação e documentação'
      ],
      link: '/refit'
    },
    {
      icon: <Wrench className="w-16 h-16" />,
      title: 'Capotas e Proteções Náuticas',
      description: 'Fabrico e instalação de capotas, toldos e proteções personalizadas para o seu veleiro.',
      features: [
        'Medição e desenho personalizado',
        'Tecidos náuticos premium',
        'Instalação profissional',
        'Reparação de capotas existentes',
        'Proteção contra UV e água salgada'
      ],
      link: '/contato'
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      title: 'Manutenção Preventiva',
      description: 'Programa de manutenção regular para manter o seu veleiro sempre em perfeitas condições.',
      features: [
        'Inspeção periódica completa',
        'Manutenção de motores',
        'Verificação de sistemas elétricos',
        'Lubrificação e ajustes',
        'Relatórios técnicos detalhados'
      ],
      link: '/contato'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Serviços de Manutenção e Conserto de Veleiros
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Soluções completas e profissionais para manter o seu veleiro em perfeito estado
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-container py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-detail flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/3">
                  <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
                    <div className="text-ocean-500 mb-6 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <p className="text-gray-700 text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-ocean-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de um serviço personalizado?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Entre em contacto connosco para discutir as necessidades específicas do seu veleiro
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Contactar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
