import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating?: number;
  reviews?: number;
  models?: string[];
  images?: string[];
}

interface ProductsStore {
  products: Product[];
  categories: {
    id: string;
    name: string;
    description: string;
    image: string;
    productCount: number;
  }[];
  getProductById: (id: number) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
  getPopularProducts: () => Product[];
  getSuggestedProducts: () => Product[];
  getSimilarProducts: (productId: number) => Product[];
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Audio",
    rating: 4.5,
    reviews: 4,
    models: ["Model A", "Model B", "Model C"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    description: "Feature-rich smartwatch with health tracking",
    category: "Wearables",
    rating: 4.0,
    reviews: 12,
    models: ["Sport", "Classic", "Premium"],
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Durable and spacious laptop backpack",
    category: "Accessories",
    rating: 4.8,
    reviews: 8,
    models: ["15inch", "17inch"],
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse for comfortable use",
    category: "Accessories",
    rating: 4.2,
    reviews: 15,
    models: ["Black", "White", "Rose Gold"],
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    description: "Multi-port USB-C hub for your devices",
    category: "Accessories",
    rating: 4.6,
    reviews: 6,
    models: ["6-Port", "8-Port", "12-Port"],
  },
  {
    id: 6,
    name: "External SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description: "Fast and reliable external SSD storage",
    category: "Storage",
    rating: 4.7,
    reviews: 10,
    models: ["500GB", "1TB", "2TB"],
  },
];

const categories = [
  {
    id: "audio",
    name: "Audio",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=400&fit=crop",
    description: "High-quality audio devices and accessories",
    productCount: 12,
  },
  {
    id: "wearables",
    name: "Wearables",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=400&fit=crop",
    description: "Smart watches and fitness trackers",
    productCount: 8,
  },
  {
    id: "accessories",
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop",
    description: "Essential accessories for your devices",
    productCount: 15,
  },
  {
    id: "storage",
    name: "Storage",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=400&fit=crop",
    description: "External storage solutions",
    productCount: 6,
  },
];

const useProductsStore = create<ProductsStore>((set, get) => ({
  products: allProducts,
  categories: categories,

  getProductById: (id) => {
    return get().products.find((product) => product.id === id);
  },

  getProductsByCategory: (category) => {
    return category === "All"
      ? get().products
      : get().products.filter((product) => product.category === category);
  },

  getPopularProducts: () => {
    return get().products.slice(0, 3); // Return first 3 products as popular
  },

  getSuggestedProducts: () => {
    return get().products.slice(3, 6); // Return next 3 products as suggested
  },

  getSimilarProducts: (productId) => {
    const currentProduct = get().getProductById(productId);
    if (!currentProduct) return [];

    return get()
      .products.filter(
        (product) =>
          product.id !== productId &&
          product.category === currentProduct.category
      )
      .slice(0, 4); // Return up to 4 similar products
  },
}));

export default useProductsStore;
