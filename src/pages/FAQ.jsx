import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'Serviços Gerais',
      questions: [
        {
          question: 'Que tipo de embarcações atendem?',
          answer: 'Atendemos veleiros e iates de todos os tamanhos, desde pequenas embarcações recreativas até grandes veleiros de cruzeiro. A nossa equipa tem experiência com marcas como Beneteau, Jeanneau, Bavaria, Dufour, entre outras.'
        },
        {
          question: 'Onde estão localizados?',
          answer: 'Estamos localizados na Marina de Vilamoura, no Algarve. Servimos toda a região do Algarve e podemos deslocar-nos para outras marinas mediante consulta.'
        },
        {
          question: 'Fazem trabalhos de emergência?',
          answer: 'Sim, oferecemos serviço de emergência para situações urgentes. Entre em contacto connosco através do telefone ou WhatsApp para assistência imediata.'
        },
        {
          question: 'Trabalham ao fim de semana?',
          answer: 'Trabalhamos aos sábados das 09:00 às 13:00. Para serviços urgentes ou projetos especiais, podemos agendar trabalhos fora do horário normal mediante consulta prévia.'
        }
      ]
    },
    {
      category: 'Orçamentos e Pagamentos',
      questions: [
        {
          question: 'Como solicitar um orçamento?',
          answer: 'Pode solicitar um orçamento através do nosso formulário de contacto, por telefone, WhatsApp ou email. Fornecemos orçamentos detalhados sem compromisso em até 48 horas.'
        },
        {
          question: 'Quanto custa um antifouling completo?',
          answer: 'O custo varia conforme o tamanho da embarcação, tipo de antifouling escolhido e estado do casco. Em média, para um veleiro de 12 metros, o custo fica entre 800€ e 1.500€, incluindo mão de obra e materiais premium.'
        },
        {
          question: 'Aceitam que formas de pagamento?',
          answer: 'Aceitamos transferência bancária, multibanco, cartão de crédito/débito e dinheiro. Para projetos grandes, oferecemos planos de pagamento faseados.'
        },
        {
          question: 'Oferecem garantia nos serviços?',
          answer: 'Sim, todos os nossos serviços têm garantia. A duração varia conforme o tipo de trabalho: reparos estruturais (2 anos), pinturas (1 ano), rigging (1 ano), antifouling (até a próxima temporada).'
        }
      ]
    },
    {
      category: 'Serviços Técnicos',
      questions: [
        {
          question: 'Fazem refit completo?',
          answer: 'Sim, oferecemos serviço completo de refit, incluindo sistemas elétricos, hidráulicos, carpintaria, pintura, velas e equipamentos de navegação. Fazemos o planeamento completo do projeto e acompanhamento em todas as fases.'
        },
        {
          question: 'Que tipo de materiais utilizam?',
          answer: 'Utilizamos apenas materiais de marcas premium certificadas: International Paint, Awlgrip, Dyneema, Harken, Lewmar, entre outras. Podemos também trabalhar com materiais fornecidos pelo cliente.'
        },
        {
          question: 'Fazem inspeção de mastros?',
          answer: 'Sim, fazemos inspeção completa de mastros incluindo verificação de terminais, cabos de aço, roldanas, iluminação e sistemas elétricos. Fornecemos relatório detalhado com fotografias.'
        },
        {
          question: 'Trabalham com seguradoras?',
          answer: 'Sim, trabalhamos regularmente com seguradoras marítimas. Fornecemos orçamentos detalhados, relatórios fotográficos e toda a documentação necessária para processos de sinistro.'
        }
      ]
    },
    {
      category: 'Prazos e Agendamento',
      questions: [
        {
          question: 'Quanto tempo demora um antifouling?',
          answer: 'Um antifouling completo demora normalmente 3-5 dias úteis, dependendo do tamanho da embarcação e condições do casco. Incluímos neste prazo a limpeza, preparação, aplicação e secagem.'
        },
        {
          question: 'É necessário agendar com antecedência?',
          answer: 'Sim, recomendamos agendar com pelo menos 2 semanas de antecedência, especialmente na época alta (Abril-Setembro). Para serviços urgentes, contacte-nos para verificar disponibilidade.'
        },
        {
          question: 'Posso deixar o barco na marina durante os trabalhos?',
          answer: 'Sim, coordenamos com a marina para os trabalhos serem realizados no local. Para trabalhos que exigem haul-out, trabalhamos com travel lifts certificados na região.'
        },
        {
          question: 'Quanto tempo demora uma substituição de rigging?',
          answer: 'A substituição completa de rigging fixo demora normalmente 2-3 dias para veleiros até 15 metros. Para embarcações maiores ou refits complexos, o prazo pode estender-se até 1-2 semanas.'
        }
      ]
    },
    {
      category: 'Manutenção e Cuidados',
      questions: [
        {
          question: 'Com que frequência devo fazer antifouling?',
          answer: 'Recomendamos antifouling anual para embarcações que navegam regularmente. Para barcos que ficam maioritariamente ancorados, pode ser suficiente a cada 18-24 meses, dependendo das condições locais.'
        },
        {
          question: 'Como sei se preciso substituir o rigging?',
          answer: 'O rigging deve ser inspecionado anualmente e substituído a cada 10-15 anos, ou antes se houver sinais de desgaste, corrosão, fios partidos ou terminais soltos. Oferecemos inspeção gratuita para avaliar o estado.'
        },
        {
          question: 'Oferecem serviços de manutenção preventiva?',
          answer: 'Sim, oferecemos contratos de manutenção preventiva com inspeções regulares, lubrificação, ajustes e pequenos reparos. É a melhor forma de evitar problemas maiores e custos inesperados.'
        },
        {
          question: 'Fazem reparações em fibra de vidro?',
          answer: 'Sim, fazemos todo o tipo de reparações em fibra de vidro, desde pequenos danos até reparos estruturais complexos. Utilizamos resinas e tecidos de qualidade premium com acabamento profissional.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-20 h-20 mx-auto mb-6 text-ocean-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre os nossos serviços
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-ocean-500">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-navy-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-ocean-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-ocean-500 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Não encontrou a resposta que procurava?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            A nossa equipa está disponível para responder a todas as suas questões
          </p>
          <a
            href="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Contactar-nos
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
