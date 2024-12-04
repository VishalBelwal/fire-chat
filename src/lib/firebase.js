import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuOM1kYKZ8aMO3LcGXdxyXhC2ar363CrE",
  authDomain: "fire-chat-aafef.firebaseapp.com",
  projectId: "fire-chat-aafef",
  storageBucket: "fire-chat-aafef.firebasestorage.app",
  messagingSenderId: "528931429804",
  appId: "1:528931429804:web:77da3c4ea5e43c5018ae09",
  measurementId: "G-MTSHY30GXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//for user authorization
export const auth  = getAuth()

//for database connection
export const db = getFirestore()

//upload anting file
export const storage = getStorage()