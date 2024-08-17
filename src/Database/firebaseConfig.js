// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyHntM4WJb3QiAoNMfj6DoNLpWfGixxCo",
  authDomain: "buybusy-i-3ed05.firebaseapp.com",
  projectId: "buybusy-i-3ed05",
  storageBucket: "buybusy-i-3ed05.appspot.com",
  messagingSenderId: "609824708533",
  appId: "1:609824708533:web:25bd0dde8147f1350c6bfc"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

