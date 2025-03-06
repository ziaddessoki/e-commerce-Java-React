import ProductCard from "../components/ProductCard";
import useProductsStore from "../store/useProductsStore";

const HomePage = () => {
  const popularProducts = useProductsStore((state) =>
    state.getPopularProducts()
  );
  const suggestedProducts = useProductsStore((state) =>
    state.getSuggestedProducts()
  );

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
