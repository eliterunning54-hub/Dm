import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          // Nav
          "nav.home": "Home",
          "nav.services": "Serviços",
          "nav.refit": "Refit & Reparos",
          "nav.rigging": "Rigging",
          "nav.about": "Sobre Nós",
          "nav.gallery": "Galeria",
          "nav.contact": "Contato",
          "cta.quote": "Orçamento",
          // Hero
          "hero.title": "Conserto e Manutenção Profissional de Veleiros no Algarve",
          "hero.subtitle": "Especialistas em reparos estruturais, rigging, antifouling e refit completo para veleiros e iates",
          "hero.whatsapp": "Falar no WhatsApp",
          // Stats
          "stats.exp": "Anos de Experiência",
          "stats.projects": "Projetos Concluídos",
          "stats.satisfaction": "% Satisfação",
          "stats.support": "Horas Suporte",
          // Services Section
          "services.sectionTitle": "Serviços Técnicos para Máxima Performance",
          "services.sectionSubtitle": "Soluções completas de manutenção náutica com qualidade profissional",
          "services.hull.title": "Tratamento de Casco",
          "services.hull.desc": "Antifouling profissional, limpeza e proteção do casco para máxima performance.",
          "services.rigging.title": "Rigging Completo",
          "services.rigging.desc": "Instalação e manutenção de rigging fixo e móvel com materiais premium.",
          "services.refit.title": "Refit & Reparos",
          "services.refit.desc": "Modernização completa e reparos estruturais com acabamento profissional.",
          "services.learnMore": "Saber mais",
          // Why
          "why.title": "Por Que Escolher a Nossa Equipa?",
          "why.item1": "Equipa especializada em rigging",
          "why.item2": "Materiais premium certificados",
          "why.item3": "Transparência no orçamento",
          "why.item4": "Atendimento personalizado",
          "why.item5": "Foco em durabilidade e segurança",
          "why.item6": "Prazos cumpridos rigorosamente",
          // Footer & Testimonials
          "footer.description": "Especialistas em manutenção e conserto de veleiros no Algarve desde 2010.",
          "footer.quickLinks": "Links Rápidos",
          "footer.servicesTitle": "Serviços",
          "footer.contactTitle": "Contacto",
          "footer.rights": "Todos os direitos reservados.",
          "footer.refit": "Refit Completo",
          "footer.maintenance": "Manutenção Preventiva",
          "footer.painting": "Pintura e Gelcoat",
          "testimonials.title": "O Que Dizem os Nossos Clientes",
          "cta.finalTitle": "O Seu Veleiro Merece o Melhor",
          "cta.finalSubtitle": "Entre em contacto connosco e receba uma avaliação técnica profissional",
          "cta.finalBtn": "Solicitar Avaliação Técnica"
        }
      },
      en: {
        translation: {
          "nav.home": "Home",
          "nav.services": "Services",
          "nav.refit": "Refit & Repairs",
          "nav.rigging": "Rigging",
          "nav.about": "About Us",
          "nav.gallery": "Gallery",
          "nav.contact": "Contact",
          "cta.quote": "Get a Quote",
          "hero.title": "Professional Sailboat Repair and Maintenance in the Algarve",
          "hero.subtitle": "Specialists in structural repairs, rigging, antifouling and full refit for sailboats and yachts",
          "hero.whatsapp": "Chat on WhatsApp",
          "stats.exp": "Years of Experience",
          "stats.projects": "Completed Projects",
          "stats.satisfaction": "% Satisfaction",
          "stats.support": "Support Hours",
          "services.sectionTitle": "Technical Services for Maximum Performance",
          "services.sectionSubtitle": "Complete nautical maintenance solutions with professional quality",
          "services.hull.title": "Hull Treatment",
          "services.hull.desc": "Professional antifouling, hull cleaning and protection for maximum performance.",
          "services.rigging.title": "Full Rigging",
          "services.rigging.desc": "Installation and maintenance of standing and running rigging with premium materials.",
          "services.refit.title": "Refit & Repairs",
          "services.refit.desc": "Complete modernization and structural repairs with professional finishing.",
          "services.learnMore": "Learn more",
          "why.title": "Why Choose Our Team?",
          "why.item1": "Specialized rigging team",
          "why.item2": "Certified premium materials",
          "why.item3": "Transparent pricing",
          "why.item4": "Personalized service",
          "why.item5": "Focus on durability and safety",
          "why.item6": "Strictly met deadlines",
          "footer.description": "Specialists in sailboat maintenance and repair in the Algarve since 2010.",
          "footer.quickLinks": "Quick Links",
          "footer.servicesTitle": "Services",
          "footer.contactTitle": "Contact",
          "footer.rights": "All rights reserved.",
          "footer.refit": "Full Refit",
          "footer.maintenance": "Preventive Maintenance",
          "footer.painting": "Painting and Gelcoat",
          "testimonials.title": "What Our Clients Say",
          "cta.finalTitle": "Your Yacht Deserves the Best",
          "cta.finalSubtitle": "Contact us and receive a professional technical evaluation",
          "cta.finalBtn": "Request Technical Evaluation"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
