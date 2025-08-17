import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setRole } = useRole();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    
    if (email === 'admin@bplanet.com' && password === 'password') {
      console.log('Login successful, setting role to admin');
      setRole('admin');
      setError('');
      navigate('/admin/featured');
    } else {
      console.log('Login failed');
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <h1 className="admin-login-title">Admin Login - Welcome back !!</h1>
        
        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="button" className="forgot-password">Forget Password?</button>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-btn">Login</button>
          
          <p className="admin-note">For administrator access only</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;