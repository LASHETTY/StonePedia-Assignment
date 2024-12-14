import React from 'react';
import '../styles/Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Granite',
      description: 'Premium quality granite stones for flooring and countertops',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80'
    },
    {
      id: 2,
      name: 'Marble',
      description: 'Luxurious marble varieties for elegant interior designs',
      image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=500&q=80'
    },
    {
      id: 3,
      name: 'Sandstone',
      description: 'Natural sandstone perfect for outdoor applications',
      image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=500&q=80'
    },
    {
      id: 4,
      name: 'Limestone',
      description: 'Durable limestone for both interior and exterior use',
      image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=500&q=80'
    }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Discover our wide range of premium natural stones</p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
