import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.js';
import './DescriptionPage.css';

const DescriptionPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="description-page">
        <div className="container">
          <h1>Product not found</h1>
          <Link to="/" className="back-btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="description-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h1>B.planet</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h1 className="page-title">Plant Care Guide</h1>
        
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="care-sections">
            <section className="care-section">
              <h3>Description</h3>
              <p>{product.description}</p>
            </section>

            <section className="care-section">
              <h3>Water</h3>
              <p>Allow the soil to dry before watering</p>
            </section>

            <section className="care-section">
              <h3>Light</h3>
              <p>Bright indirect light environments</p>
            </section>

            <section className="care-section">
              <h3>Tips</h3>
              <p>Insert a toothpick to check soil moisture</p>
            </section>
          </div>

          <Link to="/" className="back-btn">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;