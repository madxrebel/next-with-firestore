// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-with-firestore-15166.firebaseapp.com",
  projectId: "next-with-firestore-15166",
  storageBucket: "next-with-firestore-15166.appspot.com",
  messagingSenderId: "897490400372",
  appId: process.env.FIREBASE_APP_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);