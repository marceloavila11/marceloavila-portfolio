import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-[80vh] flex flex-col items-center justify-center 
                 bg-[var(--color-bg)] text-[var(--color-text)] 
                 py-20 sm:py-24 px-4 sm:px-6 transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-2"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mb-4">
          Contáctame
        </h1>
        <p className="text-[var(--color-text)]/90 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
          Estoy disponible para nuevos proyectos, colaboraciones o consultas.
          Puedes escribirme directamente por correo, WhatsApp o conectar en mis redes profesionales.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-10 w-full max-w-3xl 
                   bg-[var(--color-bg)]/60 dark:bg-[var(--color-bg)]/40 
                   rounded-2xl shadow-md border border-[var(--color-border)] 
                   py-10 sm:py-12 px-5 sm:px-10 text-center backdrop-blur-sm transition-colors duration-500"
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
          <a
            href="mailto:marcelo11avila@gmail.com"
            className="flex items-center justify-center gap-2 sm:gap-3 
                       bg-[var(--color-primary)] text-white 
                       px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold 
                       text-sm sm:text-base hover:bg-[var(--color-secondary)] 
                       hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <FaEnvelope className="text-lg sm:text-xl" /> Enviar correo
          </a>

          <a
            href="https://wa.me/+593987427058?text=Hola%20Marcelo!%20Me%20gustaría%20contactarte."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 
                       bg-green-500 hover:bg-green-600 text-white 
                       px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold 
                       text-sm sm:text-base hover:scale-105 transition-transform w-full sm:w-auto"
          >
            <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp
          </a>
        </div>

        <div className="text-center w-full">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-text)]">
            También puedes encontrarme en:
          </h3>

          <div className="flex justify-center gap-6 text-3xl text-[var(--color-primary)]">
            <motion.a
              href="https://linkedin.com/in/marceloavila11"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="hover:text-[var(--color-secondary)] transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/marceloavila11"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="hover:text-[var(--color-secondary)] transition-transform"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-[var(--color-text)] mt-4">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          Disponible para colaboraciones
        </div>
      </motion.div>
    </motion.section>
  );
}
