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
          // --- GLOBAL & NAV ---
          "nav.home": "Home",
          "nav.services": "Serviços",
          "nav.refit": "Refit & Reparos",
          "nav.rigging": "Rigging",
          "nav.about": "Sobre Nós",
          "nav.gallery": "Galeria",
          "nav.contact": "Contato",
          "cta.quote": "Orçamento",
          "footer.description": "Especialistas em manutenção e conserto de veleiros no Algarve desde 2010.",
          "footer.rights": "Todos os direitos reservados.",

          // --- HOME ---
          "hero.title": "Conserto e Manutenção Profissional de Veleiros no Algarve",
          "hero.subtitle": "Especialistas em reparos estruturais, rigging, antifouling e refit completo.",
          "hero.whatsapp": "Falar no WhatsApp",
          "stats.exp": "Anos de Experiência",
          "stats.projects": "Projetos Concluídos",
          "stats.satisfaction": "% Satisfação",
          "services.sectionTitle": "Serviços Técnicos para Máxima Performance",
          "why.title": "Por Que Escolher a Nossa Equipa?",
          "testimonials.title": "O Que Dizem os Nossos Clientes",

          // --- SERVICES PAGE (Página Detalhada) ---
          "services.page.title": "Serviços de Manutenção e Conserto",
          "services.page.subtitle": "Soluções completas para manter o seu veleiro em perfeito estado.",
          "services.requestQuote": "Solicitar Orçamento",
          "services.hull.title": "Tratamento de Casco e Antifouling",
          "services.hull.desc": "Proteção profissional do casco para máxima performance.",
          "services.items.hull.features": ["Limpeza profunda", "Primers especializados", "Antifouling premium", "Hélices e ânodos"],
          "services.items.paint.title": "Pintura Naval e Gelcoat",
          "services.items.paint.desc": "Restauração e pintura completa com acabamento profissional.",
          "services.items.paint.features": ["Reparação de gelcoat", "Pintura completa", "Proteção UV", "Correção de osmose"],
          "services.items.covers.title": "Capotas e Proteções",
          "services.items.covers.desc": "Fabrico e instalação de toldos e capotas personalizadas.",
          "services.items.covers.features": ["Desenho personalizado", "Tecidos premium", "Proteção UV", "Reparações"],

          // --- RIGGING PAGE ---
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação e inspeção de rigging fixo e móvel com materiais certificados.",
          "rigging.svc.fixed.title": "Rigging Fixo",
          "rigging.svc.fixed.items": ["Inspeção de mastros", "Cabos de aço inox", "Terminais Sta-Lok", "Afinação do rig"],
          "rigging.svc.mobile.title": "Rigging Móvel",
          "rigging.svc.mobile.items": ["Adriças e Escotas", "Cabos Dyneema", "Roldanas e Blocos"],
          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.list": ["Fios partidos", "Corrosão", "Mastro com folga", "Mais de 10 anos"],

          // --- REFIT PAGE ---
          "refit.hero.title": "Refit & Reparos Estruturais",
          "refit.hero.subtitle": "Damos nova vida ao seu veleiro com modernização técnica.",
          "refit.services.title": "Nossas Especialidades em Refit",
          "services.items.refit.features": ["Sistemas elétricos", "Upgrade de navegação", "Renovação de interiores", "Hidráulica"],

          // --- ABOUT PAGE ---
          "about.hero.title": "Sobre a DM Yacht Care",
          "about.hero.subtitle": "Paixão pelo mar e compromisso com a excelência náutica.",
          "about.story.title": "Nossa História",
          "about.story.p1": "Fundada em 2010, somos referência em manutenção no Algarve.",
          "about.values.quality.title": "Qualidade Premium",
          "about.values.quality.desc": "Materiais certificados e técnicos experientes.",

          // --- GALLERY PAGE ---
          "gallery.hero.title": "Galeria de Projetos",
          "gallery.categories.all": "Todos",
          "gallery.categories.refit": "Refit",
          "gallery.categories.rigging": "Rigging",

          // --- CONTACT PAGE ---
          "contact.hero.title": "Solicite o Seu Orçamento",
          "contact.form.name": "Nome",
          "contact.form.email": "Email",
          "contact.form.message": "Mensagem",
          "contact.form.button": "Enviar Mensagem"
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
          "footer.description": "Sailboat maintenance specialists in the Algarve since 2010.",
          "footer.rights": "All rights reserved.",

          "hero.title": "Professional Sailboat Maintenance in the Algarve",
          "hero.subtitle": "Experts in structural repairs, rigging, antifouling, and full refit.",
          "hero.whatsapp": "WhatsApp Us",
          "stats.exp": "Years of Experience",
          "stats.projects": "Projects Completed",
          "stats.satisfaction": "% Satisfaction",
          "services.sectionTitle": "Technical Services for Maximum Performance",
          "why.title": "Why Choose Our Team?",
          "testimonials.title": "What Our Clients Say",

          "services.page.title": "Maintenance & Repair Services",
          "services.page.subtitle": "Complete solutions to keep your sailboat in top condition.",
          "services.requestQuote": "Request a Quote",
          "services.hull.title": "Hull Treatment & Antifouling",
          "services.hull.desc": "Professional hull protection for maximum performance.",
          "services.items.hull.features": ["Deep cleaning", "Specialized primers", "Premium antifouling", "Anodes"],
          "services.items.paint.title": "Marine Paint & Gelcoat",
          "services.items.paint.desc": "Professional restoration and painting services.",
          "services.items.paint.features": ["Gelcoat repair", "Full painting", "UV protection", "Osmosis correction"],
          "services.items.covers.title": "Covers & Canvas",
          "services.items.covers.desc": "Custom manufacture and installation of marine covers.",
          "services.items.covers.features": ["Custom design", "Premium fabrics", "UV protection", "Repairs"],

          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation and inspection of standing and running rigging.",
          "rigging.svc.fixed.title": "Standing Rigging",
          "rigging.svc.fixed.items": ["Mast inspection", "Stainless wire", "Terminals", "Rig tuning"],
          "rigging.svc.mobile.title": "Running Rigging",
          "rigging.svc.mobile.items": ["Halyards & Sheets", "Dyneema ropes", "Blocks & Sheaves"],
          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.list": ["Broken strands", "Corrosion", "Loose mast", "10+ years old"],

          "refit.hero.title": "Refit & Structural Repairs",
          "refit.hero.subtitle": "Bringing new life to your sailboat with technical upgrades.",
          "refit.services.title": "Our Refit Specialties",
          "services.items.refit.features": ["Electrical systems", "Navigation upgrades", "Interior renovation", "Hydraulics"],

          "about.hero.title": "About DM Yacht Care",
          "about.hero.subtitle": "Passion for the sea and commitment to nautical excellence.",
          "about.story.title": "Our History",
          "about.story.p1": "Founded in 2010, we are a reference for maintenance in the Algarve.",
          "about.values.quality.title": "Premium Quality",
          "about.values.quality.desc": "Certified materials and experienced technicians.",

          "gallery.hero.title": "Project Gallery",
          "gallery.categories.all": "All",
          "gallery.categories.refit": "Refit",
          "gallery.categories.rigging": "Rigging",

          "contact.hero.title": "Request a Quote",
          "contact.form.name": "Name",
          "contact.form.email": "Email",
          "contact.form.message": "Message",
          "contact.form.button": "Send Message"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
