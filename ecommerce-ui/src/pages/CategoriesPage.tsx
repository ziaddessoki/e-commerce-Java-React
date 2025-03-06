import { Link } from "react-router-dom";
import useProductsStore from "../store/useProductsStore";
import "./CategoriesPage.css";

const CategoriesPage = () => {
  const categories = useProductsStore((state) => state.categories);

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Product Categories</h1>
        <p>Browse our collection by category</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/products?category=${category.name}`}
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
