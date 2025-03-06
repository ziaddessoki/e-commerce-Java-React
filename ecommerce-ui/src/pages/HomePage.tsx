import ProductCard from "../components/ProductCard";

// Temporary mock data
const popularProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
    description: "Feature-rich smartwatch with health tracking",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Durable and spacious laptop backpack",
  },
];

const suggestedProducts = [
  {
    id: 4,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description: "Ergonomic wireless mouse for comfortable use",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    description: "Multi-port USB-C hub for your devices",
  },
  {
    id: 6,
    name: "External SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    description: "Fast and reliable external SSD storage",
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing products at great prices</p>
      </section>

      <section className="products-section">
        <h2>Most Popular Products</h2>
        <div className="products-grid">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="products-section">
        <h2>Suggested for You</h2>
        <div className="products-grid">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
