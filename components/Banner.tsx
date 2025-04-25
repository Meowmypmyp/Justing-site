import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Design from "./Design";
import { HiMinus } from "react-icons/hi";

const Banner = () => {
  const ref = useRef<string | any>("");

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setMenu(false);
    }
  }

  // ============ Nav style Start here =============
  const [navSize, setnavSize] = useState("90px");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(0, 0, 0, 0.8)") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("80px") : setnavSize("90px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor]);

  // ============ Nav style End here ===============

  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect if the user has scrolled to hide "scroll down" message
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="w-full h-screen relative bg-cover bg-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Design />
      <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
          className="w-full px-16 py-6 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25"
        >
          <h1 className="font-bodyFont text-4xl text-white font-extrabold">
            Portfolio Maker
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>

        <motion.div
          className="w-full h-full flex flex-col justify-center items-center text-white px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-black text-shadow-lg">
            Сервис для создания портфолио
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-lg md:text-xl font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 px-6 py-3 rounded-full">
            <h2 className="tracking-[4px]">Быстро</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">Удобно</h2>
            <HiMinus className="text-2xl rotate-90" />
            <h2 className="tracking-[4px]">Красиво</h2>
          </div>
        </motion.div>
      </div>

      {/* Прокрутите вниз */}
      {!scrolled && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>Прокрутите вниз</p>
        </motion.div>
      )}

      {/* =========== Menu Icon status Start here ========= */}
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-12">
              <div>
                <ul className="flex flex-col gap-2">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Главная
                    </li>
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      О нас
                    </li>
                  </Link>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Примеры
                    </li>
                  </Link>
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Отзывы
                    </li>
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Контакты
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>Для сотрудничества</p>
                <p>
                  <span className="font-semibold text-designColor">
                    Porfolio_maker@support.com
                  </span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-l-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* =========== Menu Icon status End here =========== */}
    </div>
  );
};

export default Banner;
