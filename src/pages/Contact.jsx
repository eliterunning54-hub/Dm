import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boatType: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a integração com API de email
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solicite o Seu Orçamento
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Entre em contacto connosco. Responderemos em menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Envie a Sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                    placeholder="+351 ..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tipo de Embarcação
                  </label>
                  <input
                    type="text"
                    name="boatType"
                    value={formData.boatType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Beneteau Oceanis 45"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="antifouling">Antifouling</option>
                    <option value="rigging">Rigging</option>
                    <option value="refit">Refit Completo</option>
                    <option value="pintura">Pintura/Gelcoat</option>
                    <option value="manutencao">Manutenção Preventiva</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva o serviço que necessita..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ocean-500 hover:bg-ocean-600 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  Informações de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-500 p-3 rounded-lg text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Telefone</h3>
                      <a href="tel:+351915730843" className="text-ocean-600 hover:text-ocean-700">
                        (+351) 915 730 843
                      </a>
                      <br />
                      <a href="tel:+351913282888" className="text-ocean-600 hover:text-ocean-700">
                        (+351) 913 282 888
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-500 p-3 rounded-lg text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Email</h3>
                      <a href="mailto:info@dmyachtcare.com" className="text-ocean-600 hover:text-ocean-700">
                        info@dmyachtcare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-500 p-3 rounded-lg text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Localização</h3>
                      <p className="text-gray-700">
                        Marina de Vilamoura<br />
                        8125-409 Quarteira<br />
                        Algarve, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-500 p-3 rounded-lg text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">Horário</h3>
                      <p className="text-gray-700">
                        Segunda a Sexta: 08:00 - 18:00<br />
                        Sábado: 09:00 - 13:00<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.0!2d-8.1167!3d37.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA1JzAwLjAiTiA4wrAwNycwMC4wIlc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização DM Yacht Care"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
