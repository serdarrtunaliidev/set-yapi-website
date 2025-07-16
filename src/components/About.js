import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaHome className="text-4xl text-blue-600" />,
      title: "Konut İnşaatı",
      description: "Modern ve konforlu konut projeleri inşa ediyoruz"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Uzman Ekip",
      description: "Deneyimli mimar ve mühendislerden oluşan profesyonel ekibimiz"
    },
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: "Kalite Garantisi",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz"
    },
    {
      icon: <FaHeart className="text-4xl text-blue-600" />,
      title: "Müşteri Odaklı",
      description: "Müşteri memnuniyeti odaklı yaklaşımımız"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hakkımızda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konut inşaatı alanında uzmanlaşmış ekibimizle, modern ve konforlu yaşam alanları inşa ediyoruz. 
            Her projemizde kalite, güvenlik ve müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 