import { Product, ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    id: 'cookware',
    name: 'Cookware',
    description: 'Traditional Mexican cooking utensils and pots'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    description: 'Handwoven kitchen textiles'
  },
  {
    id: 'ceramics',
    name: 'Ceramics',
    description: 'Artisanal plates, bowls, and serving dishes'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Comal Traditional',
    description: 'Hand-forged traditional comal for making tortillas and roasting chilies',
    price: 45.99,
    imageUrl: 'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg',
    category: 'cookware',
    inStock: true,
    region: 'Michoacán',
    artisan: 'Juan Morales'
  },
  {
    id: '2',
    name: 'Molcajete Set',
    description: 'Traditional volcanic stone mortar and pestle for making salsas',
    price: 65.00,
    imageUrl: 'https://images.pexels.com/photos/5737716/pexels-photo-5737716.jpeg',
    category: 'cookware',
    inStock: true,
    region: 'Jalisco',
    artisan: 'Maria Hernandez'
  },
  // Add more products as needed
];
