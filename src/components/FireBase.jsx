// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgWVpAdD6J3oVv6qjWHDO3bF51AHNBGQU",
  authDomain: "medicalapp-bb44c.firebaseapp.com",
  projectId: "medicalapp-bb44c",
  storageBucket: "medicalapp-bb44c.appspot.com",
  messagingSenderId: "458379877023",
  appId: "1:458379877023:web:1caf6951c268ceaf4720aa",
  measurementId: "G-Q2NRDSJPXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);