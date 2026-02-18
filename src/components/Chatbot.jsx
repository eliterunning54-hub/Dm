import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

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
    { id: 1, text: 'Que serviços oferecem?', answer: 'Oferecemos serviços completos de manutenção náutica: antifouling, rigging, refit, pintura/gelcoat, manutenção preventiva e reparações estruturais. Trabalhamos com veleiros e iates de todos os tamanhos.' },
    { id: 2, text: 'Quanto custa um antifouling?', answer: 'O custo varia conforme o tamanho da embarcação e o tipo de antifouling. Para um veleiro de 12 metros, o valor médio situa-se entre 800€ e 1.500€, incluindo materiais premium e mão de obra. Solicite um orçamento personalizado!' },
    { id: 3, text: 'Fazem refit completo?', answer: 'Sim! Fazemos refit completo incluindo sistemas elétricos, hidráulicos, pintura, carpintaria, velas e equipamentos de navegação. Cada projeto é planeado ao detalhe com o cliente.' },
    { id: 4, text: 'Onde estão localizados?', answer: 'Estamos sediados nos Estaleiros da Marina de Portimão, no Algarve. Atendemos toda a região e podemos deslocar-nos a outras marinas mediante consulta.' },
    { id: 5, text: 'Como pedir um orçamento?', answer: 'Pode solicitar através do nosso formulário de contacto, telefone, WhatsApp ou email. Respondemos em menos de 24 horas com um orçamento detalhado e sem compromisso.' },
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
    const phoneNumber = '351913282888';
    const message = 'Olá! Gostaria de obter informações através do chat do site.';
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
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-bounce">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-ocean-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
                <span className="text-navy-900 font-bold">DM</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">DM Yacht Care</h3>
                <p className="text-[10px] text-ocean-100 uppercase tracking-widest">Especialistas Náuticos</p>
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
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    message.type === 'user'
                      ? 'bg-ocean-500 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Footer - Questions / Actions */}
          <div className="p-4 bg-white border-t border-gray-100">
            {showQuestions ? (
              <div className="space-y-2">
                <p className="text-[11px] text-gray-400 font-bold uppercase mb-2">
                  Dúvidas Frequentes:
                </p>
                {questions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left text-xs bg-gray-50 hover:bg-ocean-50 hover:text-ocean-700 p-3 rounded-xl border border-gray-100 transition-all active:scale-95"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar via WhatsApp
                </button>
                <button
                  onClick={() => {
                    setShowQuestions(true);
                    setMessages([messages[0]]);
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 py-3 rounded-xl font-semibold text-xs transition-colors"
                >
                  Ver outras perguntas
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
