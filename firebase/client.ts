

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejsqOj_cXNX5VWhsHz9Az4DeEOy2VaVY",
  authDomain: "prepwise-4dfd1.firebaseapp.com",
  projectId: "prepwise-4dfd1",
  storageBucket: "prepwise-4dfd1.firebasestorage.app",
  messagingSenderId: "928901300009",
  appId: "1:928901300009:web:9ebf5ceb9b78c5beca0138",
  measurementId: "G-3P0YC71W3X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);