// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzYJ78bM5Y9sx2vQz07AXYt-VXHKpNimM",
  authDomain: "entertaiment-events.firebaseapp.com",
  projectId: "entertaiment-events",
  storageBucket: "entertaiment-events.firebasestorage.app",
  messagingSenderId: "678878644907",
  appId: "1:678878644907:web:d3ededbf97713679b405ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);