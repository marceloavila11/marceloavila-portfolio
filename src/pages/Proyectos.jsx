export default function Proyectos() {
  const proyectos = [
    {
      nombre: "Sistema de Evaluación Crediticia",
      descripcion:
        "Modelo predictivo que analiza el perfil del cliente y genera un puntaje crediticio en base a variables históricas y comportamiento transaccional. Implementado con herramientas de machine learning.",
      tecnologias: ["Python", "Scikit-learn", "PostgreSQL", "Power BI"],
      link: "https://github.com/tuusuario/evaluacion-crediticia",
    },
    {
      nombre: "Dashboard de Certificación de Software",
      descripcion:
        "Plataforma de monitoreo que centraliza indicadores de pruebas, incidencias y tiempos de despliegue, optimizando la trazabilidad de QA en entornos bancarios.",
      tecnologias: ["React", "TailwindCSS", "D3.js", "FastAPI"],
      link: "https://github.com/tuusuario/dashboard-certificacion",
    },
    {
      nombre: "API de Automatización de Pruebas",
      descripcion:
        "Servicio REST diseñado para ejecutar suites de prueba automatizadas, almacenar resultados y generar reportes dinámicos integrados a Jenkins y Slack.",
      tecnologias: ["Node.js", "Express", "MongoDB", "Jenkins API"],
      link: "https://github.com/tuusuario/api-automatizacion",
    },
    {
      nombre: "Proyecto DataScience UOC",
      descripcion:
        "Análisis exploratorio y modelado predictivo sobre datasets reales de consumo energético, desarrollado como parte del máster en Ciencia de Datos.",
      tecnologias: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      link: "https://github.com/tuusuario/proyecto-uoc",
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        Proyectos Destacados
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {proyectos.map((proyecto, i) => (
          <div
            key={i}
            className="bg-surface p-6 rounded-xl shadow-md hover:shadow-lg border border-transparent hover:border-primary/40 transition"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              {proyecto.nombre}
            </h2>
            <p className="text-muted mb-4">{proyecto.descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {proyecto.link && (
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-semibold text-secondary hover:text-primary transition"
              >
                Ver en GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
