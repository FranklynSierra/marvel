// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC23jlA-1wx1dDXVyVkwmmcYB5sfv1CJhI",
  authDomain: "marvel-api-abcbf.firebaseapp.com",
  projectId: "marvel-api-abcbf",
  storageBucket: "marvel-api-abcbf.appspot.com",
  messagingSenderId: "174360666493",
  appId: "1:174360666493:web:7931933ded911bd374ec14"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;