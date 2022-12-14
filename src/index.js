import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5EJHfMDmqhIdjKjAXjL39XRs8npQSa60",
  authDomain: "notesapp-ec076.firebaseapp.com",
  projectId: "notesapp-ec076",
  storageBucket: "notesapp-ec076.appspot.com",
  messagingSenderId: "21769921615",
  appId: "1:21769921615:web:c8cb2aa70d2920f29a363a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


