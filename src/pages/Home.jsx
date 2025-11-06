import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import certificationsData from "../data/certifications.json";
import projectsData from "../data/projects.json";
import technologiesData from "../data/technologies.json";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-sans">

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center"
            >
                <div>
                    <h2 className="text-lg text-[var(--color-primary)] font-semibold mb-2">
                        Hola, me llamo
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-secondary)] mb-3">
                        Marcelo Avila
                    </h1>
                    <h3 className="text-lg text-[var(--color-primary)] mb-6">
                        Ingeniero en Ciencias de la Computación | QA | Data Science
                    </h3>
                    <p className="text-[var(--color-text)]/90 leading-relaxed mb-6 text-justify">
                        Soy un profesional ecuatoriano apasionado por el desarrollo Full Stack
                        y la ciencia de datos. Disfruto crear soluciones tecnológicas que generen
                        impacto real, combinando la lógica del backend con la experiencia del usuario en
                        el frontend. Actualmente formo parte del equipo de Banco del Austro,
                        donde desarrollo proyectos orientados a la eficiencia, confianza y
                        escalabilidad de los sistemas, impulsando la innovación y la transformación digital.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/perfil" className="btn-primary">Ver perfil completo</Link>
                        <Link to="/contacto" className="btn-outline">Contacto</Link>
                    </div>

                    <div className="flex gap-5 mt-8 text-[var(--color-primary)] text-2xl">
                        <a href="https://github.com/marceloavila11/" target="_blank" rel="noreferrer"><FaIcons.FaGithub /></a>
                        <a href="https://www.linkedin.com/in/marceloavila11/" target="_blank" rel="noreferrer"><FaIcons.FaLinkedin /></a>
                        <a href="mailto:marcelo11avila@gmail.com"><FaIcons.FaEnvelope /></a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/profile.png"
                        alt="Foto de Marcelo Avila"
                        className="w-80 h-80 rounded-full border-4 border-blue-200 shadow-lg object-cover"
                    />
                </motion.div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="border-t border-[var(--color-border)] py-20 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-12">
                        Experiencia Profesional
                    </h2>

                    <div className="relative border-l-2 border-blue-300 ml-5">
                        {experienceData.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="relative mb-14 pl-10"
                            >
                                <span className="absolute -left-[0.55rem] top-6 w-4 h-4 bg-blue-600 rounded-full border-[3px] border-[var(--color-bg)] shadow-md"></span>

                                <div className="flex flex-col sm:flex-row items-start gap-6">
                                    <div className="w-40 h-24 flex items-center justify-center bg-white border border-blue-100 rounded-xl shadow-sm shrink-0">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-[120px] h-[70px] object-contain"
                                            loading="eager"
                                            decoding="sync"
                                        />
                                    </div>


                                    <div className="flex-1 min-w-[250px]">
                                        <h3 className="text-lg font-bold text-[var(--color-primary)] leading-tight mb-1">
                                            {exp.title}{" "}
                                            <span className="font-semibold text-[var(--color-text)]/70">
                                                · {exp.company}
                                            </span>
                                        </h3>
                                        <p className="text-sm text-[var(--color-text)]/60 mb-2">
                                            {exp.date}
                                        </p>
                                        <div className="min-h-[80px]">
                                            <p className="text-[var(--color-text)]/80 text-justify leading-relaxed">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/experiencia" className="btn-primary">
                            Conocer más
                        </Link>
                    </div>
                </div>
            </motion.section>




            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--color-bg)] py-20"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-12 text-center">
                        Proyectos Destacados
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projectsData.slice(0, 3).map((proj, i) => (
                            <motion.a
                                key={i}
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-white rounded-xl shadow hover:shadow-xl p-5 flex flex-col justify-between border border-blue-100 text-gray-800 overflow-hidden transition-all duration-500"
                            >
                                <ImageCarousel proj={proj} />

                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed text-justify">
                                        {proj.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {proj.tech.slice(0, 4).map((t, j) => (
                                        <span
                                            key={j}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/proyectos" className="btn-primary">
                            Ver más proyectos
                        </Link>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="border-t border-[var(--color-border)] py-20 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500"
            >
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-10">
                        Tecnologías
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {Object.entries(technologiesData).map(([category, techs]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6 capitalize">
                                    {category
                                        .replace("frontend", "Front-End")
                                        .replace("backend", "Back-End")
                                        .replace("devops", "DevOps & Herramientas")}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-6 text-5xl">
                                    {techs.map((t, i) => {
                                        const Icon = FaIcons[t.icon] || SiIcons[t.icon] || VscIcons[t.icon];
                                        return (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.1, rotate: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="flex flex-col items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-300"
                                            >
                                                <Icon />
                                                <p className="text-sm text-[var(--color-text)]/80">{t.name}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[var(--color-bg)] py-20 border-t border-[var(--color-border)]"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-12">Educación</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {educationData.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 bg-white rounded-xl shadow border-l-4 border-[var(--color-primary)] flex items-center gap-4 hover:shadow-lg transition"
                            >
                                <img src={edu.logo} alt={edu.title} className="w-20 h-20 object-contain rounded-lg" />
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{edu.title}</h3>
                                    <p className="text-slate-600">{edu.subtitle}</p>
                                    <p className="text-sm text-slate-500">{edu.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold text-[var(--color-secondary)] mt-20 mb-10">
                        Certificaciones Destacadas
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificationsData.filter(cert => cert.where === "home").map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-xl p-5 shadow hover:shadow-lg border border-blue-100 transition"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <img src={cert.logo} alt={cert.issuer} className="w-16 h-16 object-contain" />
                                    <div>
                                        <h3 className="text-md font-semibold text-[var(--color-primary)] leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">{cert.issuer}</p>
                                        <p className="text-xs text-slate-400">{cert.date}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {cert.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block mt-4 text-sm text-[var(--color-primary)] hover:underline"
                                    >
                                        Ver credencial →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/perfil#certificaciones" className="btn-primary">
                            Ver todas
                        </Link>
                    </div>
                </div>
            </motion.section>

        </div>
    );
}
