import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";
import { Box3, Vector3 } from "three";  // Импортируем для расчета размеров

const GLBModel = ({ path }) => {
  const group = useRef();
  const model = useLoader(GLTFLoader, path);  // Заменили на GLTFLoader
  const { camera } = useThree();
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [modelScale, setModelScale] = useState(1);

  // Задержка для масштабирования и позиционирования модели
  useEffect(() => {
    if (model) {
      const bbox = new Box3().setFromObject(model.scene);  // Расчет ограничивающего бокса
      const size = new Vector3();
      bbox.getSize(size);

      // Находим наибольший размер модели
      const maxSize = Math.max(size.x, size.y, size.z);
      const scaleFactor = 1 / maxSize;  // Масштабируем так, чтобы самый большой размер модели не превышал 1
      setModelScale(scaleFactor);  // Устанавливаем коэффициент масштаба

      // Устанавливаем позицию модели в центр сцены
      model.scene.position.set(0, -size.y * scaleFactor / 2, 0);
      
      setIsModelLoaded(true); // Модель загружена
    }
  }, [model]);

  // Анимация вращения модели
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Плавное вращение по оси Y
    }
  });

  // Обновление камеры
  useEffect(() => {
    if (camera) {
      camera.position.set(0, 2, 5); // Камера отдалена от модели для хорошего обзора
      camera.lookAt(0, 0, 0); // Камера направлена на центр модели
    }
  }, [camera]);

  // Если модель не загружена, ничего не рендерим
  if (!isModelLoaded) {
    return null;
  }

  return (
    <group ref={group}>
      {/* Применяем масштаб, рассчитанный в useEffect */}
      <primitive object={model.scene} scale={modelScale} />
    </group>
  );
};

export default GLBModel;
