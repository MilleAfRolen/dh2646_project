// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
