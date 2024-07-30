import React from 'react';
import '../css/admin_description.css';
import plantImage from '../assets/plant-image.jpg';

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>B.planet</h1>
                <button>Contact us</button>
            </div>
            <h2>Description Page</h2>
            <form className="form-container">
                <div className="form-left">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Title" />
                        <input type="text" id="subtitle" placeholder="Sub title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guide1">Guide 1</label>
                        <input type="text" id="guide1" placeholder="Guide 1" />
                        <input type="text" id="description1" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guide2">Guide 2</label>
                        <input type="text" id="guide2" placeholder="Guide 2" />
                        <input type="text" id="description2" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guide3">Guide 3</label>
                        <input type="text" id="guide3" placeholder="Guide 3" />
                        <input type="text" id="description3" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Write your description here"></textarea>
                    </div>
                </div>
                <div className="form-right">
                    <img src={plantImage} alt="Plant" />
                </div>
            </form>
        </div>
    );
}

export default App;
