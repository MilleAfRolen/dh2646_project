// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";
// TODO: Add SDKs for Firebase products that you want to use

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const auth = getAuth(app);

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;