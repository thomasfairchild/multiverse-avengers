import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// anytime a component wraps around another component...its called
// as Higher Order Component

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();