import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaRuler, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="text-4xl text-blue-600" />,
      title: "Konut İnşaatı",
      description: "Modern ve konforlu konut projeleri inşa ediyoruz. Villa, apartman ve site projeleri."
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: "Konut Tasarımı",
      description: "Mimari tasarım ve iç mekan düzenleme hizmetleri sunuyoruz."
    },
    {
      icon: <FaRuler className="text-4xl text-blue-600" />,
      title: "Proje Yönetimi",
      description: "Konut projelerinin başından sonuna kadar profesyonel yönetimi."
    },
    {
      icon: <FaTools className="text-4xl text-blue-600" />,
      title: "Tadilat ve Onarım",
      description: "Mevcut konutların tadilat ve onarım işleri."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konut inşaatı alanında kapsamlı hizmetler sunuyoruz. 
            Modern tasarım ve kaliteli malzemelerle hayalinizdeki evi inşa ediyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 