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

          // Hero Home
          "hero.title": "Conserto e Manutenção Profissional de Veleiros no Algarve",
          "hero.subtitle": "Especialistas em reparos estruturais, rigging, antifouling e refit completo para veleiros e iates",
          "hero.whatsapp": "Falar no WhatsApp",

          // Stats
          "stats.exp": "Anos de Experiência",
          "stats.projects": "Projetos Concluídos",
          "stats.satisfaction": "% Satisfação",
          "stats.support": "Horas Suporte",

          // Services Section (Home)
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

          // About Page
          "about.hero.title": "Sobre a DM Yacht Care",
          "about.hero.subtitle": "Especialistas em manutenção náutica com paixão pelo mar e compromisso com a excelência",
          "about.story.title": "A Nossa História",
          "about.story.p1": "Fundada em 2010, a DM Yacht Care nasceu da paixão pelo mar e do compromisso em oferecer serviços de manutenção náutica de excelência no Algarve.",
          "about.story.p2": "Ao longo de mais de 15 anos, construímos uma reputação sólida baseada em qualidade, transparência e profissionalismo.",
          "about.story.p3": "Trabalhamos com as melhores marcas do mercado e utilizamos apenas materiais certificados.",
          "about.story.p4": "O nosso objetivo é simples: manter o seu veleiro em perfeitas condições para que possa navegar com segurança.",
          "about.values.title": "Os Nossos Valores",
          "about.values.subtitle": "Princípios que guiam o nosso trabalho",
          "about.values.quality.title": "Qualidade Premium",
          "about.values.quality.desc": "Utilizamos apenas materiais certificados e técnicas profissionais.",
          "about.values.team.title": "Equipa Especializada",
          "about.values.team.desc": "Técnicos com mais de 15 anos de experiência em manutenção náutica.",
          "about.values.focus.title": "Foco no Cliente",
          "about.values.focus.desc": "Atendimento personalizado e transparência total.",
          "about.values.commitment.title": "Compromisso",
          "about.values.commitment.desc": "Prazos cumpridos e garantia nos serviços.",
          "about.cta.title": "Pronto para cuidar do seu veleiro?",
          "about.cta.subtitle": "Entre em contacto connosco e descubra como podemos ajudar",
          "about.cta.button": "Pedir Orçamento",

          // Rigging Page
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados",
          "rigging.hero.cta": "Solicitar Inspeção",
          "rigging.services.title": "Serviços de Rigging",
          "rigging.services.subtitle": "Soluções completas para todos os sistemas de rigging",
          "rigging.svc.fixed.title": "Rigging Fixo",
          "rigging.svc.fixed.desc": "Instalação e manutenção de estais e brandais",
          "rigging.svc.fixed.items": ["Inspeção completa de mastros", "Substituição de cabos de aço inox", "Instalação de novos estais", "Substituição de terminais Sta-Lok/Norseman", "Tensionamento e afinação do rig", "Verificação de parafusos e fixações"],
          "rigging.svc.mobile.title": "Rigging Móvel",
          "rigging.svc.mobile.desc": "Escotas, adriças e cabos de manobra",
          "rigging.svc.mobile.items": ["Substituição de adriças", "Instalação de escotas novas", "Cabos de alta performance (Dyneema)", "Sistemas de redução de fricção", "Roldanas e blocos de qualidade", "Passadores e terminais especializados"],
          "rigging.svc.equip.title": "Instalação de Equipamentos",
          "rigging.svc.equip.desc": "Winches, blocos e ferragens",
          "rigging.svc.equip.items": ["Instalação de winches Harken/Lewmar", "Montagem de blocos e roldanas", "Furlers e enroladores", "Boom vangs e cunninghams", "Travellers e carros de escota", "Sistemas hidráulicos"],
          "rigging.svc.maint.title": "Inspeção e Manutenção",
          "rigging.svc.maint.desc": "Prevenção e segurança",
          "rigging.svc.maint.items": ["Inspeção anual completa", "Relatórios fotográficos detalhados", "Teste de carga em terminais", "Verificação de corrosão", "Lubrificação de equipamentos", "Plano de manutenção preventiva"],
          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.subtitle": "Quando é hora de inspecionar ou substituir o rigging?",
          "rigging.warnings.list": ["Cabos de aço com fios partidos", "Corrosão visível nos terminais", "Mastro com movimento excessivo", "Terminais soltos ou com folga", "Roldanas emperradas ou ruidosas", "Desgaste irregular nos cabos", "Mais de 10 anos sem substituição", "Escotas com desgaste visível"],
          "rigging.warnings.notice": "⚠️ Se identificar qualquer um destes sinais, contacte-nos imediatamente para uma inspeção profissional.",
          "rigging.adv.safety.title": "Segurança Máxima",
          "rigging.adv.safety.desc": "Rigging bem mantido é fundamental para a segurança da tripulação",
          "rigging.adv.perf.title": "Performance",
          "rigging.adv.perf.desc": "Melhor controlo das velas e performance de navegação",
          "rigging.adv.dur.title": "Durabilidade",
          "rigging.adv.dur.desc": "Materiais premium garantem anos de uso sem preocupações",
          "rigging.cta.title": "Pronto para garantir a segurança do seu veleiro?",
          "rigging.cta.desc": "Solicite uma inspeção completa do rigging ou um orçamento sem compromisso",
          "rigging.cta.btn": "Contactar Agora",

          // Gallery & Contact
          "gallery.hero.title": "Galeria de Projetos",
          "gallery.hero.subtitle": "Conheça alguns dos nossos trabalhos realizados com excelência",
          "contact.hero.title": "Solicite o Seu Orçamento",
          "contact.hero.subtitle": "Entre em contacto connosco. Responderemos em menos de 24 horas.",
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
          "cta.quote": "Get a Quote",

          "hero.title": "Professional Sailboat Repair and Maintenance in the Algarve",
          "hero.subtitle": "Specialists in structural repairs, rigging, antifouling and full refit",
          "hero.whatsapp": "Chat on WhatsApp",

          "stats.exp": "Years of Experience",
          "stats.projects": "Completed Projects",
          "stats.satisfaction": "% Satisfaction",
          "stats.support": "Support Hours",

          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation, maintenance, and inspection of standing and running rigging",
          "rigging.hero.cta": "Request Inspection",
          "rigging.services.title": "Rigging Services",
          "rigging.svc.fixed.title": "Standing Rigging",
          "rigging.svc.fixed.items": ["Full mast inspection", "Stainless wire replacement", "New stays", "Sta-Lok/Norseman terminals", "Rig tuning", "Fastenings check"],
          "rigging.svc.mobile.title": "Running Rigging",
          "rigging.svc.mobile.items": ["Halyard replacement", "New sheets", "Dyneema lines", "Friction reduction", "Quality blocks", "Terminals"],
          "rigging.svc.equip.title": "Equipment Installation",
          "rigging.svc.equip.items": ["Winches", "Blocks", "Furlers", "Vangs", "Travellers", "Hydraulics"],
          "rigging.svc.maint.title": "Inspection & Maintenance",
          "rigging.svc.maint.items": ["Annual inspection", "Photo reports", "Load testing", "Corrosion check", "Lubrication", "Preventive plan"],
          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.list": ["Broken strands", "Visible corrosion", "Excessive movement", "Loose terminals", "Seized sheaves", "Irregular wear", "Over 10 years old", "Worn sheets"],
          "rigging.warnings.notice": "⚠️ If you identify any of these signs, contact us immediately.",
          "rigging.adv.safety.title": "Maximum Safety",
          "rigging.adv.safety.desc": "Essential for crew safety",
          "rigging.adv.perf.title": "Performance",
          "rigging.adv.perf.desc": "Better sail control",
          "rigging.adv.dur.title": "Durability",
          "rigging.adv.dur.desc": "Premium materials",
          "rigging.cta.title": "Ready to ensure your safety?",
          "rigging.cta.btn": "Contact Now",

          "footer.description": "Sailboat maintenance specialists in the Algarve since 2010.",
          "footer.rights": "All rights reserved."
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
