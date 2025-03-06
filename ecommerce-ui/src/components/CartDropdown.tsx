import useCartStore from "../store/useCartStore";
import "./CartDropdown.css";

const CartDropdown = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  if (getTotalItems() === 0) {
    return (
      <div className="cart-dropdown">
        <div className="cart-dropdown-empty">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown-header">
        <span>Cart Items ({getTotalItems()})</span>
      </div>
      <div className="cart-dropdown-items">
        {items.map((item) => (
          <div key={item.id} className="cart-dropdown-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            </div>
            <button
              className="remove-item-btn"
              onClick={() => removeItem(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="cart-dropdown-footer">
        <button className="view-cart-btn">View Cart</button>
      </div>
    </div>
  );
};

export default CartDropdown;
