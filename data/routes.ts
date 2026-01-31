export interface Route {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: 'Bajo' | 'Medio' | 'Alto';
  image: string;
  tags: string[];
}

export const routes: Route[] = [
  {
    id: 'kayak-sinu',
    title: 'Descenso en Kayak por el Río Sinú',
    description: 'Aventura y adrenalina recorriendo el río Sinú desde la hidroeléctrica URRÁ.',
    fullDescription: 'Una experiencia de turismo de aventura que combina adrenalina, naturaleza y relatos de paz. El recorrido inicia en la hidroeléctrica de URRÁ y se desarrolla a lo largo del río Sinú, permitiendo al visitante vivir el territorio desde el agua, atravesando paisajes naturales y comunidades ribereñas.',
    duration: '6 a 8 horas',
    level: 'Medio',
    image: '/images/kayak.jpg',
    tags: ['Aventura', 'Agua', 'Naturaleza']
  },
  {
    id: 'embera-katio',
    title: 'Herencia de la Montaña – Emberá Katío',
    description: 'Encuentro cultural y senderismo hacia el Saltillo de Tuis Tuis.',
    fullDescription: 'La Ruta Herencia de la Montaña es una experiencia de turismo comunitario y cultural. A través de un recorrido guiado y un senderismo aproximado de cuatro kilómetros hacia el Saltillo de Tuis Tuis, el visitante conoce la cosmovisión indígena, sus tradiciones, danzas y saberes ancestrales.',
    duration: '6 a 8 horas',
    level: 'Medio',
    image: '/images/selva.jpg',
    tags: ['Cultura', 'Senderismo', 'Comunidad']
  },
  {
    id: 'ruta-embalse',
    title: 'Ruta del Embalse',
    description: 'Recorrido fluvial por la Ruta Dulce, Isla Sonora e Isla del Encanto.',
    fullDescription: 'La Ruta del Embalse es una experiencia fluvial y comunitaria que recorre tres puntos representativos del territorio: la Ruta Dulce de la Caña, la Isla Sonora y la Isla del Encanto. Vive una experiencia gastronómica tradicional donde la cocina se mantiene viva a través de prácticas heredadas.',
    duration: '6 a 7 horas',
    level: 'Bajo',
    image: '/images/urra.jpg', // Embalse/Lago
    tags: ['Fluvial', 'Gastronomía', 'Relax']
  },
  {
    id: 'conociendo-tierralta',
    title: 'Conociendo Tierralta',
    description: 'Agua, energía y territorio. Visita museos, parques y la hidroeléctrica.',
    fullDescription: 'Esta ruta invita al visitante a comprender la relación entre el agua, la energía y el desarrollo del territorio. Incluye la visita a la Ronda del Sinú, el Museo Arqueológico Zenú, el embalse de URRÁ y la Estación Ecológica Las Guartinajas.',
    duration: '6 a 7 horas',
    level: 'Bajo',
    image: '/images/tierralta.jpg', // Río y cultura
    tags: ['Educativo', 'Cultura', 'Historia']
  },
  {
    id: 'ruta-gastronomica',
    title: 'Ruta Gastronómica',
    description: 'La cocina de Wendy: fusión de tradición del Alto Sinú y modernidad.',
    fullDescription: 'La Ruta Gastronómica es una experiencia que fusiona la cocina tradicional del Alto Sinú con propuestas de gastronomía moderna. El visitante vive un recorrido de sabores que refleja la identidad cultural del territorio, conociendo historias y procesos.',
    duration: '4 a 6 horas',
    level: 'Bajo',
    image: '/images/comida.jpg', // Comida tradicional
    tags: ['Gastronomía', 'Cultura']
  },
  {
    id: 'parque-ecoturistico',
    title: 'Parque Ecoturístico',
    description: 'Naturaleza y aventura suave entre Las Guartinajas y Ecolagos.',
    fullDescription: 'Una experiencia que combina naturaleza, aventura suave y descanso. Se desarrolla integrando recorridos en bicicleta todo terreno, senderismo ecológico y espacios de recreación en el agua, permitiendo al visitante disfrutar la experiencia a su propio ritmo.',
    duration: '5 a 7 horas',
    level: 'Bajo',
    image: '/images/ecolagos.jpg', // Bicicleta en naturaleza
    tags: ['Naturaleza', 'Bicicleta', 'Familia']
  },
  {
    id: 'ruta-cacao',
    title: 'Ruta del Cacao',
    description: 'Experiencia sensorial: del cultivo a la chocolatina en fincas locales.',
    fullDescription: 'Una experiencia sensorial que invita a conocer fincas cacaoteras. Observa las mazorcas, escucha historias de transformación y paz, degusta bebidas tradicionales, participa en el tostado del grano y elabora tu propio chocolate.',
    duration: '5 a 6 horas',
    level: 'Bajo',
    image: '/images/cacao.jpg', // Cacao
    tags: ['Agroturismo', 'Gastronomía', 'Paz']
  },
  {
    id: 'mundo-abejas',
    title: 'Un día en el mundo de las abejas',
    description: 'Visita al apiario, seguridad y degustación de miel fresca.',
    fullDescription: 'Acércate de forma segura al fascinante universo de las abejas. Acompañado por Asoagromiel, utiliza indumentaria de seguridad, visita el apiario y degusta miel directamente del panal.',
    duration: '4 a 6 horas',
    level: 'Bajo',
    image: '/images/abejas.jpg', // Abejas/Miel
    tags: ['Agroturismo', 'Naturaleza']
  }
];