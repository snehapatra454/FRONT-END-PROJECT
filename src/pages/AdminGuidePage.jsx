import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import { products } from '../data/products';
import { useGuide } from '../context/GuideContext';
import './AdminGuidePage.css';

const AdminGuidePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { guide, setGuide } = useGuide();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: guide.title || '',
    subtitle: guide.subtitle || '',
    description: guide.description || ''
  });
  const [editingField, setEditingField] = useState(null);
  const [guides, setGuides] = useState([
    { id: 1, title: 'Guide 1', description: 'Write your description here', isEditing: false },
    { id: 2, title: 'Guide 2', description: 'Write your description here', isEditing: false },
    { id: 3, title: 'Guide 3', description: 'Write your description here', isEditing: false }
  ]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('product');
    console.log('Product ID from URL:', productId);
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      console.log('Found product:', product);
      setSelectedProduct(product);
    }
  }, [location]);

  const handleFieldEdit = (field) => {
    setEditingField(editingField === field ? null : field);
  };

  const handleEdit = (id) => {
    setGuides(guides.map(guide => 
      guide.id === id ? { ...guide, isEditing: !guide.isEditing } : guide
    ));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveGuide = () => {
    setGuide(formData);
    alert('Guide saved successfully!');
  };

  const handleBack = () => {
    navigate('/admin/featured');
  };

  const handleSave = (id, newDescription) => {
    setGuides(guides.map(guide => 
      guide.id === id ? { ...guide, description: newDescription, isEditing: false } : guide
    ));
  };

  return (
    <div className="admin-guide-page">
      <NavBarAdmin />
      <div className="admin-container">
        <h1 className="admin-page-title">Guide</h1>
        
        
        <div className="guide-content">
          <div className="guide-sections">
            <div className="guide-section">
              <div className="guide-header">
                <h3>Title</h3>
                <button 
                  onClick={() => handleFieldEdit('title')}
                  className="edit-btn"
                >
                  {editingField === 'title' ? 'Cancel' : 'Edit'}
                </button>
              </div>
              {editingField === 'title' ? (
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter guide title"
                />
              ) : (
                <p>{formData.title || 'No title set'}</p>
              )}
            </div>
            
            <div className="guide-section">
              <div className="guide-header">
                <h3>Subtitle</h3>
                <button 
                  onClick={() => handleFieldEdit('subtitle')}
                  className="edit-btn"
                >
                  {editingField === 'subtitle' ? 'Cancel' : 'Edit'}
                </button>
              </div>
              {editingField === 'subtitle' ? (
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  placeholder="Enter guide subtitle"
                />
              ) : (
                <p>{formData.subtitle || 'No subtitle set'}</p>
              )}
            </div>
            
            <div className="guide-section">
              <div className="guide-header">
                <h3>Description</h3>
                <button 
                  onClick={() => handleFieldEdit('description')}
                  className="edit-btn"
                >
                  {editingField === 'description' ? 'Cancel' : 'Edit'}
                </button>
              </div>
              {editingField === 'description' ? (
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter guide description"
                  rows="8"
                ></textarea>
              ) : (
                <p>{formData.description || 'No description set'}</p>
              )}
            </div>
            
            {guides.map((guide) => (
              <div key={guide.id} className="guide-section">
                <div className="guide-header">
                  <h3>{guide.title}</h3>
                  <button 
                    onClick={() => handleEdit(guide.id)}
                    className="edit-btn"
                  >
                    {guide.isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                {guide.isEditing ? (
                  <div className="edit-form">
                    <textarea 
                      defaultValue={guide.description}
                      className="edit-textarea"
                      id={`textarea-${guide.id}`}
                    />
                    <button 
                      onClick={() => {
                        const newDescription = document.getElementById(`textarea-${guide.id}`).value;
                        handleSave(guide.id, newDescription);
                      }}
                      className="edit-save-btn"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <p>{guide.description}</p>
                )}
              </div>
            ))}
            
            <div className="button-group">
              <button onClick={handleBack} className="back-btn">Back</button>
              <button onClick={handleSaveGuide} className="save-btn">Save</button>
            </div>
          </div>
          
          <div className="guide-image">
            {selectedProduct ? (
              <div className="product-guide-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h4>{selectedProduct.name}</h4>
                <p>{selectedProduct.description}</p>
                <p>Debug: Product loaded - {selectedProduct.name}</p>
              </div>
            ) : (
              <div className="placeholder-image">Guide Image - No Product Selected</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGuidePage;