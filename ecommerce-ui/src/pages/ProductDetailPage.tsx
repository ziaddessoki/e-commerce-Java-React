import { useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import "./ProductDetailPage.css";

// Mock data - in a real app, this would come from an API
const product = {
  id: 1,
  name: "Wireless Headphones",
  price: 123.0,
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  rating: 4.5,
  reviews: 4,
  models: ["Model A", "Model B", "Model C"],
};

const similarProducts = [
  {
    id: 2,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    price: 199.99,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    price: 49.99,
  },
  {
    id: 4,
    name: "Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    price: 29.99,
  },
  {
    id: 5,
    name: "USB-C Hub",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    price: 39.99,
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedModel, setSelectedModel] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedModel) {
      alert("Please select a model");
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      description: product.description,
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-detail-page">
      <div className="product-main">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "selected" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-rating">
            <div className="stars">{renderStars(product.rating)}</div>
            <span className="review-count">{product.reviews} Reviews</span>
          </div>

          <div className="product-price">
            <span className="price">${product.price.toFixed(2)}</span>
          </div>

          <div className="product-model">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="model-select"
            >
              <option value="">Select Model</option>
              {product.models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <button className="favorite-btn">♡</button>
          </div>
        </div>
      </div>

      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="similar-products-grid">
          {similarProducts.map((product) => (
            <div key={product.id} className="similar-product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
