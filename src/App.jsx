import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Experiencia from "./pages/Experiencia";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <Router>
        {/* ===== NAVBAR ===== */}
        <Navbar />

        {/* ===== CONTROL DE SCROLL ===== */}
        <ScrollToTop />

        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        {/* ===== FOOTER ===== */}
        <Footer />

        {/* ===== BOTÓN FLOTANTE “VOLVER ARRIBA” ===== */}
        <ScrollToTopButton />
      </Router>
    </div>
  );
}
