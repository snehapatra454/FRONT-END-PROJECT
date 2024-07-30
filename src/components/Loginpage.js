import React from 'react';
import '../css/Login.css';
import plantImage from '../assets/Login in page image.png'; // Ensure the image is in the correct path

const Loginpage = () => {
  return (
    <div className="login-container">
      <header className="header">
        <h1>B.planet</h1>
        <button className="contact-button">Contact us</button>
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
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="rahulkumar@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="*************" required />
                <a href="#" className="forgot-password">Forget Password?</a>
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
            <div className="signup-link">
              <p>Don't have an account yet? <a href="#">Sign up for free</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loginpage;
