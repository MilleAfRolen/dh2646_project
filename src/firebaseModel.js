// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// const auth = getAuth(app);
// const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const rf= ref(db, REF);

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(firebase_app);


async function saveToWatchlist(email, watchlist) {
  try {
    await this.db.collection('users').doc(email).set({
      watchlist,
    });
    console.log('Watchlist saved successfully!');
  } catch (error) {
    console.error('Error saving watchlist:', error);
  }
}

async function getWatchlist(email) {
  try {
    const userDoc = await this.db.collection('users').doc(email).get();
    if (userDoc.exists) {
      return userDoc.data().watchlist || [];
    } else {
      console.log('No watchlist found for this user.');
      return [];
    }
  } catch (error) {
    console.error('Error getting watchlist:', error);
    return [];
  }
}

export { firebase_app, saveToWatchlist, getWatchlist };
