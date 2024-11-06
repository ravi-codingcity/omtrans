import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Import analytics

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYz1dyMnYLPKWQxhNctrI6QpJY_7ta3wY",
  authDomain: "omtrans-86bdc.firebaseapp.com",
  projectId: "omtrans-86bdc",
  storageBucket: "omtrans-86bdc.appspot.com",
  messagingSenderId: "360398082153",
  appId: "1:360398082153:web:9e36d27407063d219e52f8",
  measurementId: "G-W42TR6T7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Initialize Firestore

// Initialize Analytics
const analytics = getAnalytics(app); 

export { app, firestore, analytics };
