import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

// Mock data for products
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Audio",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    description: "Feature-rich smartwatch with health tracking",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Durable and spacious laptop backpack",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse for comfortable use",
    category: "Accessories",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    description: "Multi-port USB-C hub for your devices",
    category: "Accessories",
  },
  {
    id: 6,
    name: "External SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description: "Fast and reliable external SSD storage",
    category: "Storage",
  },
];

const categories = ["All", "Audio", "Wearables", "Accessories", "Storage"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = allProducts.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>All Products</h1>
        <div className="products-filters">
          <div className="category-filter">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="sort-filter">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
