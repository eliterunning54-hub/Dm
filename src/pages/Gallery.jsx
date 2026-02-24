import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'Teka',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/5%20REPARO%20TEKA.webp',
    },
    {
      id: 2,
      category: 'Antifouling',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/500X500%20DM%20SERV.webp',
    },
    {
      id: 3,
      category: 'Limpeza',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/6%20LIMPEZA%20E%20MANUTENCAO.webp',
    },
    {
      id: 4,
      category: 'Pintura',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM%20PINTURA%20VELEIRO.webp',
    },
    {
      id: 5,
      category: 'Verniz',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/2%20VERNIZ%20DM.png',
    },
    {
      id: 6,
      category: 'Fibra',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/3%20FIBRA%20DE%20VIDRO.jpeg',
    },
    {
      id: 7,
      category: 'Rigging',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/31%20DENIS%20800X800.webp',
    },
    {
      id: 8,
      category: 'Bimini',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/4%20BENINI%20CAPOTA.jpeg',
    },
    {
      id: 9,
      category: 'Antifouling',
      image: 'https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/DM4%20500X500%20.webp',
    },
  ];

  const categories = [
    { id: 'all', label: t('gallery.categories.all') },
    { id: 'Fibra', label: t('gallery.categories.Fibra') },
    { id: 'Teka', label: t('gallery.categories.Teka') },
    { id: 'Rigging', label: t('gallery.categories.Rigging') },
    { id: 'Antifouling', label: t('gallery.categories.Antifouling') },
    { id: 'Pintura', label: t('gallery.categories.Pintura') },
    { id: 'Verniz', label: t('gallery.categories.Verniz') },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="gallery-page">

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
                    alt={project.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle category badge on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-start p-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ocean-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {t(`gallery.categories.${project.category}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal — photo only */}
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

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.category}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
