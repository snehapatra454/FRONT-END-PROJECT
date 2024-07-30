import React from 'react';
import '../css/Description.css';
import plantImage from '../assets/plant-image.jpg';
//import editIcon from '../assets/edit-icon.png';


const Description = () => {
  return (
    <div className="container">
      <header>
        <h1>B.planet</h1>
        <button className="contact-button">Contact us</button>
      </header>
      <main>
        <div className="content">
          <section className="text-content">
            <div className="tree-info">
              <h2>Tree 1</h2>
              <p>Three Leaf Clover, symbolizes good luck and fortune in many cultures.</p>
            </div>
            <div className="plant-care">
              <h3>Plant Care Guide</h3><hr></hr>
              <div className="care-item">
                <h4>Water</h4>
                <p>Allow the soil to dry out completely before watering.</p><hr></hr>
              </div>
              <div className="care-item">
                <h4>Light</h4>
                <p>Bright indirect light environments.</p><hr></hr>
              </div>
              <div className="care-item">
                <h4>Tips</h4>
                <p>Gently insert a toothpick into the soil to determine if your plant needs watering.</p>
              </div>
            </div>
            <div className="description"><hr></hr>
              <h3>Description</h3>
              <p>
                A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.
              </p>
              <p className="disclaimer">Plant images depicted are solely for illustration purposes only.</p>
            </div>
          </section>
          <aside className="image-container">
            <img src={plantImage} alt="Three Leaf Clover" className="plant-image"/>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Description;
