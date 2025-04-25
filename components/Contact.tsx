import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GLBModel from "./GLBModel";  // Используем GLBModel вместо FBXModel

const contactItems = [
  { icon: <FaMap />, label: "Москва" },
  { icon: <FaPhoneAlt />, label: "+7081303858" },
  { icon: <FaEnvelope />, label: "Portfolio_maker@support.com" },
];

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !message) {
      setErrMsg("Пожалуйста, заполните все поля.");
      setSuccessMsg("");
    } else {
      setSuccessMsg(
        `Здравствуйте ${username}, спасибо за ваше сообщение! Мы ответим на ${email}.`
      );
      setErrMsg("");
      setUsername("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0A0D0F] text-white flex justify-center items-center px-4"
    >
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        {/* Левая часть — контактная форма */}
        <div className="bg-[#1C2125] p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <motion.h2
            className="text-3xl font-bold text-center text-[#F7D449] mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Свяжитесь с нами
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {contactItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + idx * 0.2 }}
              >
                <div className="text-5xl text-[#F7D449]">{item.icon}</div>
                <p className={`text-lg font-semibold ${idx === 2 ? "mt-4" : "mt-2"}`}>
                  {item.label.split("@").map((part, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        <>
                          {part}
                          <br /> {/* Перенос строки перед @ */}
                        </>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>

          {successMsg ? (
            <motion.p
              className="text-center text-[#F7D449] font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {successMsg}
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Ваше имя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-3 rounded-lg text-black text-base border-2 outline-none focus:ring-2 focus:ring-[#F7D449]"
              />
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg text-black text-base border-2 outline-none focus:ring-2 focus:ring-[#F7D449]"
              />
              <textarea
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="px-4 py-3 rounded-lg text-black text-base border-2 outline-none focus:ring-2 focus:ring-[#F7D449] resize-none"
              />

              {errMsg && (
                <p className="bg-red-500 text-white text-sm py-2 px-3 rounded text-center font-medium">
                  {errMsg}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#F7D449] hover:bg-[#F7C039] transition-transform transform hover:scale-105 py-3 text-black font-bold rounded-lg uppercase"
              >
                Отправить
              </button>
            </form>
          )}
        </div>

        {/* Правая часть — 3D модель */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#1C2125] to-[#2A2F34] rounded-xl shadow-lg">
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "100%", height: "500px", borderRadius: "0.75rem" }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <OrbitControls enablePan={false} />
            <GLBModel path="/models/two_headed_dragon.glb" />  {/* Используем GLB модель */}
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
