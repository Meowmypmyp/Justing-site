import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';  // Иконки для стрелочек

const Footer: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);

  return (
    <footer className="bg-[#111111] text-white py-20 mt-auto">
      <div className="container mx-auto px-6">
        {/* Заголовок футера с анимацией */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Portfolio Maker
        </motion.h2>

        {/* Основное содержимое футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Раздел: О компании */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-6">О компании</h3>
            <motion.button
              className="text-gray-400 hover:text-white transition duration-300"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              {isAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
            {isAboutOpen && (
              <p className="text-gray-400 mt-4">
                Мы предоставляем передовые решения для вашего бизнеса и готовы помочь вам в реализации самых смелых идей.
              </p>
            )}
          </motion.div>

          {/* Раздел: Ссылки */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-6">Полезные ссылки</h3>
            <motion.button
              className="text-gray-400 hover:text-white transition duration-300"
              onClick={() => setIsLinksOpen(!isLinksOpen)}
            >
              {isLinksOpen ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
            {isLinksOpen && (
              <ul className="mt-4">
                <li className="mb-4">
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    Главная
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#about" className="text-gray-400 hover:text-white transition duration-300">
                    О нас
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#services" className="text-gray-400 hover:text-white transition duration-300">
                    Примеры работ 
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                    Контакты
                  </a>
                </li>
              </ul>
            )}
          </motion.div>

          {/* Раздел: Следите за нами */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-6">Следите за нами</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https:wa.me/7081303851"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@myp_tech"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-tiktok text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/myp_tech/"
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-instagram text-2xl"></i>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Нижняя часть с авторскими правами */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
        >
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Все права защищены</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
