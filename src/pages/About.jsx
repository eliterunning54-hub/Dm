import React, { useEffect } from 'react';
import { Award, Users, Target, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8
    });
  }, []);

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas materiais certificados e técnicas profissionais em todos os nossos trabalhos.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Equipa Especializada',
      description: 'Técnicos com mais de 15 anos de experiência em manutenção náutica e rigging profissional.'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Foco no Cliente',
      description: 'Atendimento personalizado e transparência total em cada etapa do projeto.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Compromisso',
      description: 'Prazos cumpridos, garantia nos serviços e suporte técnico contínuo.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Fundação da DM Yacht Care' },
    { year: '2013', event: 'Expansão da equipa técnica' },
    { year: '2016', event: 'Certificação em rigging profissional' },
    { year: '2019', event: '500+ projetos concluídos' },
    { year: '2023', event: 'Parceria com marcas premium' },
    { year: '2025', event: 'Referência no Algarve' }
  ];

  const certifications = [
    'Rigging Profissional Certificado',
    'Aplicador Certificado International Paint',
    'Técnico Autorizado Harken & Lewmar',
    'Membro da Associação Náutica Portuguesa',
    'ISO 9001 - Gestão de Qualidade'
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a DM Yacht Care
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Especialistas em manutenção náutica com paixão pelo mar e compromisso com a excelência
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">A Nossa História</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Fundada em 2010, a <strong>DM Yacht Care</strong> nasceu da paixão pelo mar e do compromisso em oferecer 
              serviços de manutenção náutica de excelência no Algarve.
            </p>
            <p className="mb-6">
              Ao longo de mais de 15 anos, construímos uma reputação sólida baseada em qualidade, 
              transparência e profissionalismo. A nossa equipa é formada por técnicos especializados 
              com vasta experiência em rigging, antifouling, refit e todos os aspectos da manutenção de veleiros.
            </p>
            <p className="mb-6">
              Trabalhamos com as melhores marcas do mercado e utilizamos apenas materiais certificados, 
              garantindo que cada projeto seja executado com os mais altos padrões de qualidade. 
              Desde pequenas reparações até projetos complexos de refit, tratamos cada embarcação 
              com o cuidado e atenção que ela merece.
            </p>
            <p>
              Hoje, somos uma referência no Algarve para proprietários de veleiros que procuram 
              serviços profissionais, fiáveis e de confiança. O nosso objetivo é simples: 
              manter o seu veleiro em perfeitas condições para que possa navegar com segurança e tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-container py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Os Nossos Valores</h2>
            <p className="text-xl text-gray-600">Princípios que guiam o nosso trabalho</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="about-card bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-ocean-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
