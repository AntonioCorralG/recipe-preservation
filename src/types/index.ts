export interface Recipe {
    title: string;
    imgUrl: string;
    description: string;
    ingredients: string[];
    instructions: string;
    source: string;
  }
  
  export interface ModalProps {
    showModal: boolean;
  }

  export interface HistoricalRegion {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    period: string;
    dishes: string[];
    ingredients: string[];
    culturalSignificance: string;
    videoUrl?: string;
  }
  
  export interface TimelinePeriod {
    id: string;
    era: string;
    year: string;
    description: string;
    imageUrl?: string;
  }
  

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
  tags: string[];
  excerpt: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
  region: string;
  artisan: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

