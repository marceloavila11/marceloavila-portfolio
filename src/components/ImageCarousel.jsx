import { useState } from "react";
import { motion } from "framer-motion";

export default function ImageCarousel({ proj, height = "h-48", zoom = true }) {
  const images = [proj.image1, proj.image2, proj.image3].filter(Boolean);
  const [current, setCurrent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrent(0);
  };

  return (
    <motion.div
      className={`relative w-full ${height} mb-4 rounded-lg overflow-hidden border border-gray-100`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={zoom ? { scale: hovered ? 1.05 : 1 } : {}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={proj.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
}
