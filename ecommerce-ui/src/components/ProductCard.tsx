import { Link } from "react-router-dom";
import "./ProductCard.css";
import useCartStore from "../store/useCartStore";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
}: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    addItem({
      id,
      name,
      price,
      image,
      description,
    });
  };

  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price.toFixed(2)}</div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
