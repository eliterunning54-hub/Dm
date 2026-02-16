import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

const Rigging = () => {
  const { t } = useTranslation();

  // Função para renderizar listas de itens com segurança
  const renderItems = (items) => {
    if (!items || items.length === 0) return null;
    return (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="rigging-page">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-ocean-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('rigging.hero.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t('rigging.hero.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('rigging.hero.cta')}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.services.title')}</h2>
          <p className="text-xl text-gray-600 mb-12">{t('rigging.services.subtitle')}</p>

          {/* Standing Rigging */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-navy-900 mb-3">{t('rigging.services.standing.title')}</h3>
            <p className="mb-4">{t('rigging.services.standing.desc')}</p>
            {renderItems(t('rigging.services.standing.items', { returnObjects: true }))}
          </div>

          {/* Running Rigging */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-navy-900 mb-3">{t('rigging.services.running.title')}</h3>
            <p className="mb-4">{t('rigging.services.running.desc')}</p>
            {renderItems(t('rigging.services.running.items', { returnObjects: true }))}
          </div>

          {/* Equipment */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-navy-900 mb-3">{t('rigging.services.equip.title')}</h3>
            <p className="mb-4">{t('rigging.services.equip.desc')}</p>
            {renderItems(t('rigging.services.equip.items', { returnObjects: true }))}
          </div>

          {/* Inspection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-navy-900 mb-3">{t('rigging.services.inspection.title')}</h3>
            <p className="mb-4">{t('rigging.services.inspection.desc')}</p>
            {renderItems(t('rigging.services.inspection.items', { returnObjects: true }))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.materials.title')}</h2>
          <p className="text-xl text-gray-600 mb-12">{t('rigging.materials.subtitle')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h3 className="font-bold text-navy-900 mb-2">{t(`rigging.materials.m${n}.name`)}</h3>
                <p className="text-gray-700">{t(`rigging.materials.m${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warnings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">{t('rigging.warnings.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('rigging.warnings.subtitle')}</p>
          {renderItems(t('rigging.warnings.items', { returnObjects: true }))}
          <p className="mt-6 font-semibold text-red-600">{t('rigging.warnings.alert')}</p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-12">{t('rigging.advantages.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((n) => (
              <div key={n} className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h3 className="font-bold text-navy-900 mb-2">{t(`rigging.advantages.adv${n}.title`)}</h3>
                <p className="text-gray-700">{t(`rigging.advantages.adv${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('rigging.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('rigging.cta.subtitle')}</p>
          <Link
            to="/contact"
            className="inline-block bg-ocean-500 hover:bg-ocean-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('rigging.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rigging;
