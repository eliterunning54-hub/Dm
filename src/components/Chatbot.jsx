import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Olá! Bem-vindo à DM Yacht Care. Como posso ajudá-lo hoje?'
    }
  ]);
  const [showQuestions, setShowQuestions] = useState(true);

  const questions = [
    { id: 1, text: 'Que serviços oferecem?', answer: 'Oferecemos serviços completos de manutenção náutica: antifouling, rigging, refit, pintura/gelcoat, manutenção preventiva e reparos estruturais. Trabalhamos com veleiros e iates de todos os tamanhos.' },
    { id: 2, text: 'Quanto custa um antifouling?', answer: 'O custo varia conforme o tamanho da embarcação e tipo de antifouling. Para um veleiro de 12 metros, o valor fica entre 800€ e 1.500€, incluindo materiais premium e mão de obra. Solicite um orçamento personalizado!' },
    { id: 3, text: 'Fazem refit completo?', answer: 'Sim! Fazemos refit completo incluindo sistemas elétricos, hidráulicos, pintura, carpintaria, velas e equipamentos de navegação. Cada projeto é planeado em detalhe com o cliente.' },
    { id: 4, text: 'Onde estão localizados?', answer: 'Estamos na Marina de Vilamoura, no Algarve. Atendemos toda a região e podemos deslocar-nos para outras marinas mediante consulta.' },
    { id: 5, text: 'Como pedir orçamento?', answer: 'Pode solicitar através do nosso formulário de contacto, telefone, WhatsApp ou email. Respondemos em até 24 horas com orçamento detalhado e sem compromisso.' },
    { id: 6, text: 'Trabalham ao fim de semana?', answer: 'Trabalhamos aos sábados das 09:00 às 13:00. Para serviços urgentes ou projetos especiais, podemos agendar trabalhos fora do horário mediante consulta prévia.' }
  ];

  const handleQuestionClick = (question) => {
    setMessages([
      ...messages,
      { type: 'user', text: question.text },
      { type: 'bot', text: question.answer }
    ]);
    setShowQuestions(false);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: 'Posso ajudar com mais alguma coisa? Ou prefere falar diretamente connosco?' }
      ]);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '351915730843';
    const message = 'Olá! Vim através do chat do site.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-ocean-500 hover:bg-ocean-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-pulse">
            !
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-ocean-500 font-bold">DM</span>
              </div>
              <div>
                <h3 className="font-bold">DM Yacht Care</h3>
                <p className="text-xs text-ocean-100">Sempre online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 max-h-96">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-ocean-500 text-white'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Questions / Actions */}
          <div className="p-4 bg-white border-t">
            {showQuestions ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-semibold mb-3">
                  Perguntas frequentes:
                </p>
                {questions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left text-sm bg-gray-100 hover:bg-ocean-50 hover:text-ocean-600 p-3 rounded-lg transition-colors"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
                <button
                  onClick={() => {
                    setShowQuestions(true);
                    setMessages([messages[0]]);
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ver mais perguntas
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
