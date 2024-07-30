import React, { useState } from "react";
import "../css/styles.css";
import plantImage1 from "../assets/plant1.png"; // Adjust the import path as needed
import plantImage2 from "../assets/plant2.png"; // Adjust the import path as needed

// Import images
import tree1 from "../assets/image 1.png";
import tree2 from "../assets/image 2.png";
import tree3 from "../assets/image 3.png";
import tree4 from "../assets/image 4.png";
import tree5 from "../assets/image 5.png";
import tree6 from "../assets/image 6.png";
import tree7 from "../assets/image 7.png";
import tree8 from "../assets/image 8.png";
import tree9 from "../assets/image 9.png";
import tree10 from "../assets/image 10.png";
import tree11 from "../assets/image 11.png";
import tree12 from "../assets/image 12.png";
import tree13 from "../assets/image 13.png";
import tree14 from "../assets/image 14-1.png";
import tree20 from "../assets/image 14.png";
import tree15 from "../assets/image 15.png";
import tree16 from "../assets/image 16.png";
import tree17 from "../assets/image 17.png";
import tree18 from "../assets/image 18.png";
import tree19 from "../assets/image 19.png";

const products = [
  { id: 1, name: "Tree 1", image: tree1 },
  { id: 2, name: "Tree 1", image: tree2 },
  { id: 3, name: "Tree 1", image: tree3 },
  { id: 4, name: "Tree 1", image: tree4 },
  { id: 5, name: "Plant 1", image: tree5 },
  { id: 6, name: "Plant 2", image: tree6 },
  { id: 7, name: "Plant 3", image: tree7 },
  { id: 8, name: "Plant 4", image: tree8 },
  { id: 9, name: "Tray", image: tree9 },
  { id: 10, name: "Soil", image: tree10 },
  { id: 11, name: "Soil 2", image: tree11 },
  { id: 12, name: "Spade", image: tree12 },
  { id: 13, name: "Duck 1", image: tree13 },
  { id: 20, name: "Duck 2", image: tree20 },
  { id: 14, name: "Duck 3", image: tree14 },
  { id: 15, name: "Duck 4", image: tree15 },
  { id: 16, name: "Pot 1", image: tree16 },
  { id: 17, name: "Pot 2", image: tree17 },
  { id: 18, name: "Pot 3", image: tree18 },
  { id: 19, name: "Pot 4", image: tree19 },
  // Add more products as needed
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const renderProducts = () => {
    return currentItems.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
    ));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">B.planet</div>
        <div>
          <span className="contact">Contact us</span> |{" "}
          <span className="login">Login</span>
        </div>
      </header>
      <main>
        <div className="homepage-images">
        <h1>'As interesting as a plant'</h1>
          <div className="plant-image">
            <img src={plantImage1} alt="Plant 1" />
          </div>
          <div className="plant-image"><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <img src={plantImage2} alt="Plant 2" />
            
          </div>
        </div>
        <h1>Featured Product</h1>
        <div className="featured-product">{renderProducts()}</div>
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= products.length}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
