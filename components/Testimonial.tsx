import React, { useState, useRef } from "react";
import Slider from "react-slick";

// Кнопки для переключения слайдов
const ArrowButton = ({ direction, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-1/2 ${direction === "left" ? "left-5" : "right-5"} transform -translate-y-1/2 p-4 bg-[#F7D449] text-[#1C1F22] rounded-full cursor-pointer z-20 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:bg-[#F7C800] hover:scale-110`}
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      {direction === "left" ? (
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>←</span>
      ) : (
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>→</span>
      )}
    </div>
  );
};

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDotActive(next);
    },

    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#F7D449",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s",
                transform: "scale(1.3)",
              }
            : {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#aeaeae",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="bg-[#0F1113] py-20 flex justify-center items-center relative"
    >
      {/* Кнопки для переключения слайдов */}
      <ArrowButton direction="left" onClick={() => sliderRef.current?.slickPrev()} />
      <ArrowButton direction="right" onClick={() => sliderRef.current?.slickNext()} />

      <div className="w-full md:w-[1000px] h-auto px-6 md:px-12">
        <h2 className="text-4xl text-white text-center mb-16 font-semibold">
          Что говорят наши пользователи
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {/* Отзывы */}
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Анна, дизайнер -</span> Я долго искала платформу, которая позволила бы мне создать профессиональное портфолио без необходимости в кодировании. Это идеальный вариант! Удобный интерфейс, красивые шаблоны и все работает как часы!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Иван, веб-разработчик -</span> Платформа позволяет очень быстро и просто представить свои работы. Особенно понравились возможности для кастомизации дизайна. Моё портфолио выглядит уникально, и мне не пришлось тратить на это много времени.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Алексей, иллюстратор -</span> Мне нравится, что платформа дает полный контроль над визуальным стилем портфолио. Очень много возможностей для персонализации, а интерфейс понятный даже для новичков.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Екатерина, маркетолог -</span> Прекрасное решение для создания личного портфолио! Особенно ценю инструменты SEO-оптимизации. За несколько недель я заметила рост посещаемости и заинтересованности в моем контенте.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Дмитрий, фотограф -</span> Этот сервис действительно облегчает жизнь! Моя галерея выглядит потрясающе, и процесс загрузки фото стал проще, чем я думал. Очень доволен результатом!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Мария, блогер -</span> Отличная платформа для создания красивого и профессионального контента. Рекомендую всем, кто хочет легко выделиться в онлайн-мире!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Никита, архитектор -</span> Использую платформу для представления своих проектов, и это просто потрясающе. Простота использования и возможности для подробной настройки дизайна — это то, что мне нужно.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Ольга, художник -</span> Прекрасная платформа для художников! Мне нравится, как можно легко демонстрировать свои работы, а интуитивно понятный интерфейс помогает настроить сайт в считанные минуты.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Максим, видеограф -</span> Простая в использовании платформа с потрясающими функциями для создания портфолио. Я смог создать качественное портфолио с возможностью демонстрации видеоработ — это то, что мне нужно!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#1C1F22] rounded-lg shadow-lg p-8 md:p-16 transition-transform transform hover:scale-110">
                <p className="text-2xl text-textColor text-center leading-10">
                  <span className="text-white font-semibold">Юлия, блогер -</span> Это идеальное решение для создания качественного и красивого контента. Удобный интерфейс и возможность работать с SEO-оптимизацией впечатляют!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
