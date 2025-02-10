import { HistoricalRegion, TimelinePeriod } from '../types';

export const historicalRegions: HistoricalRegion[] = [
  {
    id: 'oaxaca',
    name: 'Oaxaca',
    description: `Known as Mexico's culinary capital, Oaxaca's indigenous cultures have preserved ancient cooking techniques.`,
    imageUrl: 'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg',
    period: 'Pre-Hispanic to Present',
    dishes: ['Mole Negro', 'Tlayudas', 'Chapulines'],
    ingredients: ['Corn', 'Chocolate', 'Chilies'],
    culturalSignificance: 'Oaxacan cuisine represents the survival of pre-Hispanic cooking methods and ingredients.',
    videoUrl: 'https://www.youtube.com/embed/example1'
  },
  {
    id: 'yucatan',
    name: 'Yucatán',
    description: 'Maya civilization influence meets Caribbean and European elements.',
    imageUrl: 'https://images.pexels.com/photos/5737716/pexels-photo-5737716.jpeg',
    period: 'Maya Period to Present',
    dishes: ['Cochinita Pibil', 'Sopa de Lima', 'Panuchos'],
    ingredients: ['Achiote', 'Habanero', 'Sour Orange'],
    culturalSignificance: 'Yucatecan cuisine preserves ancient Maya cooking techniques like pib (underground cooking).',
    videoUrl: 'https://www.youtube.com/embed/example2'
  }
  // Add more regions as needed
];

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'ancient',
    era: 'Pre-Hispanic Period',
    year: '1200 BCE - 1521 CE',
    description: 'Development of fundamental cooking techniques and staple ingredients like corn, beans, and chilies.',
    imageUrl: 'https://example.com/ancient.jpg'
  },
  {
    id: 'colonial',
    era: 'Colonial Period',
    year: '1521 - 1821',
    description: 'Fusion of Indigenous and Spanish ingredients and techniques, birth of mestizo cuisine.',
    imageUrl: 'https://example.com/colonial.jpg'
  }
  // Add more periods as needed
];
