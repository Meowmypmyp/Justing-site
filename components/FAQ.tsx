// components/FAQ.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Используем иконки стрелочек

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "Что такое Portfolio Maker?", answer: "Portfolio Maker – это инструмент для создания портфолио." },
    { question: "Как начать использовать Portfolio Maker?", answer: "Просто создайте новый проект и следуйте инструкциям." },
    { question: "Можно ли редактировать портфолио после создания?", answer: "Да, вы можете редактировать своё портфолио в любое время." },
    { question: "Какие шаблоны доступны для портфолио?", answer: "В Portfolio Maker предлагаются различные шаблоны на выбор, которые можно настроить под себя." },
    { question: "Как связаться с поддержкой?", answer: "Для связи с поддержкой используйте форму на странице 'Контакты'." },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-12 tracking-wide">Часто задаваемые вопросы</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            className="faq-item"
          >
            <motion.button
              className="w-full text-left text-xl font-semibold py-6 px-8 bg-gray-800 text-white rounded-xl shadow-md hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-between transition-transform transform hover:scale-105"
              onClick={() => toggleAnswer(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="ml-4">
                {activeIndex === index ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </span>
            </motion.button>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 py-6 px-8 bg-gray-900 text-gray-300 rounded-xl shadow-lg"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
