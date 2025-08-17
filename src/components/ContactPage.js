import React from 'react';


const ContactPage = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>B.planet</h1>
      </header>
      <main className="contact-main">
        <h2 className="contact-title">Contact us</h2>
        <div className="contact-box">
          <div className="contact-info">
            <h3>Stay Updated</h3>
            <p>Need to get in touch with us?</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="separator"></div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Swagat Beaura" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Swagatb123@gmail.com" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="I found your site well informed" required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
