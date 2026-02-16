import React, { useEffect } from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
    });
  }, []);

  const values = [
    { icon: <Shield className="w-12 h-12" />, title: t('about.values.quality.title'), description: t('about.values.quality.desc') },
    { icon: <Users className="w-12 h-12" />, title: t('about.values.team.title'), description: t('about.values.team.desc') },
    { icon: <Target className="w-12 h-12" />, title: t('about.values.focus.title'), description: t('about.values.focus.desc') },
    { icon: <Award className="w-12 h-12" />, title: t('about.values.commitment.title'), description: t('about.values.commitment.desc') },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">{t('about.story.title')}</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p>{t('about.story.p1')}</p>
            <p>{t('about.story.p2')}</p>
            <p>{t('about.story.p3')}</p>
            <p>{t('about.story.p4')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-container py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.values.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="about-card bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-ocean-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('about.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('about.cta.subtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
