import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Modern Villa Projesi",
      location: "İstanbul, Beşiktaş",
      type: "Villa",
      area: "450m²",
      bedrooms: 4,
      bathrooms: 3,
      description: "Modern tasarım ve lüks detaylarla donatılmış villa projesi",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    },
    {
      title: "Lüks Apartman Kompleksi",
      location: "İstanbul, Kadıköy",
      type: "Apartman",
      area: "120m²",
      bedrooms: 3,
      bathrooms: 2,
      description: "Şehir merkezinde konforlu yaşam alanları",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Bahçeli Müstakil Ev",
      location: "İzmir, Çeşme",
      type: "Müstakil Ev",
      area: "280m²",
      bedrooms: 3,
      bathrooms: 2,
      description: "Deniz manzaralı bahçeli müstakil ev projesi",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Site Projesi",
      location: "Ankara, Çankaya",
      type: "Site",
      area: "85m²",
      bedrooms: 2,
      bathrooms: 1,
      description: "Modern site projesi ile konforlu yaşam",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Bahçeli Villa",
      location: "Antalya, Kemer",
      type: "Villa",
      area: "380m²",
      bedrooms: 4,
      bathrooms: 3,
      description: "Doğa ile iç içe lüks villa projesi",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Modern Daire",
      location: "İstanbul, Şişli",
      type: "Daire",
      area: "95m²",
      bedrooms: 2,
      bathrooms: 1,
      description: "Şehir hayatında modern yaşam alanı",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Konut Projelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tasarım ve kaliteli malzemelerle inşa ettiğimiz konut projelerimizi keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaRuler className="mr-1" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBed className="mr-1" />
                    <span>{project.bedrooms} Yatak</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-1" />
                    <span>{project.bathrooms} Banyo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 