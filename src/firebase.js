
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCKLiF8k1iQJLu2_LQF7tAKYmZyY1CHXIw",
  authDomain: "chatapp-9ee6c.firebaseapp.com",
  projectId: "chatapp-9ee6c",
  storageBucket: "chatapp-9ee6c.appspot.com",
  messagingSenderId: "673974076821",
  appId: "1:673974076821:web:bad163b76014e67daee29c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();