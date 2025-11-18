import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/perfil", label: "Perfil" },
    { path: "/experiencia", label: "Experiencia" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full h-[72px] bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border-b border-blue-100 dark:border-slate-700 z-50 shadow-sm transition-all duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-1.5 rounded-xl border border-blue-100 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 shadow-sm">
            <img
              src="/assets/icon.svg"
              alt="Logo"
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[var(--color-primary)] dark:text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
            marceloavila.dev
          </span>
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-slate-700 dark:text-slate-200">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative py-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-0.5 after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === item.path
                    ? "text-[var(--color-primary)] after:w-full font-semibold"
                    : "hover:text-[var(--color-primary)]"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/marceloavilaCV.pdf"
            download
            className="hidden sm:inline bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
          >
            Descargar CV
          </a>

          <div
            onClick={toggleTheme}
            className={`relative w-14 h-7 flex items-center cursor-pointer rounded-full px-1 transition-colors duration-500 ${theme === "dark" ? "bg-yellow-400" : "bg-slate-400"
              }`}
          >
            <motion.div
              animate={{
                x: theme === "dark" ? 28 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-500 text-sm" />
              ) : (
                <FaMoon className="text-slate-600 text-sm" />
              )}
            </motion.div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700 dark:text-slate-200 text-xl focus:outline-none"
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[72px] left-0 w-full bg-white dark:bg-slate-900 shadow-md border-t border-slate-200 dark:border-slate-700 py-6"
          >
            <ul className="flex flex-col items-center gap-5 text-slate-700 dark:text-slate-200 font-medium">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-lg ${location.pathname === item.path
                        ? "text-[var(--color-primary)] font-semibold"
                        : "hover:text-[var(--color-primary)]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/marceloavilaCV.pdf"
                  download
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-5 py-2 rounded-lg font-semibold shadow-md transition"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
