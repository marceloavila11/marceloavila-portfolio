import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detecta el scroll y muestra/oculta el botón
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subir suavemente al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 40,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="fixed bottom-6 right-6 z-50 p-3 md:p-4 rounded-full shadow-lg 
                 border border-[var(--color-border)] bg-[var(--color-primary)] text-white 
                 hover:bg-[var(--color-secondary)] hover:shadow-xl 
                 transition-all duration-300 ease-out 
                 backdrop-blur-sm
                 dark:border-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
    >
      <FaArrowUp className="text-lg md:text-xl" />
    </motion.button>
  );
}
