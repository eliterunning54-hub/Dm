import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '351915730843';
  const message = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-3 group"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="hidden group-hover:block bg-green-600 px-4 py-2 rounded-lg absolute right-full mr-3 whitespace-nowrap font-semibold">
        Falar no WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
