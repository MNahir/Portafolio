//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMail,
  FiMapPin,
  FiLink,
} from "react-icons/fi";


// projects images
import GameFindeX from "./assets/img/projects/videogames.jpg";
import movi from "./assets/img/projects/finderservice.jpg";
import portfolio from "./assets/img/projects/portfolio.jpg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/tailwind.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg10 from "./assets/img/skills/nextjs.png";
import SkillImg11 from "./assets/img/skills/redux.png";
import SkillImg12 from "./assets/img/skills/postgress.png";
import SkillImg13 from "./assets/img/skills/mongodb.png";
import SkillImg14 from "./assets/img/skills/sequelize.png";
import SkillImg16 from "./assets/img/skills/github.png";
import SkillImg17 from "./assets/img/skills/express.png";
import SkillImg18 from "./assets/img/skills/githubdesktop.png";
import SkillImg19 from "./assets/img/skills/visual.png";
import SkillImg20 from "./assets/img/skills/photo.png";


// navigation
export const navigation = [
  {
    name: "Inicio",
    href: "home",
  },
  {
    name: "Acerca de mí",
    href: "about",
  },
  {
    name: "habilidades",
    href: "skills",
  },
  {
    name: "proyectos",
    href: "portfolio",
  },
  {
    name: "contacto",
    href: "contact",
  },
  
];

// social
export const social = [
  {
    name: "Linkedin",
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/nahir-maresca-63b028251/",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/MNahir",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    href: "https://www.instagram.com/marescanahir/",
  },
];


// projects
export const projectsData = [
  {
    id: "1",
    image: movi,
    name: "Finder Service",
    category: "grupal",
    description:
      "Finder Service es una plataforma digital que conecta a los usuarios empleadores con profesionales, especializados en solucionar problemas domésticos; y viceversa. Cuenta con una amplia red de especialistas en áreas como limpieza, fontanería y jardinería, lo que permite a los usuarios encontrar fácilmente expertos cualificados en su área, al ingresar la dirección. Además de facilitar la búsqueda, ofrecemos funciones como valoración de trabajos, pasarela de pagos y autenticación por terceros. También brinda la posibilidad a los profesionales de postularse para diferentes empleos. Utilizando tecnologías de desarrollo web avanzadas para brindar a nuestros consumidores una experiencia fluida y segura.",
    href: "https://www.youtube.com/watch?v=EicCl16HXMM&ab_channel=Radish",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/FinderService/FinderService",
      },
      {
        icon: <FiLink />,
        href: "https://finder-service-bice.vercel.app/",
      },
    ],
  },
  {
    id: "2",
    image: GameFindeX,
    name: "Video Games",
    category: "individual",
    description:
      "Creación de una SPA que integra los conocimientos adquiridos en el Bootcamp de Henry. La aplicación interactúa con una API externa para ofrecer funcionalidades como búsqueda de juegos, paginación, detalles de cada juego y filtros combinados con ordenamiento. Además, permite agregar juegos a una lista personalizada.",
    href: "https://pi-videogames-delta-nine.vercel.app/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/MNahir/PI-Videogames",
      },
      {
        icon: <FiLink />,
        href: "https://pi-videogames-delta-nine.vercel.app",
      },
    ],
  },
 
  {
    id: "4",
    image: portfolio,
    name: "Mi portfolio",
    category: "Personal",
    description:
    "Este mismo 💕",
    href: "https://portafolio-phi-silk.vercel.app/",
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/MNahir/Portafolio",
      },
      {
        icon: <FiLink />,
        href: "https://portafolio-phi-silk.vercel.app/",
      },
    ],
  },

];

// projects
export const projectsNav = [
  {
    name: "todos",
  },
  {
    name: "grupal",
  },
  {
    name: "individual",
  },
  {
    name: "personal",
  },
];

// skill
export const skillsFront = [
  {
    image: SkillImg1,
    name: "HTML",
    type: "front",
    href: "https://html.spec.whatwg.org/multipage/"
  },
  {
    image: SkillImg2,
    name: "CSS",
    type: "front",
    href: "https://www.w3schools.com/css/"
  },
  {
    image: SkillImg4,
    name: "React",
    type: "front",
    href: "https://es.reactjs.org/"
  },
  {
    image: SkillImg11,
    name: "Redux",
    type: "front",
    href: "https://redux.js.org/"
  },
  {
    image: SkillImg10,
    name: "Next JS",
    type: "front",
    href: "https://nextjs.org/"
  },
  
  {
    image: SkillImg5,
    name: "TailwindCSS",
    type: "front",
    href: "https://tailwindcss.com/"
  },
   
  {
    image: SkillImg8,
    name: "Figma",
    type: "front",
    href: "https://www.figma.com/"
  },
];

export const skillsBack = [
  {
    image: SkillImg6,
    name: "Node JS",
    type: "back",
    href: "https://nodejs.org/en"
  },
  {
    image: SkillImg14,
    name: "Sequelize",
    type: "back",
    href: "https://sequelize.org/"
  },
  {
    image: SkillImg17,
    name: "Express",
    type: "back",
    href: "https://expressjs.com/es/"
  },
  {
    image: SkillImg12,
    name: "PostgreSQL",
    type: "back",
    href: "https://www.postgresql.org/"
  },
  {
    image: SkillImg13,
    name: "MongoDB",
    type: "back",
    href: "https://www.mongodb.com/es"
  },

];

export const skillsOther = [
  {
    image: SkillImg3,
    name: "JavaScript",
    type: "other",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    image: SkillImg7,
    name: "Git",
    type: "other",
    href: "https://git-scm.com/"
  },
  {
    image: SkillImg16,
    name: "GitHub",
    type: "other",
    href: "https://github.com/"
  },
  {
    image: SkillImg19,
    name: "VSCode",
    type: "other",
    href: "https://code.visualstudio.com/"
  },
  {
    image: SkillImg18,
    name: "GitDesktop",
    type: "other",
    href: "https://desktop.github.com/"
  },
  {
    image: SkillImg20,
    name: "Photoshop",
    type: "other",
    href: "https://www.adobe.com/ar/products/photoshop.html"
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "¿Te interesa hacerme una consulta?",
    description: "Puedes enviarme un email a marescanahir18@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Ubicación actual",
    subtitle: "Tandil, Buenos Aires, Argentina",
    description: "Trabajo remoto",
  },
];