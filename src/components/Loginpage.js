import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

import plantImage from '../assets/Login in page image.png'; // Ensure the image is in the correct path

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const { setRole } = useRole();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.endsWith('@admin.com')) {
      setRole('admin');
      navigate('/admin/featured');
    } else {
      setRole('customer');
      navigate('/profile');
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <h1>B.planet</h1>
        <button className="contact-button" onClick={() => window.location.href = '/contact'}>Contact us</button>
      </header>
      <main className="login-main">
        <h2 className="login-title">Login</h2>
        <div className="login-box">
          <div className="login-image">
            <img src={plantImage} alt="Plant" />
          </div>
          <div className="separator"></div>
          <div className="login-form">
            <h3>Welcome back !!</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="abc@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="************************" required />
                <button type="button" className="forgot-password">Forget Password?</button>
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <div className="signup-link">
              <p>Don't have an account yet? <button type="button" className="signup-link-btn">Sign up for free</button></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loginpage;
