// index.js
import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/homepage";
//import "../src/css/styles.css";
//import './css/App.css';
//import App from "./components/description";
//import App from './App';
//import App from "./components/Loginpage";
//import App from "./components/ProfilePage";
//import App from "./components/ContactPage";
import App from "./components/admin_description";
import { BrowserRouter } from "react-router-dom";
import ContextComponent from "./components/RouteComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ''}>
      <ContextComponent />
    </BrowserRouter>
  </React.StrictMode>
);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/