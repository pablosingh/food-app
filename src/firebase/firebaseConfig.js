// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// npm install -g firebase-tools Para alojar firebase hostting

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTex3J10HiQAsZC8hls8HYjn1NSM9wK6U",
  authDomain: "ps-food-app.firebaseapp.com",
  projectId: "ps-food-app",
  storageBucket: "ps-food-app.appspot.com",
  messagingSenderId: "721892218623",
  appId: "1:721892218623:web:6bfff974d52d909ec51eca",
  measurementId: "G-4P7VNMCD8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);