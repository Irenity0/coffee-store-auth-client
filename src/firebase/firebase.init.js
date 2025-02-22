// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYd1Ws_GmqiElays9aIl0QU1aZ7uRBnI4",
  authDomain: "coffee-store-176f2.firebaseapp.com",
  projectId: "coffee-store-176f2",
  storageBucket: "coffee-store-176f2.firebasestorage.app",
  messagingSenderId: "694670737143",
  appId: "1:694670737143:web:bb8f44faaefa2a5c3f1df2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);