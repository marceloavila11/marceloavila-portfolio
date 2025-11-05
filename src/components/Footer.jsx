import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLink,
  FaUserCircle,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("marcelo11avila@gmail.com");
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-blue-700/30 py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left items-start">
        <div>
          <h3 className="text-base font-semibold text-blue-400 flex items-center justify-center md:justify-start gap-2 mb-3">
            <FaEnvelope className="text-blue-400" /> Contacto
          </h3>
          <p className="text-gray-400 mb-3 text-sm break-all">
            marcelo11avila@gmail.com
          </p>

          <div className="flex justify-center md:justify-start gap-2 flex-wrap">
            <a
              href="mailto:marcelo11avila@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1"
            >
              <FaEnvelope className="text-white text-sm" /> Enviar
            </a>
            <button
              onClick={handleCopyEmail}
              className="border border-blue-500 text-blue-400 hover:bg-blue-600/20 text-xs px-4 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1"
            >
              <FaLink className="text-blue-400 text-sm" /> Copiar
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-blue-400 flex items-center justify-center md:justify-start gap-2 mb-3">
            Redes Sociales
          </h3>

          <div className="flex justify-center md:justify-start gap-3 flex-wrap">
            {[
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/marceloavila11" },
              { icon: <FaGithub />, link: "https://github.com/marceloavila11" },
              { icon: <FaInstagram />, link: "https://instagram.com/marcelo11avila" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ir a ${item.link}`}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-blue-400 flex items-center justify-center md:justify-start gap-2 mb-3">
            Links de interés
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="/perfil"
                className="hover:text-blue-400 transition flex items-center justify-center md:justify-start gap-2"
              >
                <FaUserCircle className="text-blue-400 text-sm" /> Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/experiencia"
                className="hover:text-blue-400 transition flex items-center justify-center md:justify-start gap-2"
              >
                <FaBriefcase className="text-blue-400 text-sm" /> Experiencia
              </Link>
            </li>
            <li>
              <Link
                to="/proyectos"
                className="hover:text-blue-400 transition flex items-center justify-center md:justify-start gap-2"
              >
                <FaProjectDiagram className="text-blue-400 text-sm" /> Proyectos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-800/30 pt-4 text-center text-xs text-gray-400">
        <p className="flex items-center justify-center gap-2 flex-wrap leading-relaxed">
          Hecho con <FaHeart className="text-red-500" /> · <FaMapMarkerAlt /> Cuenca, Ecuador ·{" "}
          <FaCalendarAlt /> {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
