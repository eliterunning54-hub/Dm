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
          // Navegação (Menu)
          "nav.home": "Home",
          "nav.services": "Serviços",
          "nav.refit": "Refit & Reparos",
          "nav.rigging": "Rigging",
          "nav.about": "Sobre Nós",
          "nav.gallery": "Galeria",
          "nav.contact": "Contato",
          "cta.quote": "Orçamento",

          // Home.jsx
          "hero.title": "Conserto e Manutenção Profissional de Veleiros no Algarve",
          "hero.subtitle": "Especialistas em reparos estruturais, rigging, antifouling e refit completo para veleiros e iates",
          "hero.whatsapp": "Falar no WhatsApp",
          "stats.exp": "Anos de Experiência",
          "stats.projects": "Projetos Concluídos",
          "stats.satisfaction": "% Satisfação",
          "stats.support": "Horas Suporte",
          "services.sectionTitle": "Serviços Técnicos para Máxima Performance",
          "services.sectionSubtitle": "Soluções completas de manutenção náutica com qualidade profissional",
          "services.hull.title": "Tratamento de Casco",
          "services.hull.desc": "Antifouling profissional, limpeza e proteção do casco para máxima performance.",
          "services.rigging.title": "Rigging Completo",
          "services.rigging.desc": "Instalação e manutenção de rigging fixo e móvel com materiais premium.",
          "services.refit.title": "Refit & Reparos",
          "services.refit.desc": "Modernização completa e reparos estruturais com acabamento profissional.",
          "services.learnMore": "Saber mais",
          "why.title": "Por Que Escolher a Nossa Equipa?",
          "why.item1": "Equipa especializada em rigging",
          "why.item2": "Materiais premium certificados",
          "why.item3": "Transparência no orçamento",
          "why.item4": "Atendimento personalizado",
          "why.item5": "Foco em durabilidade e segurança",
          "why.item6": "Prazos cumpridos rigorosamente",
          "testimonials.title": "O Que Dizem os Nossos Clientes",
          "cta.finalTitle": "O Seu Veleiro Merece o Melhor",
          "cta.finalSubtitle": "Entre em contacto connosco e receba uma avaliação técnica profissional",
          "cta.finalBtn": "Solicitar Avaliação Técnica",

          // About.jsx
          "about.hero.title": "Sobre a DM Yacht Care",
          "about.hero.subtitle": "Especialistas em manutenção náutica com paixão pelo mar e compromisso com a excelência",
          "about.story.title": "A Nossa História",
          "about.story.p1": "Fundada em 2010, a DM Yacht Care nasceu da paixão pelo mar e do compromisso em oferecer serviços de manutenção náutica de excelência no Algarve.",
          "about.values.title": "Os Nossos Valores",
          "about.values.quality.title": "Qualidade Premium",
          "about.values.quality.desc": "Utilizamos apenas materiais certificados e técnicas profissionais.",

          // Rigging.jsx
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados",
          "rigging.hero.cta": "Solicitar Inspeção",
          "rigging.svc.fixed.title": "Rigging Fixo",
          "rigging.svc.fixed.items": ["Inspeção de mastros", "Cabos de aço inox", "Terminais Sta-Lok", "Afinação do rig"],
          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.notice": "⚠️ Se identificar qualquer um destes sinais, contacte-nos imediatamente.",

          // Refit.jsx
          "refit.hero.title": "Refit & Reparos Estruturais",
          "refit.hero.subtitle": "Damos nova vida ao seu veleiro com modernização técnica e estética",
          "refit.services.painting": "Pintura e Gelcoat",
          "refit.services.fiber": "Reparos em Fibra de Vidro",

          // Gallery.jsx
          "gallery.hero.title": "Galeria de Projetos",
          "gallery.hero.subtitle": "Conheça alguns dos nossos trabalhos realizados com excelência",
          "gallery.categories.all": "Todos",
          "gallery.categories.refit": "Refit",
          "gallery.categories.rigging": "Rigging",

          // Contact.jsx
          "contact.hero.title": "Solicite o Seu Orçamento",
          "contact.hero.subtitle": "Entre em contacto connosco. Responderemos em menos de 24 horas.",
          "contact.form.name": "Nome Completo",
          "contact.form.email": "Email",
          "contact.form.message": "Mensagem",
          "contact.form.button": "Enviar Mensagem",

          // Footer
          "footer.description": "Especialistas em manutenção e conserto de veleiros no Algarve desde 2010.",
          "footer.rights": "Todos os direitos reservados."
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
          "cta.quote": "Quote",

          "hero.title": "Professional Sailboat Repair and Maintenance in the Algarve",
          "hero.subtitle": "Specialists in structural repairs, rigging, antifouling and full refit",
          "hero.whatsapp": "Chat on WhatsApp",
          "stats.exp": "Years of Experience",
          "stats.projects": "Completed Projects",
          "stats.satisfaction": "% Satisfaction",
          "stats.support": "Support Hours",
          "services.sectionTitle": "Technical Services for Maximum Performance",
          "services.sectionSubtitle": "Complete nautical maintenance solutions with professional quality",
          "services.hull.title": "Hull Treatment",
          "services.hull.desc": "Professional antifouling, hull cleaning and protection.",
          "services.rigging.title": "Full Rigging",
          "services.rigging.desc": "Installation and maintenance of standing and running rigging.",
          "services.refit.title": "Refit & Repairs",
          "services.refit.desc": "Complete modernization and structural repairs.",
          "services.learnMore": "Learn more",
          "why.title": "Why Choose Our Team?",
          "why.item1": "Specialized rigging team",
          "why.item2": "Certified premium materials",
          "why.item3": "Transparent pricing",
          "why.item4": "Personalized service",
          "why.item5": "Focus on durability and safety",
          "why.item6": "Strictly met deadlines",
          "testimonials.title": "What Our Clients Say",
          "cta.finalTitle": "Your Yacht Deserves the Best",
          "cta.finalSubtitle": "Contact us and receive a professional technical evaluation",
          "cta.finalBtn": "Request Technical Evaluation",

          "about.hero.title": "About DM Yacht Care",
          "about.hero.subtitle": "Nautical maintenance specialists with a passion for the sea",
          "about.story.title": "Our History",
          "about.story.p1": "Founded in 2010, DM Yacht Care was born from a passion for the sea in the Algarve.",
          "about.values.title": "Our Values",
          "about.values.quality.title": "Premium Quality",
          "about.values.quality.desc": "We use only certified materials and professional techniques.",

          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation and maintenance with certified materials",
          "rigging.hero.cta": "Request Inspection",
          "rigging.svc.fixed.title": "Standing Rigging",
          "rigging.svc.fixed.items": ["Mast inspection", "Stainless wire", "Sta-Lok terminals", "Rig tuning"],
          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.notice": "⚠️ If you identify any of these signs, contact us immediately.",

          "refit.hero.title": "Refit & Structural Repairs",
          "refit.hero.subtitle": "Giving new life to your boat with technical modernization",
          "refit.services.painting": "Painting and Gelcoat",
          "refit.services.fiber": "Fiberglass Repairs",

          "gallery.hero.title": "Project Gallery",
          "gallery.hero.subtitle": "Discover some of our excellence-driven works",
          "gallery.categories.all": "All",
          "gallery.categories.refit": "Refit",
          "gallery.categories.rigging": "Rigging",

          "contact.hero.title": "Request a Quote",
          "contact.hero.subtitle": "Get in touch. We respond in less than 24 hours.",
          "contact.form.name": "Full Name",
          "contact.form.email": "Email",
          "contact.form.message": "Message",
          "contact.form.button": "Send Message",

          "footer.description": "Sailboat maintenance specialists in the Algarve since 2010.",
          "footer.rights": "All rights reserved."
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
