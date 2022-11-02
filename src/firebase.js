
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwQ9SryJgeotjbntREybSYmg7HsNBxVU",
  authDomain: "chat-74f56.firebaseapp.com",
  projectId: "chat-74f56",
  storageBucket: "chat-74f56.appspot.com",
  messagingSenderId: "602257949799",
  appId: "1:602257949799:web:e3e6936976b74a198c00c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();