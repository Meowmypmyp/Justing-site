import React, { useState, useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";
import { motion } from "framer-motion";

// Компонент кнопки прокрутки
const ScrollBtn = ({ isModalOpen }: { isModalOpen: boolean }) => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn") as HTMLElement;
    window.onscroll = () => {
      scrollFunction();
    };
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollBtn!.style.display = "block";
      } else {
        scrollBtn!.style.display = "none";
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollBtn?.addEventListener("click", () => {
      scrollToTop();
    });

    // Очищаем событие при удалении компонента
    return () => {
      window.onscroll = null;
    };
  }, []);

  // Скрываем кнопку, если модальное окно открыто
  if (isModalOpen) {
    return null;
  }

  return (
    <div className="w-14 h-14 z-50 text-3xl fixed top-[85vh] right-10 bg-black text-gray-200 hover:text-white rounded-full border-[1px] border-yellow-600 shadow-cardShadow scrollBtn hidden hover:border-designColor duration-200">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90 ">
        <TbChevronRight />
      </button>
    </div>
  );
};

const CreatePortfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    description: "",
    email: "",
    skills: "",
    portfolioLink: "",
    image: "",
  });
  const [portfolioData, setPortfolioData] = useState<any[]>([]); // Храним ранее созданные портфолио
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<any>({}); // Храним ошибки для валидации

  // Загрузка данных из JSON файла
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/portfolioData.json");
        const data = await response.json();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки данных", error);
      }
    };

    fetchPortfolioData();
  }, []);

  // Закрываем или открываем модальное окно
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    // Отключаем прокрутку страницы, когда модальное окно открыто
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";  // Отключаем прокрутку на основной странице
    } else {
      document.body.style.overflow = "auto";  // Включаем прокрутку на основной странице
    }
  };

  // Обработчик изменения данных в форме
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Очистка формы
  const handleClear = () => {
    setFormData({
      name: "",
      description: "",
      email: "",
      skills: "",
      portfolioLink: "",
      image: "",
    });
    setErrors({});
  };

  // Валидация данных перед отправкой формы
  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Имя обязательно!";
    if (!formData.description) newErrors.description = "Описание обязательно!";
    if (!formData.email) newErrors.email = "Email обязателен!";
    if (!formData.skills) newErrors.skills = "Навыки обязательны!";

    return newErrors;
  };

  // Отправка формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Портфолио создано!");
    handleModalToggle(); // Закрыть модальное окно после отправки формы
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <span>Загрузка данных...</span>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <section className="py-20 bg-black text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Создай свое тестовое портфолио</h2>
        <p className="text-lg text-gray-300 mb-6">
          Хотите создать свое тестовое портфолио? Мы вам в этом поможем! Просто нажмите кнопку ниже, чтобы начать.
        </p>
        <button
          onClick={handleModalToggle}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:bg-blue-500 hover:scale-105"
        >
          Начать создание
        </button>
      </section>

      {/* Модальное окно для создания портфолио с анимацией */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-800 p-8 rounded-lg w-full h-full flex flex-col md:flex-row overflow-auto"  // Даем возможность скроллить только внутри модального окна
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {/* Левая часть с изображением */}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center p-4">
              <div className="w-3/4 h-3/4 overflow-hidden rounded-lg bg-gray-700">
                <img
                  src={formData.image || "https://via.placeholder.com/300"}
                  alt="Будущее фото"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Правая часть с формой и шаблоном */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-8 overflow-y-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Создание портфолио</h2>
              <div className="text-sm text-gray-300 mb-6">
                <p>Вот как будет выглядеть ваше портфолио:</p>
                <pre className="bg-gray-700 p-4 rounded-lg mt-4 whitespace-pre-wrap break-words">
                  {`
Название: ${formData.name}
Описание: ${formData.description}
Email: ${formData.email}
Навыки: ${formData.skills}
Портфолио: ${formData.portfolioLink || 'Не указано'}`}
                </pre>
              </div>

              {/* Форма для редактирования */}
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-200">
                    Ваше имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="description" className="block text-lg font-medium text-gray-200">
                    Описание себя
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Напишите краткое описание себя"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-200">
                    Ваш Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Введите ваш Email"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="skills" className="block text-lg font-medium text-gray-200">
                    Ваши навыки
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    type="text"
                    placeholder="Укажите свои ключевые навыки"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                  />
                  {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="portfolioLink" className="block text-lg font-medium text-gray-200">
                    Ссылка на ваше портфолио (если есть)
                  </label>
                  <input
                    id="portfolioLink"
                    name="portfolioLink"
                    type="url"
                    placeholder="Введите ссылку на ваше портфолио"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="image" className="block text-lg font-medium text-gray-200">
                    Ссылка на изображение (опционально)
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="url"
                    placeholder="Введите ссылку на изображение"
                    className="w-full p-4 border-2 border-gray-600 bg-gray-700 text-white rounded-lg"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
                >
                  Создать портфолио
                </button>
              </form>

              <div className="mt-4">
                <button
                  onClick={handleClear}
                  className="mr-4 text-red-500 font-semibold text-lg hover:underline"
                >
                  Очистить
                </button>
                <button
                  onClick={handleModalToggle}
                  className="text-gray-300 font-semibold text-lg hover:underline"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Кнопка прокрутки */}
      <ScrollBtn isModalOpen={isModalOpen} />
    </div>
  );
};

export default CreatePortfolio;
