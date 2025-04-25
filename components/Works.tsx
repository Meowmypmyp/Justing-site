import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { bgOne, bgTwo, bgThree, bgFour, bgFive, bgSeven, bgSix, bgEight, bgNine, bgTen } from "../public/assets/index";

const Works = () => {
  const [showMore, setShowMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(null); // Состояние для активной работы/карточки
  const [isImageZoomed, setIsImageZoomed] = useState(false); // Состояние для увеличения изображения в модальном окне
  const [scale, setScale] = useState(1); // Добавим состояние для масштаба изображения

  // Массив объектов с данными для портфолио
  const worksData = [
    {
      img: bgOne,
      title: "Cyan Banister",
      description: "Создание уникальных и современных веб-дизайнов для бизнеса.",
      fullDescription: "Это интерактивный антипортфолио, замаскированный под операционную систему vaporwave — сюрреалистический интерфейс в стиле ОС, который ощущается как падение в хакерский сон...",
      link: "https://cyanbanister.com/"
    },
    {
      img: bgTwo,
      title: "Портфолио Camila Rosa",
      description: "Элегантное портфолио",
      fullDescription: "ППортфолио бразильского иллюстратора и художника Камилы Розы — это пространство, где она может продемонстрировать свои работы, поделиться своей историей и предложить свою продукцию.",
      link: "https://www.camilarosa.net/"
    },
    {
      img: bgThree,
      title: "3D-сайт для инвесторов I PeachWeb",
      description: "Веб сайт с 3D моделями",
      fullDescription: "Гарри Змудзе — известный инвестор и советник в области глубоких технологий, здоровья и долголетия. Он работает с компаниями, разрабатывающими передовые технологии для продления жизни и улучшения здоровья. Гарри является соучредителем Longevity Science Foundation и управляющим партнером LongeVC, поддерживая инновационные стартапы в биотехнологиях и долголетии. Также он консультирует стартапы в области новых технологий и занимает ключевые позиции в таких организациях, как Sheba Longevity Center. Гарри стремится революционизировать здравоохранение, интегрируя передовые технологии для улучшения долгосрочного здоровья.",
      link: "https://garrizmudze.com/"
    },
    {
      img: bgFour,
      title: "БРЕНДИНГОВОЕ АГЕНТСТВО SANMIGUEL",
      description: "Минималистичный SEO-ориентированный сайт",
      fullDescription: "SANMIGUEL.io сочетает минималистский дизайн с интерактивным UX для привлечения лидов. Ориентированный на SEO и стратегическое позиционирование, он обеспечивает пользователям безупречный, увлекательный опыт.",
      link: "https://www.sanmiguel.io/"
    },
    {
      img: bgFive,
      title: "Портфолио tomoliverharrison",
      description: "Монохромное портфолио с фильтрами",
      fullDescription: "Онлайн-портфолио креативного веб-разработчика Тома Харрисона из Бристоля, Великобритания. Использует монохромную цветовую палитру и несколько забавных фильтров SVG.",
      link: "https://www.devanshprakash.com/"
    },
    // Дополнительные работы
    {
      img: bgSix,
      title: "Haroon Malik",
      description: "Портфолио в продуктовом дизайне и анимации.",
      fullDescription: "Сайт-портфолио, демонстрирующее экспертные знания в области продуктового дизайна, анимационной графики и кинопроизводства, где дизайн, анимация и повествование объединяются для создания значимых впечатлений.",
      link: "https://www.haroonmalik.me/"
    },
    {
      img: bgSeven,
      title: "Портфолио технопрофиль",
      description: "Technoprofil — резка камня 30 лет.",
      fullDescription: "Компания Technoprofil специализируется на индивидуальной резке натурального камня, реализуя уникальные проекты с использованием опыта и передовых технологий на протяжении более 30 лет в Северной Америке.",
      link: "https://technoprofil.ca/"
    },
    {
      img: bgEight,
      title: "Пайам Задех - Графический дизайнер",
      description: "Цифровое портфолио с акцентом на эстетику и брендинг",
      fullDescription: "Познакомьтесь с моей цифровой игровой площадкой, где я трансформирую видения в захватывающие онлайн-опыты. Мое портфолио отражает мою страсть к чистой эстетике и осмысленному дизайну бренда.",
      link: "#"
    },
    {
      img: bgNine,
      title: "NIKI Studio",
      description: "Цифровой дизайн из Вьетнама.",
      fullDescription: "NIKI — независимая студия цифрового дизайна, базирующаяся во Вьетнаме.",
      link: "https://bynikistudio.com/"
    },
    {
      img: bgTen,
      title: "Портфолио Martin Ukhanov",
      description: "Портфолио точного front-end дизайна.",
      fullDescription: "Сайт-портфолио Мартина Уханова, креативного front-end-разработчика, заботящегося о каждом пикселе.",
      link: "https://www.martinukhanov.dev/"
    }
  ];

  const handleCardClick = (work) => {
    setActiveWork(work);
    setModalOpen(true); // Открыть модальное окно
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveWork(null);
    setIsImageZoomed(false); // Сбросить состояние увеличенного изображения
    setScale(1); // Сбросить масштаб изображения
    document.body.style.overflow = "auto"; // Восстановить прокрутку страницы
  };

  const handleImageClick = () => {
    setIsImageZoomed(!isImageZoomed); // Переключить увеличение изображения при клике
  };

  const handleWheel = (e) => {
    const newScale = scale - e.deltaY * 0.001; // Используем колесико мыши для масштабирования
    if (newScale >= 1 && newScale <= 2) { // Ограничиваем масштаб от 1x до 2x
      setScale(newScale);
    }
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Блокируем прокрутку страницы при открытии модального окна
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <section id="portfolio" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase tracking-[10px] font-semibold text-center mb-12">
        Примеры портфолио
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-6">
        {worksData.slice(0, showMore ? worksData.length : 5).map((work, index) => (
          <motion.div
            key={index}
            className="w-full relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            onClick={() => handleCardClick(work)} // При клике открываем модальное окно
          >
            <Image
              className="w-full h-full object-cover transition-transform duration-500"
              src={work.img}
              alt={work.title}
              layout="responsive"
              width={500}
              height={300}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-center">
                <h2 className="text-xl font-semibold">{work.title}</h2>
                <p className="mt-2 text-sm">{work.description}</p>
                <motion.a
                  href={work.link}
                  className="mt-4 inline-block bg-[#F7D449] py-2 px-4 rounded-lg text-black font-semibold uppercase transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Подробнее
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <motion.button
          className="bg-[#F7D449] text-black py-3 px-6 rounded-lg font-bold text-lg uppercase transform hover:scale-105 transition-all duration-300"
          onClick={handleShowMore}
        >
          {showMore ? "Показать меньше" : "Показать больше"}
        </motion.button>
      </div>

      {/* Модальное окно для подробной информации о работе */}
      {modalOpen && activeWork && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white text-black w-full h-full p-8 flex flex-col justify-center items-center relative overflow-hidden rounded-lg shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Кнопка закрытия (красивый крестик) */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-5xl text-white bg-[#F7D449] rounded-full p-3 hover:bg-yellow-600 transition-all duration-300"
            >
              ×
            </button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center items-center mb-8"
              onWheel={handleWheel} // Добавляем обработчик колесика мыши
            >
              <div
                className="transition-transform duration-500"
                style={{ transform: `scale(${scale})` }} // Применяем масштабирование
              >
                <Image
                  src={activeWork.img}
                  alt={activeWork.title}
                  layout="intrinsic"
                  width={800}
                  height={533}
                  className="rounded-lg cursor-pointer"
                  onClick={handleImageClick} // Клик по изображению для увеличения
                />
              </div>
            </motion.div>
            <h2 className="text-5xl font-bold mb-6 text-center">{activeWork.title}</h2>
            <p className="text-2xl text-gray-800 mb-8 text-center">{activeWork.fullDescription}</p>
            <motion.a
              href={activeWork.link}
              className="inline-block bg-[#F7D449] py-4 px-8 rounded-lg text-black font-semibold uppercase transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Подробнее
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Works;
