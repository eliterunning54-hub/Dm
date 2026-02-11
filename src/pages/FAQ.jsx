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
          answer: 'Um antifouling completo demora normalmente 3-5 dias úteis, dependendo do tamanho da embarcação e cond
