// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_QDI9qxU09hlyysJb7WEV7IhZBCS3wJU",
  authDomain: "lifera-112c6.firebaseapp.com",
  projectId: "lifera-112c6",
  storageBucket: "lifera-112c6.firebasestorage.app",
  messagingSenderId: "928430740570",
  appId: "1:928430740570:web:71d90faf932bb564307463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore to use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
