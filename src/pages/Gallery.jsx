import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: t('gallery.projects.p1.title'),
      category: t('Teka'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/5%20REPARO%20TEKA.webp',
      description: t('gallery.projects.p1.desc')
    },
    {
      id: 2,
      title: t('gallery.projects.p2.title'),
      category: t('gallery.categories.antifouling'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/500X500%20DM%20SERV.webp',
      description: t('gallery.projects.p2.desc')
    },
    {
      id: 3,
      title: t('gallery.projects.p3.title'),
      category: t('Limpeza'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/6%20LIMPEZA%20E%20MANUTENCAO.webp',
      description: t('gallery.projects.p3.desc')
    },
    {
      id: 4,
      title: t('gallery.projects.p4.title'),
      category: t('gallery.categories.painting'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20PINTURA%20VELEIRO.webp',
      description: t('gallery.projects.p4.desc')
    },
    {
      id: 5,
      title: t('gallery.projects.p5.title'),
      category: t('gallery.categories.maintenance'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/2%20VERNIZ%20DM.png',
      description: t('gallery.projects.p5.desc')
    },
    {
      id: 6,
      title: t('gallery.projects.p6.title'),
      category: t('gallery.categories.refit'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/3%20FIBRA%20DE%20VIDRO.jpeg',
      description: t('gallery.projects.p6.desc')
    },
    {
      id: 7,
      title: t('gallery.projects.p7.title'),
      category: t('gallery.categories.rigging'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM1%20WEBP.png',
      description: t('gallery.projects.p7.desc')
    },
    {
      id: 8,
      title: t('gallery.projects.p8.title'),
      category: t('gallery.categories.painting'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/4%20BENINI%20CAPOTA.jpeg',
      description: t('gallery.projects.p8.desc')
    },
    {
      id: 9,
      title: t('gallery.projects.p9.title'),
      category: t('gallery.categories.antifouling'),
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM4%20500X500%20.webp',
      description: t('gallery.projects.p9.desc')
    }
  ];

  const categories = [
    { id: 'all', label: t('gallery.categories.all') },
    { id: 'refit', label: t('gallery.categories.refit') },
    { id: 'rigging', label: t('gallery.categories.rigging') },
    { id: 'antifouling', label: t('gallery.categories.antifouling') },
    { id: 'painting', label: t('gallery.categories.painting') },
    { id: 'maintenance', label: t('gallery.categories.maintenance') }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === t(`gallery.categories.${activeCategory}`));

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('gallery.hero.title')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('gallery.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-ocean-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <ZoomIn className="w-5 h-5" />
                        <span className="text-sm font-semibold">{t('gallery.viewDetails')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-ocean-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-ocean-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl mb-6"
            />
            <div className="bg-white p-6 rounded-lg">
              <span className="inline-block bg-ocean-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                {selectedImage.category}
              </span>
              <h2 className="text-3xl font-bold text-navy-900 mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-gray-700 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
