import { motion } from "framer-motion";
import experienceData from "../data/experience.json";

export default function Experiencia() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="border-t border-blue-100 py-20 sm:py-24 px-4 sm:px-6 
            bg-[var(--color-bg)] text-[var(--color-text)] 
            transition-colors duration-500 scroll-mt-[90px]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mb-4 text-center md:text-left">
          Experiencia
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* === LÍNEA DE TIEMPO === */}
        <div className="relative border-l-2 border-blue-300 ml-3 sm:ml-5">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative mb-14 pl-8 sm:pl-10"
            >
              {/* === PUNTO CENTRAL === */}
              <span className="absolute -left-[0.55rem] top-6 w-4 h-4 bg-blue-600 rounded-full border-[3px] border-[var(--color-bg)] shadow-md"></span>

              {/* === CONTENIDO PRINCIPAL === */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* LOGO */}
                <div className="w-full sm:w-40 h-24 flex items-center justify-center 
                bg-white border border-blue-100 dark:border-blue-200/40 
                rounded-xl shadow-sm shrink-0 overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-[120px] h-[70px] sm:w-[130px] sm:h-[80px] object-contain"
                    loading="eager"
                    decoding="sync"
                  />
                </div>

                {/* TEXTO */}
                <div className="flex-1 min-w-[250px]">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-1 leading-snug">
                    {exp.title}{" "}
                    <span className="text-[var(--color-text)]/70 font-semibold block sm:inline">
                      · {exp.company}
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-text)]/60 mb-2">
                    {exp.date}
                  </p>

                  {/* Descripción */}
                  <div className="min-h-[80px]">
                    <p className="text-[var(--color-text)]/80 leading-relaxed text-justify text-sm sm:text-base">
                      {exp.desc}
                    </p>
                  </div>

                  {/* Responsabilidades */}
                  {exp.responsibilities && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                        Responsabilidades:
                      </h4>
                      <ul className="list-disc ml-5 text-[var(--color-text)]/80 text-sm space-y-1">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Logros */}
                  {exp.achievements && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-[var(--color-secondary)] mb-2">
                        Logros:
                      </h4>
                      <ul className="list-disc ml-5 text-[var(--color-text)]/80 text-sm space-y-1">
                        {exp.achievements.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tecnologías */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="bg-blue-100 text-blue-800 dark:bg-blue-800/60 dark:text-blue-100 
                                     px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
