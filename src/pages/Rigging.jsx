import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Star } from 'lucide-react';

const Rigging = () => {
  const { t } = useTranslation();

  const renderList = (key) => {
    const items = t(key, { returnObjects: true });
    if (!items || !Array.isArray(items)) return null; // previne erro se não existir
    return (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="rigging-page">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('rigging.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">{t('rigging.hero.subtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('rigging.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.services.title')}</h2>
            <p className="text-xl text-gray-600">{t('rigging.services.subtitle')}</p>
          </div>

          {/* Standing Rigging */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">{t('rigging.services.standing.title')}</h3>
            <p className="text-gray-700 mb-2">{t('rigging.services.standing.desc')}</p>
            {renderList('rigging.services.standing.items')}
          </div>

          {/* Running Rigging */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">{t('rigging.services.running.title')}</h3>
            <p className="text-gray-700 mb-2">{t('rigging.services.running.desc')}</p>
            {renderList('rigging.services.running.items')}
          </div>

          {/* Equipment Installation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">{t('rigging.services.equip.title')}</h3>
            <p className="text-gray-700 mb-2">{t('rigging.services.equip.desc')}</p>
            {renderList('rigging.services.equip.items')}
          </div>

          {/* Inspection & Maintenance */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">{t('rigging.services.inspection.title')}</h3>
            <p className="text-gray-700 mb-2">{t('rigging.services.inspection.desc')}</p>
            {renderList('rigging.services.inspection.items')}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.materials.title')}</h2>
            <p className="text-xl text-gray-600">{t('rigging.materials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="bg-gray-50 p-6 rounded-xl shadow-lg text-center">
                <Star className="w-8 h-8 text-ocean-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">{t(`rigging.materials.m${n}.name`)}</h3>
                <p className="text-gray-700">{t(`rigging.materials.m${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warnings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.warnings.title')}</h2>
          <p className="text-xl text-gray-600 mb-6">{t('rigging.warnings.subtitle')}</p>
          {renderList('rigging.warnings.items')}
          <p className="mt-6 font-semibold text-red-600">{t('rigging.warnings.alert')}</p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">{t('rigging.advantages.adv1.title')}</h3>
            <p className="text-gray-700">{t('rigging.advantages.adv1.desc')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">{t('rigging.advantages.adv2.title')}</h3>
            <p className="text-gray-700">{t('rigging.advantages.adv2.desc')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">{t('rigging.advantages.adv3.title')}</h3>
            <p className="text-gray-700">{t('rigging.advantages.adv3.desc')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('rigging.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('rigging.cta.subtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('rigging.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rigging;
