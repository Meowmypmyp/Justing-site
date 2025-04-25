import React, { useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";

// Компонент кнопки прокрутки
const ScrollBtn = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn") as HTMLElement;
    
    // Функция, которая будет вызываться при прокрутке
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollBtn!.style.display = "block"; // Показывать кнопку, если прокрутили больше чем 300px
      } else {
        scrollBtn!.style.display = "none"; // Скрывать кнопку, если не прокрутили
      }
    };

    // Функция для прокрутки страницы наверх
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.onscroll = scrollFunction;
    scrollBtn?.addEventListener("click", scrollToTop);

    // Очищаем событие при удалении компонента
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className="w-14 h-14 z-50 text-3xl fixed top-[85vh] right-10 bg-black text-gray-200 hover:text-white rounded-full border-[1px] border-yellow-600 shadow-cardShadow scrollBtn hidden hover:border-designColor duration-200">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90 ">
        <TbChevronRight />
      </button>
    </div>
  );
};

export default ScrollBtn;
