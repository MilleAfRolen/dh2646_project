// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
<<<<<<< HEAD
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";
// TODO: Add SDKs for Firebase products that you want to use

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const auth = getAuth(app);

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;
=======
import { getDatabase } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
>>>>>>> 2db7dfcacdda371d06f2288c16a93ba36d27b88b
