import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Shield, Wrench, AlertTriangle, CheckCircle, ArrowRight, Settings } from 'lucide-react';

const Rigging = () => {
  const riggingServices = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Rigging Fixo',
      description: 'Instalação e manutenção de estais e brandais',
      items: [
        'Inspeção completa de mastros',
        'Substituição de cabos de aço inox',
        'Instalação de novos estais',
        'Substituição de terminais Sta-Lok/Norseman',
        'Tensionamento e afinação do rig',
        'Verificação de parafusos e fixações'
      ]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Rigging Móvel',
      description: 'Escotas, adriças e cabos de manobra',
      items: [
        'Substituição de adriças',
        'Instalação de escotas novas',
        'Cabos de alta performance (Dyneema)',
        'Sistemas de redução de fricção',
        'Roldanas e blocos de qualidade',
        'Passadores e terminais especializados'
      ]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Instalação de Equipamentos',
      description: 'Winches, blocos e ferragens',
      items: [
        'Instalação de winches Harken/Lewmar',
        'Montagem de blocos e roldanas',
        'Furlers e enroladores',
        'Boom vangs e cunninghams',
        'Travellers e carros de escota',
        'Sistemas hidráulicos'
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: 'Inspeção e Manutenção',
      description: 'Prevenção e segurança',
      items: [
        'Inspeção anual completa',
        'Relatórios fotográficos detalhados',
        'Teste de carga em terminais',
        'Verificação de corrosão',
        'Lubrificação de equipamentos',
        'Plano de manutenção preventiva'
      ]
    }
  ];

  const materials = [
    {
      name: 'Cabo de Aço Inox 316',
      description: 'Alta resistência à corrosão marítima'
    },
    {
      name: 'Dyneema / Spectra',
      description: 'Cabos de alta performance e baixo peso'
    },
    {
      name: 'Terminais Sta-Lok',
      description: 'Terminais mecânicos de fácil instalação'
    },
    {
      name: 'Terminais Norseman',
      description: 'Máxima resistência e durabilidade'
    },
    {
      name: 'Harken / Lewmar',
      description: 'Blocos e equipamentos premium'
    },
    {
      name: 'Spinlock',
      description: 'Stoppers e clutches de qualidade'
    }
  ];

  const warningsSigns = [
    'Cabos de aço com fios partidos',
    'Corrosão visível nos terminais',
    'Mastro com movimento excessivo',
    'Terminais soltos ou com folga',
    'Roldanas emperradas ou ruidosas',
    'Desgaste irregular nos cabos',
    'Mais de 10 anos sem substituição',
    'Escotas com desgaste visível'
  ];

  const advantages = [
    {
      title: 'Segurança Máxima',
      description: 'Rigging bem mantido é fundamental para a segurança da tripulação',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Performance',
      description: 'Melhor controlo das velas e performance de navegação',
      icon: <Anchor className="w-8 h-8" />
    },
    {
      title: 'Durabilidade',
      description: 'Materiais premium garantem anos de uso sem preocupações',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="rigging-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Rigging Profissional
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados
          </p>
          <Link 
            to="/contato"
            className="bg-ocean-500 hover:bg-ocean-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
          >
            Solicitar Inspeção <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Serviços de Rigging
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para todos os sistemas de rigging
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {riggingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="text-ocean-500 flex-shrink-0">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
