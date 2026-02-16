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
          // ... (Suas chaves de Nav, Hero, Stats, etc permanecem as mesmas)
          "nav.home": "Home",
          "nav.services": "Serviços",
          "nav.refit": "Refit & Reparos",
          "nav.rigging": "Rigging",
          "nav.about": "Sobre Nós",
          "nav.gallery": "Galeria",
          "nav.contact": "Contato",
          "cta.quote": "Orçamento",

          // --- SEÇÃO RIGGING (ADICIONADO) ---
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados",
          "rigging.hero.cta": "Solicitar Inspeção",
          "rigging.services.title": "Serviços de Rigging",
          "rigging.services.subtitle": "Soluções completas para todos os sistemas de rigging",
          
          // Cards de Serviço
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

          // Sinais de Alerta
          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.subtitle": "Quando é hora de inspecionar ou substituir o rigging?",
          "rigging.warnings.list": ["Cabos de aço com fios partidos", "Corrosão visível nos terminais", "Mastro com movimento excessivo", "Terminais soltos ou com folga", "Roldanas emperradas ou ruidosas", "Desgaste irregular nos cabos", "Mais de 10 anos sem substituição", "Escotas com desgaste visível"],
          "rigging.warnings.notice": "⚠️ Se identificar qualquer um destes sinais, contacte-nos imediatamente para uma inspeção profissional.",

          // Vantagens
          "rigging.adv.safety.title": "Segurança Máxima",
          "rigging.adv.safety.desc": "Rigging bem mantido é fundamental para a segurança da tripulação",
          "rigging.adv.perf.title": "Performance",
          "rigging.adv.perf.desc": "Melhor controlo das velas e performance de navegação",
          "rigging.adv.dur.title": "Durabilidade",
          "rigging.adv.dur.desc": "Materiais premium garantem anos de uso sem preocupações",

          "rigging.cta.title": "Pronto para garantir a segurança do seu veleiro?",
          "rigging.cta.desc": "Solicite uma inspeção completa do rigging ou um orçamento sem compromisso",
          "rigging.cta.btn": "Contactar Agora",
          // ... (Resto das suas chaves de About, Gallery, Contact, etc)
        }
      },
      en: {
        translation: {
          // ... (Suas chaves de Nav, Hero, Stats, etc permanecem as mesmas)
          "nav.home": "Home",
          "nav.services": "Services",
          "nav.refit": "Refit & Repairs",
          "nav.rigging": "Rigging",
          "nav.about": "About Us",
          "nav.gallery": "Gallery",
          "nav.contact": "Contact",
          "cta.quote": "Get a Quote",

          // --- RIGGING SECTION (ADDED) ---
          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation, maintenance, and inspection of standing and running rigging with certified materials",
          "rigging.hero.cta": "Request Inspection",
          "rigging.services.title": "Rigging Services",
          "rigging.services.subtitle": "Complete solutions for all rigging systems",
          
          "rigging.svc.fixed.title": "Standing Rigging",
          "rigging.svc.fixed.desc": "Installation and maintenance of stays and shrouds",
          "rigging.svc.fixed.items": ["Full mast inspection", "Stainless steel wire rope replacement", "New stay installation", "Sta-Lok/Norseman terminal replacement", "Rig tensioning and tuning", "Check of bolts and fastenings"],
          
          "rigging.svc.mobile.title": "Running Rigging",
          "rigging.svc.mobile.desc": "Sheets, halyards, and control lines",
          "rigging.svc.mobile.items": ["Halyard replacement", "New sheet installation", "High-performance lines (Dyneema)", "Friction reduction systems", "Quality sheaves and blocks", "Specialized fairleads and terminals"],
          
          "rigging.svc.equip.title": "Equipment Installation",
          "rigging.svc.equip.desc": "Winches, blocks, and hardware",
          "rigging.svc.equip.items": ["Harken/Lewmar winch installation", "Block and sheave assembly", "Furlers and reefing systems", "Boom vangs and cunninghams", "Travellers and sheet cars", "Hydraulic systems"],
          
          "rigging.svc.maint.title": "Inspection & Maintenance",
          "rigging.svc.maint.desc": "Prevention and safety",
          "rigging.svc.maint.items": ["Full annual inspection", "Detailed photographic reports", "Terminal load testing", "Corrosion check", "Equipment lubrication", "Preventive maintenance plan"],

          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.subtitle": "When is it time to inspect or replace your rigging?",
          "rigging.warnings.list": ["Broken wire strands (meat hooks)", "Visible corrosion on terminals", "Excessive mast movement", "Loose or slack terminals", "Seized or noisy sheaves", "Irregular wear on cables", "Over 10 years without replacement", "Sheets with visible wear"],
          "rigging.warnings.notice": "⚠️ If you identify any of these signs, contact us immediately for a professional inspection.",

          "rigging.adv.safety.title": "Maximum Safety",
          "rigging.adv.safety.desc": "Well-maintained rigging is essential for crew safety",
          "rigging.adv.perf.title": "Performance",
          "rigging.adv.perf.desc": "Better sail control and sailing performance",
          "rigging.adv.dur.title": "Durability",
          "rigging.adv.dur.desc": "Premium materials ensure years of worry-free use",

          "rigging.cta.title": "Ready to ensure your sailboat's safety?",
          "rigging.cta.desc": "Request a full rigging inspection or a no-obligation quote",
          "rigging.cta.btn": "Contact Now"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
