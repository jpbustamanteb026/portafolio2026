import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Star } from "lucide-react";
import { LiveProjectButton } from "./LiveProjectButton";
import valleo2 from "@/assets/valleo2/valleo2.webp";
import campusMap from "@/assets/campusmap/campusmap.webp";
import endansys from "@/assets/endansys/endansys.webp";
import geocluster from "@/assets/geocluster/geocluster.webp";
import chatbotClimatico from "@/assets/chatbot/chatbot.jpg";

const PROJECTS = [
  {
    num: "01",
    category: "Práctica Profesional",
    name: "Campus Map",
    highlighted: true,
    desc: "Aplicación interactiva de navegación GPS para el campus de Palmira, desarrollada durante mi práctica en Alliance Bioversity International & CIAT.",
    bullets: [
      "Navegación por GPS pensada para facilitar la orientación de visitantes y nuevos miembros dentro del campus.",
      "Desarrollo enfocado en UX/UI, optimizando la comunicación entre diseño e ingeniería bajo metodologías ágiles.",
    ],
    stack: [
      { name: "Angular", slug: "angular", color: "DD0031" },
      { name: "Git", slug: "git" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Postman", slug: "postman" },
      { name: "MySQL", slug: "mysql" },
      { name: "Figma", slug: "figma" },
      { name: "MapTiler", slug: "maptiler" },
      { name: "Qgis", slug: "qgis" },
    ],
    image: campusMap,
    url: "https://github.com/AllianceBioversityCIAT/alliance-campusmap",
  },
  {
    num: "02",
    category: "Personal",
    name: "ValleO2",
    desc: "Dashboard de clima y calidad del aire para Cali, con datos en tiempo real y visualizaciones interactivas.",
    bullets: [
      "Consumo de las APIs de Open-Meteo y OpenAQ para datos meteorológicos y de calidad del aire en tiempo real.",
      "Interfaz con estética de dashboard oscuro, construida con shadcn/ui y Tailwind CSS v4 sobre un proceso de diseño Figma.",
    ],
    stack: [
      { name: "React", slug: "react" },
      { name: "Git", slug: "git" },
      { name: "Postman", slug: "postman" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Shadcn/ui", slug: "shadcnui" },
    ],
    image: valleo2,
    url: "TU_URL_DE_VERCEL_AQUI",
  },
  {
    num: "03",
    category: "Investigación (Semillero PADIA)",
    name: "EndanSys",
    desc: "Sistema de monitoreo basado en inteligencia artificial para identificación y clasificación de especies en peligro de extinción en Colombia.",
    bullets: [
      "Aplicación de modelos de IA para clasificación de especies en riesgo, desarrollada como parte del semillero de investigación PADIA.",
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "Jupyter Notebook", slug: "jupyter" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Keras", slug: "keras" },
      { name: "Numpy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Scikit Learn", slug: "scikitlearn" },
    ],
    image: endansys,
    url: "https://github.com/NataliaGiraldoA/Endansys",
  },
  {
    num: "04",
    category: "Investigación (Semillero PADIA)",
    name: "GeoCluster",
    desc: "Herramienta de agrupamiento geográfico mediante aprendizaje automático no supervisado para clasificar zonas de riesgo sísmico en Sudamérica.",
    bullets: [
      "Modelo de clustering no supervisado aplicado a datos geográficos para identificar patrones de riesgo sísmico.",
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "Google Colab", slug: "googlecolab" },
      { name: "Numpy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Folium", slug: "folium" },
    ],
    image: geocluster,
    url: "https://github.com/jpbustamanteb026/GeoClusters",
  },
  {
    num: "05",
    category: "Personal",
    name: "Chatbot Climático por Voz",
    desc: "Sistema de interacción por voz con procesamiento de lenguaje natural, usando datos climáticos en tiempo real del Observatorio Ambiental de la Comuna 22.",
    bullets: [
      "Interacción por voz integrada con procesamiento de lenguaje natural para consultas climáticas.",
      "Datos en tiempo real desde el Observatorio Ambiental de la Comuna 22.",
    ],
    stack: [
      { name: "Python", slug: "python" },
      { name: "Make", slug: "make" },
      { name: "Telegram", slug: "telegram" },
    ],
    image: chatbotClimatico,
    url: "https://bibliotecadigital.usb.edu.co/server/api/core/bitstreams/1f393203-b609-4603-9f81-dbcc234f9d99/content",
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <section
      id="proyectos"
      ref={ref}
      className="relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: "var(--page-bg)" }}
    >
      <h2
        className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Proyectos
      </h2>

      <div>
        {PROJECTS.map((p, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          const range = [i / PROJECTS.length, 1];
          return (
            <ProjectCard
              key={p.num}
              project={p}
              index={i}
              progress={scrollYProgress}
              range={range as [number, number]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: ProjectCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className="h-[85vh] md:h-[80vh] sticky mb-[15vh] md:mb-[20vh]"
      style={{ top: `${80 + index * 24}px` }}
    >
      <motion.div
        style={{
          scale,
          background: "var(--page-bg)",
          borderColor: "var(--hairline)",
        }}
        className="rounded-4xl sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        {/* Header row */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:gap-4">
          <div className="flex items-start gap-3 sm:gap-6 min-w-0">
            <span
              className="font-black shrink-0"
              style={{
                color: "var(--page-fg)",
                fontSize: "clamp(2.25rem, 10vw, 140px)",
                lineHeight: 0.85,
              }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-2 min-w-0">
              <span
                className="uppercase tracking-widest font-light"
                style={{
                  color: "var(--page-fg)",
                  opacity: 0.6,
                  fontSize: "clamp(0.65rem, 1vw, 0.9rem)",
                }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight flex items-center gap-2"
                style={{
                  color: "var(--page-fg)",
                  fontSize: "clamp(1rem, 3vw, 2.5rem)",
                }}
              >
                {project.name}
                {project.highlighted && (
                  <Star
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-yellow-400 animate-pulse shrink-0"
                    strokeWidth={2}
                  />
                )}
              </h3>
            </div>
          </div>
          <div className="shrink-0 pt-1 sm:pt-2">
            {(project.url || (project as any).isBlocked) && (
              <LiveProjectButton
                url={project.url ?? undefined}
                isBlocked={(project as any).isBlocked}
              />
            )}
          </div>
        </div>

        {/* Body: desc left + image right (original proportions) */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-3 sm:gap-4 flex-1 min-h-0 overflow-hidden">
          {/* Description — col-span-2 on md */}
          <div className="md:col-span-2 flex-1 md:flex-auto flex flex-col min-h-0 py-2 sm:py-4 overflow-y-auto pr-2 custom-scrollbar">
            <p
              className="font-light leading-relaxed"
              style={{
                color: "var(--page-fg)",
                opacity: 0.8,
                fontSize: "clamp(0.9rem, 1.4vw, 1.15rem)",
                marginBottom: project.bullets ? "1rem" : "0",
              }}
            >
              {project.desc}
            </p>
            {project.bullets && (
              <ul className="flex flex-col gap-2.5">
                {project.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 font-light leading-relaxed"
                    style={{
                      color: "var(--page-fg)",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                    }}
                  >
                    <span className="mt-[0.55em] shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {project.stack && (
              <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
                {project.stack.map(
                  (tech: { name: string; slug: string; color?: string }) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        background:
                          "color-mix(in srgb, var(--page-fg) 5%, transparent)",
                        border:
                          "1px solid color-mix(in srgb, var(--page-fg) 10%, transparent)",
                      }}
                    >
                      <img
                        src={
                          tech.slug === "python"
                            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            : tech.color
                              ? `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`
                              : `https://cdn.simpleicons.org/${tech.slug}`
                        }
                        alt={tech.name}
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain`}
                        loading="lazy"
                      />
                      <span
                        className="text-xs sm:text-sm font-medium tracking-wide"
                        style={{ color: "var(--page-fg)", opacity: 0.8 }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Image — col-span-3 on md */}
          <div className="md:col-span-3 shrink-0 h-45 sm:h-55 md:h-auto min-h-0 mt-2 md:mt-0">
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full min-h-50 object-cover rounded-3xl sm:rounded-[40px] md:rounded-[60px]"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
