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
          
          // ... (mantendo hero.title, stats, services, why, about, refit já configurados anteriormente) ...

          // Rigging Page
          "rigging.hero.title": "Rigging Profissional",
          "rigging.hero.subtitle": "Instalação, manutenção e inspeção de rigging fixo e móvel com materiais certificados",
          "rigging.hero.cta": "Solicitar Inspeção",
          
          "rigging.services.title": "Serviços de Rigging",
          "rigging.services.subtitle": "Soluções completas para todos os sistemas de rigging",
          
          "rigging.services.standing.title": "Rigging Fixo",
          "rigging.services.standing.desc": "Instalação e manutenção de estais e brandais",
          "rigging.services.standing.items": ["Inspeção completa de mastros", "Substituição de cabos de aço inox", "Instalação de novos estais", "Substituição de terminais Sta-Lok/Norseman", "Tensionamento e afinação do rig", "Verificação de parafusos e fixações"],
          
          "rigging.services.running.title": "Rigging Móvel",
          "rigging.services.running.desc": "Escotas, adriças e cabos de manobra",
          "rigging.services.running.items": ["Substituição de adriças", "Instalação de escotas novas", "Cabos de alta performance (Dyneema)", "Sistemas de redução de fricção", "Roldanas e blocos de qualidade", "Passadores e terminais especializados"],
          
          "rigging.services.equip.title": "Instalação de Equipamentos",
          "rigging.services.equip.desc": "Winches, blocos e ferragens",
          "rigging.services.equip.items": ["Instalação de winches Harken/Lewmar", "Montagem de blocos e roldanas", "Furlers e enroladores", "Boom vangs e cunninghams", "Travellers e carros de escota", "Sistemas hidráulicos"],
          
          "rigging.services.inspection.title": "Inspeção e Manutenção",
          "rigging.services.inspection.desc": "Prevenção e segurança",
          "rigging.services.inspection.items": ["Inspeção anual completa", "Relatórios fotográficos detalhados", "Teste de carga em terminais", "Verificação de corrosão", "Lubrificação de equipamentos", "Plano de manutenção preventiva"],

          "rigging.materials.title": "Materiais Premium",
          "rigging.materials.subtitle": "Trabalhamos apenas com as melhores marcas do mercado",
          "rigging.materials.m1.name": "Cabo de Aço Inox 316", "rigging.materials.m1.desc": "Alta resistência à corrosão marítima",
          "rigging.materials.m2.name": "Dyneema / Spectra", "rigging.materials.m2.desc": "Cabos de alta performance e baixo peso",
          "rigging.materials.m3.name": "Terminais Sta-Lok", "rigging.materials.m3.desc": "Terminais mecânicos de fácil instalação",
          "rigging.materials.m4.name": "Terminais Norseman", "rigging.materials.m4.desc": "Máxima resistência e durabilidade",
          "rigging.materials.m5.name": "Harken / Lewmar", "rigging.materials.m5.desc": "Blocos e equipamentos premium",
          "rigging.materials.m6.name": "Spinlock", "rigging.materials.m6.desc": "Stoppers e clutches de qualidade",

          "rigging.warnings.title": "Sinais de Alerta",
          "rigging.warnings.subtitle": "Quando é hora de inspecionar ou substituir o rigging?",
          "rigging.warnings.items": [
            "Cabos de aço com fios partidos", "Corrosão visível nos terminais", "Mastro com movimento excessivo", "Terminais soltos ou com folga",
            "Roldanas emperradas ou ruidosas", "Desgaste irregular nos cabos", "Mais de 10 anos sem substituição", "Escotas com desgaste visível"
          ],
          "rigging.warnings.alert": "⚠️ Se identificar qualquer um destes sinais, contacte-nos imediatamente para uma inspeção profissional.",

          "rigging.advantages.title": "Vantagens do Rigging Profissional",
          "rigging.advantages.adv1.title": "Segurança Máxima", "rigging.advantages.adv1.desc": "Rigging bem mantido é fundamental para a segurança da tripulação",
          "rigging.advantages.adv2.title": "Performance", "rigging.advantages.adv2.desc": "Melhor controlo das velas e performance de navegação",
          "rigging.advantages.adv3.title": "Durabilidade", "rigging.advantages.adv3.desc": "Materiais premium garantem anos de uso sem preocupações",

          "rigging.cta.title": "Pronto para garantir a segurança do seu veleiro?",
          "rigging.cta.subtitle": "Solicite uma inspeção completa do rigging ou um orçamento sem compromisso",
          "rigging.cta.button": "Contactar Agora",

          // ... (mantendo Gallery, Contact, Footer, Testimonials) ...
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

          // Rigging Page (EN)
          "rigging.hero.title": "Professional Rigging",
          "rigging.hero.subtitle": "Installation, maintenance, and inspection of standing and running rigging with certified materials",
          "rigging.hero.cta": "Request Inspection",
          
          "rigging.services.title": "Rigging Services",
          "rigging.services.subtitle": "Complete solutions for all rigging systems",
          
          "rigging.services.standing.title": "Standing Rigging",
          "rigging.services.standing.desc": "Installation and maintenance of stays and shrouds",
          "rigging.services.standing.items": ["Full mast inspection", "Stainless steel wire rope replacement", "New stay installation", "Sta-Lok/Norseman terminal replacement", "Rig tensioning and tuning", "Check of bolts and fastenings"],
          
          "rigging.services.running.title": "Running Rigging",
          "rigging.services.running.desc": "Sheets, halyards, and control lines",
          "rigging.services.running.items": ["Halyard replacement", "New sheet installation", "High-performance lines (Dyneema)", "Friction reduction systems", "Quality sheaves and blocks", "Specialized fairleads and terminals"],
          
          "rigging.services.equip.title": "Equipment Installation",
          "rigging.services.equip.desc": "Winches, blocks, and hardware",
          "rigging.services.equip.items": ["Harken/Lewmar winch installation", "Block and sheave assembly", "Furlers and reefing systems", "Boom vangs and cunninghams", "Travellers and sheet cars", "Hydraulic systems"],
          
          "rigging.services.inspection.title": "Inspection & Maintenance",
          "rigging.services.inspection.desc": "Prevention and safety",
          "rigging.services.inspection.items": ["Full annual inspection", "Detailed photographic reports", "Terminal load testing", "Corrosion check", "Equipment lubrication", "Preventive maintenance plan"],

          "rigging.materials.title": "Premium Materials",
          "rigging.materials.subtitle": "We work only with the best brands on the market",
          "rigging.materials.m1.name": "316 Stainless Steel Wire", "rigging.materials.m1.desc": "High resistance to marine corrosion",
          "rigging.materials.m2.name": "Dyneema / Spectra", "rigging.materials.m2.desc": "High-performance, low-weight ropes",
          "rigging.materials.m3.name": "Sta-Lok Terminals", "rigging.materials.m3.desc": "Mechanical terminals for easy installation",
          "rigging.materials.m4.name": "Norseman Terminals", "rigging.materials.m4.desc": "Maximum strength and durability",
          "rigging.materials.m5.name": "Harken / Lewmar", "rigging.materials.m5.desc": "Premium blocks and equipment",
          "rigging.materials.m6.name": "Spinlock", "rigging.materials.m6.desc": "Quality stoppers and clutches",

          "rigging.warnings.title": "Warning Signs",
          "rigging.warnings.subtitle": "When is it time to inspect or replace your rigging?",
          "rigging.warnings.items": [
            "Broken wire strands (meat hooks)", "Visible corrosion on terminals", "Excessive mast movement", "Loose or slack terminals",
            "Seized or noisy sheaves", "Irregular wear on cables", "Over 10 years without replacement", "Sheets with visible wear"
          ],
          "rigging.warnings.alert": "⚠️ If you identify any of these signs, contact us immediately for a professional inspection.",

          "rigging.advantages.title": "Benefits of Professional Rigging",
          "rigging.advantages.adv1.title": "Maximum Safety", "rigging.advantages.adv1.desc": "Well-maintained rigging is essential for crew safety",
          "rigging.advantages.adv2.title": "Performance", "rigging.advantages.adv2.desc": "Better sail control and sailing performance",
          "rigging.advantages.adv3.title": "Durability", "rigging.advantages.adv3.desc": "Premium materials ensure years of worry-free use",

          "rigging.cta.title": "Ready to ensure your sailboat's safety?",
          "rigging.cta.subtitle": "Request a full rigging inspection or a no-obligation quote",
          "rigging.cta.button": "Contact Now"
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: { escapeValue: false }
  });

export default i18n;
