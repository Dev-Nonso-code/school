import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import { configureStore } from "@reduxjs/toolkit"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
// import Button from 'react-bootstrap/Button';
import 'animate.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { inject } from '@vercel/analytics';
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
// import counterReducer from "./redux/counter"


// let store = configureStore({
//   reducer: {count:counterReducer}
// })

inject()
// import { useFlutterwave } from "flutterwave-react-v3";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// or less ideally


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SpeedInsights />
        {/* <Button /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
