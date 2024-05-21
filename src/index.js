import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import 'animate.css';
// import { useFlutterwave } from "flutterwave-react-v3";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// or less ideally


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Button />
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
