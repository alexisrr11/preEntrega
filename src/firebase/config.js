// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuxOBNqIrulw0DRIt-nY87QK-DjCp7lTM",
  authDomain: "entregarfinaltalentotech.firebaseapp.com",
  projectId: "entregarfinaltalentotech",
  storageBucket: "entregarfinaltalentotech.firebasestorage.app",
  messagingSenderId: "1091978256542",
  appId: "1:1091978256542:web:e77b387bac91d2c1cd1b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };