import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Refit Completo - Beneteau Oceanis 45',
      category: 'Refit',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800',
      description: 'Modernização completa incluindo sistemas elétricos, pintura e interiores'
    },
    {
      id: 2,
      title: 'Antifouling - Jeanneau Sun Odyssey',
      category: 'Antifouling',
      image: 'https://images.unsplash.com/photo-1572542920843-5dera6f6f4b7?w=800',
      description: 'Aplicação de antifouling premium com preparação completa do casco'
    },
    {
      id: 3,
      title: 'Rigging Completo - Bavaria 46',
      category: 'Rigging',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Substituição total de cabos de aço e instalação de novos estais'
    },
    {
      id: 4,
      title: 'Pintura e Gelcoat - Dufour 412',
      category: 'Pintura',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      description: 'Restauração completa do gelcoat com acabamento espelhado'
    },
    {
      id: 5,
      title: 'Manutenção Preventiva - Hanse 385',
      category: 'Manutenção',
      image: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=800',
      description: 'Serviço completo de manutenção anual'
    },
    {
      id: 6,
      title: 'Refit Estrutural - Contest 50',
      category: 'Refit',
      image: 'https://images.unsplash.com/photo-1566870040567-56816b77da5b?w=800',
      description: 'Reparos estruturais e modernização de sistemas'
    },
    {
      id: 7,
      title: 'Instalação Rigging - Hallberg-Rassy 40',
      category: 'Rigging',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Instalação completa de rigging com materiais Dyneema'
    },
    {
      id: 8,
      title: 'Polimento e Proteção - Moody 45',
      category: 'Pintura',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      description: 'Polimento profissional e aplicação de proteção UV'
    },
    {
      id: 9,
      title: 'Antifouling Racing - X-Yachts XP 44',
      category: 'Antifouling',
      image: 'https://images.unsplash.com/photo-1572542920843-5dera6f6f4b7?w=800',
      description: 'Antifouling de alta performance para regatas'
    }
  ];

  const categories = ['Todos', 'Refit', 'Rigging', 'Antifouling', 'Pintura', 'Manutenção'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-ocean-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Galeria de Projetos
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com excelência
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-ocean-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
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
                        <span className="text-sm font-semibold">Ver Detalhes</span>
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
                {selectedImage.descr
