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
