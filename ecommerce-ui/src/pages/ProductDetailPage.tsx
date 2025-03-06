import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductsStore from "../store/useProductsStore";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedModel, setSelectedModel] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const product = useProductsStore((state) => state.getProductById(Number(id)));
  const similarProducts = useProductsStore((state) =>
    state.getSimilarProducts(Number(id))
  );

  if (!product) {
    return (
      <div className="product-detail-page">
        <h1>Product not found</h1>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedModel && product.models?.length) {
      alert("Please select a model");
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
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
            <img
              src={product.images?.[selectedImage] || product.image}
              alt={product.name}
            />
          </div>
          {product.images && (
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
          )}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          {product.rating && (
            <div className="product-rating">
              <div className="stars">{renderStars(product.rating)}</div>
              <span className="review-count">{product.reviews} Reviews</span>
            </div>
          )}

          <div className="product-price">
            <span className="price">${product.price.toFixed(2)}</span>
          </div>

          {product.models && (
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
          )}

          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <button className="favorite-btn">♡</button>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="similar-product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
