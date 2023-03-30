export interface Immobile {
  id: string;
  title: string;
  image: string;
  location: string;
  description: string;
  price: number;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  isFurnished: boolean;
}

export const immobileData = [
  {
    id: '1',
    title: 'Apartamento Skyline',
    image: '/apartament.jpg',
    location: 'São Paulo',
    description:
      'Com uma vista incrível para a cidade, este apartamento moderno oferece um espaço amplo e elegante, com acabamentos de alta qualidade. O apartamento conta com uma suíte master com closet, um segundo quarto, banheiro social, cozinha americana integrada a sala de estar e jantar, além de uma varanda com churrasqueira. O condomínio dispõe de área de lazer completa com piscina, academia e salão de festas.',
    price: 800000,
    squareMeters: 180,
    bedrooms: 2,
    bathrooms: 2,
    isFurnished: true,
  },
  {
    id: '2',
    title: 'Casa moderna',
    image: '/modern-house.jpg',
    location: 'Rio de Janeiro',
    description:
      'Com um design moderno e elegante, esta casa oferece um espaço amplo e sofisticado com acabamentos de alta qualidade. A casa possui uma suíte master com closet, dois quartos adicionais, banheiro social, cozinha integrada à sala de estar e jantar e uma área externa com churrasqueira. Além disso, a casa conta com uma área de lazer completa com piscina, academia e salão de festas para o conforto e diversão de toda a família.',
    price: 1200000,
    squareMeters: 350,
    bedrooms: 3,
    bathrooms: 2,
    isFurnished: true,
  },
  {
    id: '3',
    title: 'Loft urbano',
    image: '/loft.jpg',
    location: 'São Paulo',
    description:
      'Este loft urbano oferece um espaço moderno e sofisticado com acabamentos de alta qualidade. Com um design aberto e integrado, o loft possui uma ampla sala de estar e jantar, cozinha americana, quarto com closet e banheiro. Além disso, o prédio conta com uma área de lazer completa com piscina, academia e salão de festas para o conforto e diversão dos moradores.',
    price: 600000,
    squareMeters: 120,
    bedrooms: 2,
    bathrooms: 1,
    isFurnished: true,
  },
];
