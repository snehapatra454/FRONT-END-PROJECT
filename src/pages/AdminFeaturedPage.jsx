import React, { useState } from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import { products } from '../data/products';
import './AdminFeaturedPage.css';

const AdminFeaturedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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
    <div className="admin-featured-page">
      <NavBarAdmin />
      <div className="admin-container">
        <h1 className="admin-page-title">Featured Product</h1>
        
        <div className="admin-product-grid">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="admin-product-card"
              onClick={() => window.location.href = `/admin/guide?product=${product.id}`}
            >
              <div className="admin-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="admin-product-name">{product.name}</h3>
              <p className="admin-product-description">{product.description}</p>
            </div>
          ))}
        </div>
        
        <div className="admin-pagination">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminFeaturedPage;