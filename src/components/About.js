import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaAward, FaHeart } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaHome className="text-4xl text-gray-800" />,
      title: "Konut İnşaatı",
      description: "Modern ve konforlu konut projeleri inşa ediyoruz"
    },
    {
      icon: <FaUsers className="text-4xl text-gray-800" />,
      title: "Uzman Ekip",
      description: "Deneyimli mimar ve mühendislerden oluşan profesyonel ekibimiz"
    },
    {
      icon: <FaAward className="text-4xl text-gray-800" />,
      title: "Kalite Garantisi",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz"
    },
    {
      icon: <FaHeart className="text-4xl text-gray-800" />,
      title: "Müşteri Odaklı",
      description: "Müşteri memnuniyeti odaklı yaklaşımımız"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h2>
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
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 