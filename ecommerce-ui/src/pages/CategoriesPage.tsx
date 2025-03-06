import { Link } from "react-router-dom";
import "./CategoriesPage.css";

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

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Product Categories</h1>
        <p>Browse our collection by category</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/products?category=${category.id}`}
            key={category.id}
            className="category-card"
          >
            <div className="category-image-container">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-overlay">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <span className="product-count">
                  {category.productCount} Products
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
