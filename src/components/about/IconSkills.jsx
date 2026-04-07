export const skillsGroups = [
  {
    titulo: "Frontend",
    iconos: [
      {
        ruta: "/assets/skills/html.svg",
        nombre: "Html",
        descripcion: "Lenguaje de marcado semántico para estructura y accesibilidad en aplicaciones web modernas",
      },
      {
        ruta: "/assets/skills/css3.svg",
        nombre: "CSS3",
        descripcion: "Estilos avanzados con flexbox, grid y animaciones para UI/UX responsive",
      },
      {
        ruta: "/assets/skills/bootstrap.svg",
        nombre: "Bootstrap",
        descripcion: "Framework CSS con sistema de componentes predefinidos para desarrollo rápido",
      },
      {
        ruta: "/assets/skills/tailwindcss.svg",
        nombre: "Tailwindcss",
        descripcion: "Utilidades CSS utilitarias para diseño moderno y escalable con enfoque mobile-first",
      },
      {
        ruta: "/assets/skills/javascript.svg",
        nombre: "Javascript",
        descripcion: "Lenguaje de programación para lógica del lado cliente e interactividad dinámica",
      },
      {
        ruta: "/assets/skills/typescript.svg",
        nombre: "Typescript",
        descripcion: "Superset tipado de JavaScript para código más robusto y mantenible en grandes aplicaciones",
      },
    ],
  },
  {
    titulo: "Frameworks & Librerías",
    iconos: [
      {
        ruta: "/assets/skills/react.svg",
        nombre: "React",
        descripcion: "Librería de componentes reutilizables con state management y virtual DOM",
      },
      {
        ruta: "/assets/skills/nextjs.svg",
        nombre: "NextJS",
        descripcion: "Framework full-stack con SSR, optimización y routing automático de páginas",
      },
      {
        ruta: "/assets/skills/angular.svg",
        nombre: "Angular",
        descripcion: "Framework completo con arquitectura MVC, inyección de dependencias y RxJS",
      },
      {
        ruta: "/assets/skills/inertiajs.svg",
        nombre: "InertiaJS",
        descripcion: "Patrón arquitectónico para conectar frontend y backend sin API REST tradicional",
      },
    ],
  },
  {
    titulo: "Backend",
    iconos: [
      {
        ruta: "/assets/skills/cs.svg",
        nombre: "C#",
        descripcion: "Lenguaje orientado a objetos con tipado fuerte para aplicaciones empresariales",
      },
      {
        ruta: "/assets/skills/php.svg",
        nombre: "PHP",
        descripcion: "Lenguaje server-side con sintaxis simple para desarrollo web dinámico y escalable",
      },
      {
        ruta: "/assets/skills/.net.svg",
        nombre: ".NET",
        descripcion: "Plataforma Microsoft para construir aplicaciones web, desktop y servicios cloud-native",
      },
      {
        ruta: "/assets/skills/laravel.svg",
        nombre: "Laravel",
        descripcion: "Framework PHP con arquitectura MVC, ORM Eloquent y herramientas de desarrollo",
      },
    ],
  },
  {
    titulo: "Bases de Datos",
    iconos: [
      {
        ruta: "/assets/skills/mysql.svg",
        nombre: "MySQL",
        descripcion: "SGDR relacional con transacciones ACID y optimización de consultas SQL",
      },
      {
        ruta: "/assets/skills/postgresql.svg",
        nombre: "Postgresql",
        descripcion: "SGDR avanzado con soporte JSON, extensiones y triggers para datos complejos",
      },
      {
        ruta: "/assets/skills/firebase.svg",
        nombre: "Firebase",
        descripcion: "Base de datos NoSQL en tiempo real con sincronización automática y escalabilidad",
      },
    ],
  },
  {
    titulo: "Herramientas & Diseño",
    iconos: [
      {
        ruta: "/assets/skills/git.svg",
        nombre: "Git",
        descripcion: "Sistema de control de versiones distribuido para gestión de código colaborativo",
      },
      {
        ruta: "/assets/skills/docker.svg",
        nombre: "Docker",
        descripcion: "Containerización de aplicaciones para entornos consistentes y deployment simplificado",
      },
      {
        ruta: "/assets/skills/postman.svg",
        nombre: "Postman",
        descripcion: "Testing y documentación de APIs REST con automatización de tests y monitoreo",
      },
      {
        ruta: "/assets/skills/figma.svg",
        nombre: "Figma",
        descripcion: "Diseño UI/UX colaborativo con prototipos interactivos y design system consistency",
      },
      {
        ruta: "/assets/skills/excel.svg",
        nombre: "Excel",
        descripcion: "Análisis de datos con fórmulas avanzadas, tablas dinámicas y visualización",
      },
      {
        ruta: "/assets/skills/trello.svg",
        nombre: "Trello",
        descripcion: "Gestión ágil de proyectos con Kanban boards y seguimiento de tareas colaborativo",
      },
      {
        ruta: "/assets/skills/notion.svg",
        nombre: "Notion",
        descripcion: "Gestión integral de documentación, conocimiento y organización de equipo",
      },
    ],
  },
];

// Para compatibilidad con código anterior si lo necesitas
export const iconSkill = skillsGroups.flatMap((group) => group.iconos);