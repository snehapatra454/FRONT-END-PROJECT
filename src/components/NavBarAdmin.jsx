import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import './NavBarAdmin.css';

const NavBarAdmin = () => {
  const { role, setRole } = useRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate('/admin/login');
  };

  if (role !== 'admin') return null;

  return (
    <nav className="admin-navbar">
      <div className="admin-nav-container">
        <div className="admin-nav-logo">
          <h1>B.planet Admin</h1>
        </div>
        <ul className="admin-nav-links">
          <li><Link to="/admin/featured">Featured</Link></li>
          <li><Link to="/admin/guide">Guide</Link></li>
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/contact">Contact</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarAdmin;