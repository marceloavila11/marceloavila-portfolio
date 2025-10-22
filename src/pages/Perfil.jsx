import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import certificationsData from "../data/certifications.json";
import educationData from "../data/education.json";

export default function Perfil() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    if (location.hash === "#certificaciones") {
      const scrollTimer = setTimeout(() => {
        const section = document.getElementById("certificaciones");
        if (section) {
          const offset = section.offsetTop - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 1000);
      return () => clearTimeout(scrollTimer);
    }
  }, [location]);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans">
      {/* ===== PERFIL ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-[90px]"
      >
        {/* Texto */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mb-4 text-center md:text-left">
            Perfil
          </h1>
          <p className="text-[var(--color-text)]/90 leading-relaxed mb-6 text-justify text-sm sm:text-base">
            Soy{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              Marcelo Avila
            </span>
            , profesional ecuatoriano apasionado por la tecnología, el
            desarrollo Full Stack y la ciencia de datos. Disfruto integrar la
            lógica del backend con la experiencia del frontend para construir
            soluciones eficientes, escalables y con impacto real.
          </p>

          <p className="text-[var(--color-text)]/80 leading-relaxed mb-6 text-justify text-sm sm:text-base">
            Actualmente formo parte del equipo de{" "}
            <span className="font-semibold">Banco del Austro</span>, donde
            aplico buenas prácticas de QA y DevOps para garantizar software
            resiliente y contribuir a la transformación digital del sector
            financiero. Mi trayectoria también incluye proyectos internacionales
            en{" "}
            <span className="font-semibold">Cinch Home Buyers (EE.UU.)</span> y
            colaboraciones académicas en ciencia de datos con la{" "}
            <span className="font-semibold">
              Universidad Nacional de Colombia
            </span>
            .
          </p>

          <p className="text-[var(--color-text)]/80 leading-relaxed text-justify text-sm sm:text-base">
            Paralelamente, curso un{" "}
            <span className="font-semibold">Máster en Ciencia de Datos</span> en
            la{" "}
            <span className="font-semibold">
              Universitat Oberta de Catalunya (UOC)
            </span>
            , fortaleciendo mi enfoque analítico y mi capacidad para aplicar
            inteligencia artificial y automatización en entornos empresariales.
          </p>
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-center"
        >
          <img
            src="/profile.png"
            alt="Marcelo Avila"
            className="w-64 h-64 rounded-full border-4 border-blue-200 shadow-lg object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ===== UNIVERSIDAD ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[var(--color-bg)] border-t border-blue-100 py-16 sm:py-20 transition-colors duration-500 scroll-mt-[90px]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-10 text-center md:text-left">
            Universidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition border-l-4 border-blue-500"
              >
                <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-500 rounded-l-xl"></span>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 text-center sm:text-left">
                  <img
                    src={edu.logo}
                    alt={edu.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                      {edu.title}
                    </h3>
                    <p className="text-slate-600">{edu.subtitle}</p>
                    <p className="text-sm text-slate-500">{edu.date}</p>
                  </div>
                </div>

                {edu.diplomaUrl && (
                  <iframe
                    src={edu.diplomaUrl}
                    title={edu.title}
                    className="w-full h-64 sm:h-80 rounded-lg shadow-inner border border-blue-100 bg-white"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== CERTIFICACIONES ===== */}
      <motion.section
        id="certificaciones"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[var(--color-bg)] border-t border-blue-100 py-16 sm:py-20 scroll-mt-[90px]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-10 text-center md:text-left">
            Certificaciones
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {certificationsData.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="block bg-white p-4 sm:p-5 rounded-xl shadow hover:shadow-lg border border-blue-100 transition relative cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3 text-center sm:text-left">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-md sm:text-lg font-semibold text-[var(--color-primary)]">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                    <p className="text-xs text-slate-400">{cert.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                  {cert.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
