import React, { useState } from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import './AdminProfilePage.css';

const AdminProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Admin',
    email: 'admin@bplanet.com',
    password: '********',
    phone: '+1 234 567 8900',
    address: '123 Admin Street',
    state: 'California',
    zipCode: '90210'
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="admin-profile-page">
      <NavBarAdmin />
      <div className="admin-container">
        <h1 className="admin-page-title">Profile</h1>
        
        <div className="profile-content">
          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={profile.state}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={profile.zipCode}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>
            
            <button onClick={handleEdit} className="edit-btn">
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
          
          <div className="about-section">
            <h3>About Us</h3>
            <p>B.planet is dedicated to bringing nature closer to you through our carefully curated collection of plants and gardening accessories.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;