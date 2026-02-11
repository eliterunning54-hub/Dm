import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Zap, Droplet, Paintbrush, Compass, CheckCircle, ArrowRight } from 'lucide-react';

const Refit = () => {
  const refitServices = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Sistemas Elétricos',
      description: 'Modernização completa do sistema elétrico',
      items: [
        'Instalação de painéis solares',
        'Upgrade de baterias (Lítio)',
        'Novos quadros elétricos',
        'Iluminação LED',
        'Sistemas de monitorização'
      ]
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Sistemas Hidráulicos',
      description: 'Renovação de sistemas de água e combustível',
      items: [
        'Substituição de tanques',
        'Novas bombas e filtros',
        'Dessalinizadores',
        'Sistema de água quente',
        'Tratamento anti-corrosão'
      ]
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: 'Renovação Estética',
      description: 'Transformação visual completa',
      items: [
        'Pintura exterior completa',
        'Renovação de gelcoat',
        'Restauro de madeiras',
        'Novos estofos e tapeçaria',
        'Acabamentos premium'
      ]
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: 'Equipamentos de Navegação',
      description: 'Tecnologia de ponta para navegação',
      items: [
        'GPS e plotters modernos',
        'Radar e AIS',
        'Piloto automático',
        'Instrumentação digital',
        'Comunicações VHF/SSB'
      ]
    },
    {
      icon: <Ship className="w-12 h-12" />,
      title: 'Sistemas de Propulsão',
      description: 'Motor e sistemas relacionados',
      items: [
        'Revisão completa do motor',
        'Substituição de hélices',
        'Sistema de arrefecimento',
        'Escape e silenciador',
        'Transmissão e eixos'
      ]
    }
  ];

  const refitProcess = [
    {
      step: '01',
      title: 'Avaliação Inicial',
      description: 'Inspeção detalhada e levantamento completo das necessidades'
    },
    {
      step: '02',
      title: 'Planeamento',
      description: 'Desenvolvimento do projeto com cronograma e orçamento detalhado'
    },
    {
      step: '03',
      title: 'Aprovação',
      description: 'Apresentação do plano completo e aprovação do cliente'
    },
    {
      step: '04',
      title: 'Execução',
      description: 'Realização dos trabalhos com acompanhamento constante'
    },
    {
      step: '05',
      title: 'Testes',
      description: 'Verificação e teste de todos os sistemas instalados'
    },
    {
      step: '06',
      title: 'Entrega',
      description: 'Entrega do veleiro com documentação completa e garantia'
    }
  ];

  const whyRefit = [
    'Valorização da embarcação',
    'Maior conforto e segurança',
    'Tecnologia moderna',
    'Eficiência energética',
    'Redução de manutenção futura',
    'Personalização total'
  ];

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
            Refit & Reparos Completos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Modernização total do seu veleiro com tecnologia de ponta e acabamento profissional
          </p>
          <Link 
            to="/contato"
            className="bg-ocean-500 hover:bg-ocean-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
          >
            Solicitar Orçamento <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Serviços de Refit Completo
            </h2>
            <p className="text-xl text-gray-600">
              Transformamos o seu veleiro de ponta a ponta
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
                  {service.items.map((item, idx) => (
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
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para projetos de sucesso
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
              Porquê Fazer um Refit?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyRefit.map((reason, index) => (
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
              Exemplos de Projetos Realizados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600" 
                alt="Refit Beneteau"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Beneteau Oceanis 45
                </h3>
                <p className="text-gray-600 mb-4">
                  Refit completo incluindo sistemas elétricos, pintura e modernização total
                </p>
                <div className="text-ocean-500 font-semibold">Duração: 4 meses</div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1566870040567-56816b77da5b?w=600" 
                alt="Refit Contest"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Contest 50
                </h3>
                <p className="text-gray-600 mb-4">
                  Renovação estrutural, novos sistemas e acabamento de luxo
                </p>
                <div className="text-ocean-500 font-semibold">Duração: 6 meses</div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" 
                alt="Refit Bavaria"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Bavaria 46 Cruiser
                </h3>
                <p className="text-gray-600 mb-4">
                  Upgrade completo de equipamentos e sistemas de navegação
                </p>
                <div className="text-ocean-500 font-semibold">Duração: 3 meses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-ocean-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar o Seu Veleiro?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite uma avaliação gratuita e receba um plano personalizado de refit
          </p>
          <Link 
            to="/contato"
            className="bg-white text-ocean-600 px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Solicitar Avaliação Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Refit;
