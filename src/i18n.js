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
          // Navegação
          "nav.home": "Home",
          "nav.services": "Serviços",
          "nav.refit": "Refit & Reparos",
          "nav.rigging": "Rigging",
          "nav.about": "Sobre Nós",
          "nav.gallery": "Galeria",
          "nav.contact": "Contato",
          "cta.quote": "Orçamento",

          // Home - Hero
          "hero.title": "Conserto e Manutenção Profissional de Veleiros no Algarve",
          "hero.subtitle": "Especialistas em reparos estruturais, rigging, antifouling e refit completo para veleiros e iates",
          "hero.whatsapp": "Falar no WhatsApp",

          // Home - Stats
          "stats.exp": "Anos de Experiência",
          "stats.projects": "Projetos Concluídos",
          "stats.satisfaction": "% Satisfação",
          "stats.support": "Horas Suporte",

          // Home - Services
          "services.sectionTitle": "Serviços Técnicos para Máxima Performance",
          "services.sectionSubtitle": "Soluções completas de manutenção náutica com qualidade profissional",
          "services.hull.title": "Tratamento de Casco",
          "services.hull.desc": "Antifouling profissional, limpeza e proteção do casco para máxima performance.",
          "services.rigging.title": "Rigging Completo",
          "services.rigging.desc": "Instalação e manutenção de rigging fixo e móvel com materiais premium.",
          "services.refit.title": "Refit & Reparos",
          "services.refit.desc": "Modernização completa e reparos estruturais com acabamento profissional.",
          "services.learnMore": "Saber mais",

          // Home - Why Choose Us
          "why.title": "Por Que Escolher a Nossa Equipa?",
          "why.item1": "Equipa especializada em rigging",
          "why.item2": "Materiais premium certificados",
          "why.item3": "Transparência no orçamento",
          "why.item4": "Atendimento personalizado",
          "why.item5": "Foco em durabilidade e segurança",
          "why.item6": "Prazos cumpridos rigorosamente",

          // Rigging Page (Novo)
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados",
          "rigging.hero.cta": "Solicitar Inspeção",
          "rigging.services.title": "Serviços de Rigging",
          "rigging.svc.fixed.title": "Rigging Fixo",
          "rigging.svc.fixed.desc": "Instalação e manutenção de estais e brandais",
          "rigging.svc.fixed.items": ["Inspeção completa de mastros", "Substituição de cabos de aço inox", "Instalação de novos estais", "Substituição de terminais Sta-Lok/Norseman", "Tensionamento e afinação do rig", "Verificação de parafusos e fixações"],
          "rigging.svc.mobile.title": "Rigging Móvel",
          "rigging.svc.mobile.desc": "Escotas, adriças e cabos de manobra",
          "rigging.svc.mobile.items": ["Substituição de adriças", "Instalação de escotas novas", "Cabos de alta performance (Dyneema)", "Sistemas de redução de fricção", "Roldanas e blocos de qualidade", "Passadores e terminais especializados"],
          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.subtitle": "Quando é hora de inspecionar ou substituir o rigging?",
          "rigging.warnings.list": ["Cabos de aço com fios partidos", "Corrosão visível nos terminais", "Mastro com movimento excessivo", "Terminais soltos ou com folga", "Roldanas emperradas ou ruidosas", "Desgaste irregular nos cabos", "Mais de 10 anos sem substituição", "Escotas com desgaste visível"],
          "rigging.warnings.notice": "⚠️ Se identificar qualquer um destes sinais, contacte-nos imediatamente.",

          // Footer & Testimonials
          "footer.description": "Especialistas em manutenção e conserto de veleiros no Algarve desde 2010.",
          "footer.rights": "Todos os direitos reservados.",
          "testimonials.title": "O Que Dizem os Nossos Clientes",
          "cta.finalTitle": "O Seu Veleiro Merece o Melhor",
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
          "cta.quote": "Quote",

          "hero.title": "Professional Sailboat Repair and Maintenance in the Algarve",
          "hero.subtitle": "Specialists in structural repairs, rigging, antifouling and full refit",
          "hero.whatsapp": "WhatsApp Us",

          "stats.exp": "Years of Experience",
          "stats.projects": "Projects Completed",
          "stats.satisfaction": "% Satisfaction",
          "stats.support": "Support Hours",

          "services.sectionTitle": "Technical Services for Maximum Performance",
          "services.sectionSubtitle": "Complete nautical maintenance solutions with professional quality",
          "services.hull.title": "Hull Treatment",
          "services.hull.desc": "Professional antifouling, hull cleaning and protection.",
          "services.rigging.title": "Full Rigging",
          "services.rigging.desc": "Standing and running rigging maintenance with premium materials.",
          "services.refit.title": "Refit & Repairs",
          "services.refit.desc": "Complete modernization and structural repairs.",
          "services.learnMore": "Learn more",

          "why.title": "Why Choose Our Team?",
          "why.item1": "Specialized rigging team",
          "why.item2": "Certified premium materials",
          "why.item3": "Transparent pricing",
          "why.item4": "Personalized service",
          "why.item5": "Focus on durability and safety",
          "why.item6": "Strict deadlines",

          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation and inspection with certified materials",
          "rigging.hero.cta": "Request Inspection",
          "rigging.svc.fixed.title": "Standing Rigging",
          "rigging.svc.fixed.items": ["Mast inspection", "Wire replacement", "New stays", "Terminals", "Rig tuning", "Fastenings"],
          "rigging.svc.mobile.title": "Running Rigging",
          "rigging.svc.mobile.items": ["Halyards", "Sheets", "Dyneema lines", "Friction reduction", "Blocks", "Terminals"],
          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.list": ["Broken strands", "Corrosion", "Mast movement", "Loose terminals", "Seized sheaves", "Wear", "10+ years", "Worn sheets"],
          "rigging.warnings.notice": "⚠️ If you spot any of these, contact us immediately.",

          "footer.description": "Sailboat maintenance specialists in the Algarve since 2010.",
          "footer.rights": "All rights reserved.",
          "testimonials.title": "Customer Reviews",
          "cta.finalTitle": "Your Yacht Deserves the Best",
          "cta.finalBtn": "Request Evaluation"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
