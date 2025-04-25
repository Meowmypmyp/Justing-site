import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa"; // Arrow icons

const AboutMe = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item); // Toggle open/close
  };

  const aboutListData = [
    { title: "Быстрое портфолио", description: "Дополнительная информация о быстром портфолио." },
    { title: "10+ лет на рынке", description: "Информация о нашем опыте на рынке." },
    { title: "Удобный дизайн", description: "Как наш дизайн делает использование простым." },
    { title: "Адаптация", description: "Как наш сервис адаптируется под различные устройства." },
    { title: "Всегда поможем", description: "Как мы поддерживаем наших пользователей." },
    { title: "SEO-оптимизация", description: "Преимущества SEO-оптимизации наших портфолио." },
    { title: "Мгновенная публикация", description: "Процесс мгновенной публикации вашего портфолио." },
    { title: "Безопасность", description: "Как мы обеспечиваем безопасность данных." },
    { title: "Быстрое обновление", description: "Как мы обеспечиваем быстрые обновления портфолио." },
  ];

  return (
    <section id="about" className="w-full h-full bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        <h1 className="text-4xl font-semibold text-center uppercase tracking-widest text-white">
          Небольшая информация про нас
        </h1>
        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
          Добро пожаловать на наш сайт — ваш идеальный инструмент для создания
          впечатляющих и профессиональных портфолио. Мы помогаем дизайнерам,
          художникам, фотографам, разработчикам и творческим специалистам с 2021
          года создавать визуально привлекательные и функциональные портфолио,
          которые идеально отражают их талант и стиль. Наши решения просты в
          использовании и подходят для любого уровня подготовки. Начните свой путь к
          успеху с нами!
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {aboutListData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-700"
            >
              <div
                className="flex items-center justify-between cursor-pointer text-xl font-semibold text-white hover:text-indigo-500 transition-colors duration-300"
                onClick={() => toggleItem(item.title)}
              >
                <span>{item.title}</span>
                <span
                  className={`transform transition-transform duration-500 ${
                    activeItem === item.title ? "rotate-90" : ""
                  }`}
                >
                  <FaChevronRight className="text-white" />
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-out mt-4 ${
                  activeItem === item.title
                    ? "max-h-[500px] opacity-100 translate-y-0 delay-150"
                    : "max-h-0 opacity-0 translate-y-6"
                }`}
              >
                {activeItem === item.title && (
                  <p className="text-xl text-gray-300 transition-all duration-500 ease-out delay-200">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
