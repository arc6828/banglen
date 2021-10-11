import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdBGT8g9IderUm0xJzTVIGoOFHulPjv7g",
  authDomain: "weatherlineoa.firebaseapp.com",
  databaseURL: "https://weatherlineoa.firebaseio.com",
  projectId: "weatherlineoa",
  storageBucket: "weatherlineoa.appspot.com",
  messagingSenderId: "402308908386",
  appId: "1:402308908386:web:cc1870e08cd4717891183b",
  measurementId: "G-6D9R9CEV9T"
};

const fb = firebase.initializeApp(firebaseConfig);
export { fb };

