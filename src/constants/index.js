import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Personalización",
    url: "#features",
  },
  {
    id: "1",
    title: "Haz tu prueba",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Precios",
    url: "#pricing",
  },
  
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const BeatsAIServices = [
  "Photo generating",
  "Photo enhance",
  "Integración perfecta",
];

export const BeatsAIServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Con automatización inteligente y seguridad de primera categoría, es la solución perfecta para los equipos que buscan trabajar de forma más inteligente.";

export const collabContent = [
  {
    id: "0",
    title: "Integración perfecta",
    text: collabText,
  },
  {
    id: "1",
    title: "Automatización inteligente",
  },
  {
    id: "2",
    title: "Seguridad de alto nivel",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 46,
    height: 44,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    "id": "0",
    "title": "Básico",
    "description": "Chatbot de IA, recomendaciones personalizadas",
    "price": "479",
    "features": [
      "Un chatbot de IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Capacidad para explorar la aplicación y sus características sin ningún costo"
    ]
  },
  {
    "id": "1",
    "title": "Premium",
    "description": "Chatbot de IA avanzado, soporte prioritario, panel de análisis",
    "price": "999",
    "features": [
      "Un chatbot de IA avanzado que puede entender consultas complejas",
      "Un panel de análisis para rastrear tus conversaciones",
      "Soporte prioritario para resolver problemas rápidamente"
    ]
  },
  {
    "id": "2",
    "title": "Enterprise",
    "description": "Chatbot de IA personalizado, análisis avanzados, cuenta dedicada",
    "price": null,
    "features": [
      "Un chatbot de IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Capacidad para explorar la aplicación y sus características sin ningún costo"
    ]
  }
  ,
];

export const benefits = [
  {
    id: "0",
    title: "Pregunta lo que sea",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mejora cada día",
    text: "Las aplicaciones utilizan el procesamiento del lenguaje natural para entender las consultas de los usuarios y ofrecer respuestas precisas y pertinentes.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Contacto sin límite",
    text: "Conéctese con el chatbot de IA desde cualquier lugar y dispositivo, haciéndolo más accesible y cómodo.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Respuesta rápida",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Pregunta lo que quieras",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Mejoramos tiempos de espera",
    text: "Mejora tus tiempos de espera con nuestra IA avanzada. ¡Rápido, eficiente y personalizado!",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
