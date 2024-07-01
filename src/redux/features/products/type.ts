interface Rating {
   stars: number;
   count: number;
}

export interface Product {
   id: string;
   image: string;
   name: string;
   rating: Rating;
   priceCents: number;
   keywords: string[];
   category: string;
}