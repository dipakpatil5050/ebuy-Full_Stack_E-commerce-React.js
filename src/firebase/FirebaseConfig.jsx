// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3tgJjJq3TSxzH-E9kDqdg3cgDh_lZaF8",
  authDomain: "myfirstapp-4f95d.firebaseapp.com",
  projectId: "myfirstapp-4f95d",
  storageBucket: "myfirstapp-4f95d.appspot.com",
  messagingSenderId: "405967385619",
  appId: "1:405967385619:web:ebe38820b997020b10bbe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
