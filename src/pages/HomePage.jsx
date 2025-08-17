import React, { useState } from 'react';
import { products } from '../data/products.js';
import { useRole } from '../context/RoleContext';
import './HomePage.css';
import hero1 from '../assets/plant1.png';
import hero2 from '../assets/plant2.png';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const { role } = useRole();

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h1>B.planet</h1>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-images">
            <img src={hero1} alt="Plant 1" className="hero-image" />
            <img src={hero2} alt="Plant 2" className="hero-image" />
          </div>
          <h1 className="hero-tagline">'As interesting as a plant'</h1>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <button className="view-btn" onClick={() => {
                  if (role === 'admin') {
                    window.location.href = `/admin/guide?product=${product.id}`;
                  } else {
                    window.location.href = `/description/${product.id}`;
                  }
                }}>View</button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button 
            className="pagination-btn" 
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;