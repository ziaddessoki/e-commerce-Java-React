import { Link } from "react-router-dom";
import { useState } from "react";
import useCartStore from "../store/useCartStore";
import CartDropdown from "./CartDropdown";
import "./Header.css";

const Header = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          E-Commerce
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
          <div
            className="cart-container"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <Link to="/cart" className="nav-link cart-link">
              Cart
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>
            {showCart && <CartDropdown />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
