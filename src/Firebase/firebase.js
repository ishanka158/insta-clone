// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnR1ftFVLNYimQdiTtlxKytyLsTzl2OvQ",
  authDomain: "insta-clone-dce1a.firebaseapp.com",
  projectId: "insta-clone-dce1a",
  storageBucket: "insta-clone-dce1a.appspot.com",
  messagingSenderId: "490833275526",
  appId: "1:490833275526:web:09fb2e5a783b2ccd3eff07",
  measurementId: "G-6J1QXR4KCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
//dd
