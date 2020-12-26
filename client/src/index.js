import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
// import firebase from "firebase/app";
// import "firebase/auth";

// const config = {
//       apiKey: "AIzaSyCi47Tf4at14D8XUBvUgkEBqz9asusr1vE",
//       authDomain: "ecommerce-5a933.firebaseapp.com",
//       projectId: "ecommerce-5a933",
//       storageBucket: "ecommerce-5a933.appspot.com",
//       messagingSenderId: "418241998625",
//       appId: "1:418241998625:web:f382c99d1be11eb0779860"
//     };
//     // Initialize Firebase
//     if (!firebase.apps.length) {
//       firebase.initializeApp(config);
      
//           }

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 // </React.StrictMode>
 ,
  document.getElementById('root')
);
