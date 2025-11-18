import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import projectsData from "../data/projects.json";
import ImageCarousel from "../components/ImageCarousel";
import * as RiIcons from "react-icons/ri";

export default function Proyectos() {
  const iconMap = {
    // --- FRONTEND ---
    React: FaIcons.FaReact,
    "Next.js": SiIcons.SiNextdotjs,
    Vue: FaIcons.FaVuejs,
    "Vue.js": FaIcons.FaVuejs,
    "Vue 3": FaIcons.FaVuejs,
    Angular: FaIcons.FaAngular,
    Astro: SiIcons.SiAstro,
    TypeScript: SiIcons.SiTypescript,
    JavaScript: FaIcons.FaJsSquare,
    TailwindCSS: SiIcons.SiTailwindcss,
    Bootstrap: FaIcons.FaBootstrap,
    Sass: FaIcons.FaSass,
    Vite: SiIcons.SiVite,

    // --- BACKEND ---
    Python: FaIcons.FaPython,
    FastAPI: SiIcons.SiFastapi,
    Flask: SiIcons.SiFlask,
    Java: FaIcons.FaJava,
    Node: FaIcons.FaNodeJs,
    "Node.js": FaIcons.FaNodeJs,
    "Spring Boot": SiIcons.SiSpringboot,
    SQL: FaIcons.FaDatabase,
    "SQL / NoSQL": FaIcons.FaDatabase,
    MongoDB: SiIcons.SiMongodb,
    SQLite: SiIcons.SiSqlite,
    REST: FaIcons.FaServer,
    APIs: FaIcons.FaServer,

    // --- DATA SCIENCE / AI ---
    Pandas: SiIcons.SiPandas,
    Plotly: SiIcons.SiPlotly,
    "scikit-learn": SiIcons.SiScikitlearn,
    SHAP: FaIcons.FaBrain,
    MLflow: SiIcons.SiMlflow,
    "Gemini API": RiIcons.RiGeminiFill,
    Gemini: RiIcons.RiGeminiFill,
    "IA Generativa": RiIcons.RiGeminiFill,
    "OpenAI API": SiIcons.SiOpenai,
    "Data Science": SiIcons.SiDatabricks,

    // --- DEVOPS / CLOUD ---
    Docker: FaIcons.FaDocker,
    AWS: FaIcons.FaAws,
    "AWS ECS": FaIcons.FaAws,
    Kubernetes: SiIcons.SiKubernetes,
    Prometheus: SiIcons.SiPrometheus,
    Grafana: SiIcons.SiGrafana,
    "Azure DevOps API": VscIcons.VscAzureDevops,
    "Azure DevOps": VscIcons.VscAzureDevops,
    GitLab: FaIcons.FaGitlab,
    GitHub: FaIcons.FaGithub,
    "CI/CD": FaIcons.FaCogs,

    // --- DISEÑO / VISUAL ---
    Figma: FaIcons.FaFigma,
    "UI/UX": FaIcons.FaPencilRuler
  };


  return (
    <div className="bg-[var(--color-bg)] font-sans transition-colors duration-500">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[var(--color-bg)] py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-12 text-center">
            Proyectos del Portafolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((proj, i) => (
              <motion.a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl 
                           p-6 flex flex-col justify-between border border-blue-100 
                           text-gray-800 overflow-hidden min-h-[480px] transition-all duration-500"
              >
                <ImageCarousel proj={proj} height="aspect-[16/9]" zoom={true} />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed text-justify">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, j) => {
                    const Icon =
                      iconMap[t] ||
                      iconMap[t.split(" ")[0]] ||
                      FaIcons.FaCode;

                    return (
                      <span
                        key={j}
                        className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full font-medium"
                      >
                        <Icon className="text-blue-700" />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
