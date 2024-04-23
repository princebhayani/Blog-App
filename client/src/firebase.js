// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-mern-854fd.firebaseapp.com",
  projectId: "blog-app-mern-854fd",
  storageBucket: "blog-app-mern-854fd.appspot.com",
  messagingSenderId: "692102654013",
  appId: "1:692102654013:web:c7f622270c0cc854722254"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);