import { BlogPost, BlogCategory } from '../types';

export const blogCategories: BlogCategory[] = [
  {
    id: 'recipes',
    name: 'Recipes',
    description: 'Traditional and modern Mexican recipes'
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Mexican food culture and traditions'
  },
  {
    id: 'techniques',
    name: 'Techniques',
    description: 'Cooking techniques and tips'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Making Traditional Tortillas',
    author: 'Maria Rodriguez',
    date: '2024-02-15',
    content: `Making tortillas is an art form passed down through generations in Mexican families. 
    The process begins with nixtamalization, a technique that has been used since ancient times...`,
    imageUrl: 'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg',
    tags: ['techniques', 'traditional', 'basics'],
    excerpt: 'Discover the ancient art of making traditional Mexican tortillas from scratch.'
  },
  {
    id: '2',
    title: 'Regional Variations of Mole Sauce',
    author: 'Carlos Sanchez',
    date: '2024-02-10',
    content: `Mole, the complex sauce that's considered Mexico's national dish, varies significantly 
    by region. From Puebla's sweet and spicy mole poblano to Oaxaca's rich black mole...`,
    imageUrl: 'https://images.pexels.com/photos/5737716/pexels-photo-5737716.jpeg',
    tags: ['recipes', 'traditional', 'sauces'],
    excerpt: 'Explore the diverse world of Mexican mole sauces across different regions.'
  },
  // Add more blog posts as needed
];
